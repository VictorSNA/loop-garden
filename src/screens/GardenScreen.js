import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  FlatList,
  Image
} from 'react-native';
import {
  StyledContainer,
  PageTitle,
  SubTitle,
  WrapperCenterObj,
  NormalParagraph,
  DeleteActionButton,
  DeleteActionButtonText,
  DeleteActionButtonIcon,
  PageHeader,
  PageIcon
} from '../components/styles';
import { useDispatch } from 'react-redux';
import * as usersActions from '../store/users-actions';
import {Picker} from '@react-native-picker/picker';
import { EvilIcons } from '@expo/vector-icons';
import {
  RightIcon,
  Colors
} from '../components/styles';
import { useSelector } from 'react-redux'

const GardenScreen = (props) => {
  const state = useSelector(state => state.user);

  const { item, goBack } = props.navigation.state.params;
  const horta = state.hortas[item.name];

  const dispatch = useDispatch();

  const unlinkGarden = () => {
    dispatch(
      usersActions.deleteGarden(item.name)
    );

    props.navigation.goBack();
  }

  const addComponent = () => {
    if(selectedComponent == 'humiditysensor') {
      props.navigation.navigate('CreateComponent', {component: 'humidity_sensor', gardenName: horta.name});
    }else if(selectedComponent == 'solenoide') {
      props.navigation.navigate('CreateComponent', {component: 'solenoide', gardenName: horta.name});
    }else {
      alert('Nenhum componente foi escolhido')
    }
  }

  const goToComponent = (componentData) => {
    props.navigation.navigate('Component', {component: componentData, gardenName: horta.name});
  }

  const deleteComponent = (index) => {
    dispatch(
      usersActions.deleteComponent(horta.name, index)
    );
  };

  const [selectedComponent, setSelectedComponent] = useState('humiditysensor');

  const renderItem = (data) => {
    return(
      <View style={{borderRadius: 30, padding: 5}}>

          <Text onPress={() => goToComponent(data)}>Dispositivo: {data.item.type}</Text>
          <RightIcon
          onPress={() => {
            deleteComponent(data.index);
          }}
            style={{borderRadius: 30, padding: 5}}
        >
          <EvilIcons
            name="trash"
            size={20}
            color={Colors.complementary}
          />
        </RightIcon>

      </View>
    );
  }

  return (
    <StyledContainer>
      <PageHeader>
        <PageTitle>Horta {horta.name}</PageTitle>
        <PageIcon>
          <Image
            source={ require('../media/icone-horta-home.png') }
            resizeMode="contain"
          /> 
        </PageIcon>
      </PageHeader>


      <NormalParagraph>Umidade: {
        Object.keys(horta.components).map(
          (key) => horta.components[key].type == "humidity_sensor" ? horta.components[key].measures.humidity + "%": ""
        )
      }</NormalParagraph>

      <NormalParagraph>Status:</NormalParagraph>
      <NormalParagraph>{ horta.linked ? "horta vínculada" : "horta desvínculada"}
      <Image
        source={require('../media/linked.png')}
        style={{width: 15, height: 15}}
        resizeMode="contain"
      />
      </NormalParagraph>

      <DeleteActionButton style={{marginTop: 40, minWidth: '80%'}}
          onPress={() => { unlinkGarden() }
          }
      >
        <DeleteActionButtonText>
          desvíncular horta
        </DeleteActionButtonText>
        <DeleteActionButtonIcon>
          <Image
            source={require('../media/unlinked.png')}
            style={{width: 15, height: 15}}
            resizeMode="contain"
          />
        </DeleteActionButtonIcon>
      </DeleteActionButton>

      <Text>adicionados</Text>
      <FlatList
            data={horta.components}
            renderItem={(data) => renderItem(data)}
            keyExtractor={horta.type}
          />

      <Picker
        selectedValue='humiditySensor'
        onValueChange={(itemValue, itemIndex) =>
          setSelectedComponent(itemValue)
        }>
        <Picker.Item label="Medidor de umidade do solo" value="humiditysensor" />
        <Picker.Item label="Válvula solenoide" value="solenoide" />
      </Picker>


      <Button
          title="adicionar dispositivos"
          onPress={() => { addComponent() }
          }
      />
    </StyledContainer>
  )
}

export default GardenScreen

const styles = StyleSheet.create({})
