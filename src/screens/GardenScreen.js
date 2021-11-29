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
  DeleteActionButtonIcon
} from '../components/styles';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

import {Picker} from '@react-native-picker/picker';

import { EvilIcons } from '@expo/vector-icons';

import {
  RightIcon,
  Colors
} from '../components/styles';

import { AntDesign } from '@expo/vector-icons';

const GardenScreen = (props) => {
  const { item, goBack } = props.navigation.state.params;

  const dispatch = useDispatch();

  const unlinkGarden = () => {
    dispatch(
      usersActions.deleteGarden(item.name)
    );

    props.navigation.goBack();
  }

  const addComponent = () => {
    if(selectedComponent == 'humiditysensor') {
      props.navigation.navigate('CreateComponent', {component: 'humidity_sensor', gardenName: item.name});
    }else if(selectedComponent == 'solenoide') {
      props.navigation.navigate('CreateComponent', {component: 'solenoide', gardenName: item.name});
    }else {
      alert('Nenhum componente foi escolhido')
    }
  }

  const goToComponent = (componentData) => {
    props.navigation.navigate('Component', {component: componentData, gardenName: item.name});
  }

  const deleteComponent = (index) => {
    dispatch(
      usersActions.deleteComponent(item.name, index)
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
      <PageTitle>Horta</PageTitle>
      <PageTitle>{item.name}</PageTitle>

      <NormalParagraph>Status:</NormalParagraph>
      <NormalParagraph>horta vínculada
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
            data={item.components}
            renderItem={(data) => renderItem(data)}
            keyExtractor={item.type}
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
