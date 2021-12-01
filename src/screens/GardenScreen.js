import React, {useState} from 'react';
import {
  Text,
  FlatList,
  Image,
  TouchableOpacity
} from 'react-native';
import {
  StyledContainer,
  PageTitleShort,
  NormalParagraph,
  DeleteActionButton,
  DeleteActionButtonText,
  DeleteActionButtonIcon,
  PageHeader,
  PageIcon,
  GreenHighlighted,
  HortaCard,
  LeftIcon,
  Bold
} from '../components/styles';
import { useDispatch } from 'react-redux';
import * as usersActions from '../store/users-actions';
import {Picker} from '@react-native-picker/picker';
import {
  RightIcon,
  Colors
} from '../components/styles';
import { useSelector } from 'react-redux'
import { AntDesign } from '@expo/vector-icons';

const GardenScreen = (props) => {
  const state = useSelector(state => state.user);

  const { item, goBack } = props.navigation.state.params;
  const horta = state.hortas[item.name];

  const dispatch = useDispatch();

  const unlinkGarden = () => {
    dispatch(
      usersActions.deleteGarden(horta.name)
    );

    props.navigation.navigate('Home');
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



  const [selectedComponent, setSelectedComponent] = useState('humiditysensor');

  const renderItem = (data) => {
    return(
      <>
        <HortaCard style={{marginTop: 15}}>
        <LeftIcon style={{flex: 1}}>
          <Image
            source={require('../media/linked.png')}
            style={{width: '30%', height: 20}}
            resizeMode="contain"
          />
        </LeftIcon>

        <Text style={{flex: 5}}>{data.item.type == "humidity_sensor" ? "Sensor de umidade" : "Válvula solenoide" }</Text>


        <RightIcon
          onPress={() => {goToComponent(data)}}
            style={{borderRadius: 30, padding: 5, backgroundColor: Colors.primarySaturateLight}}
        >
          <AntDesign
            name="right"
            size={15}
            color="black"
          />
        </RightIcon>
        </HortaCard>
      </>
    );
  }

  return horta ? (
    <StyledContainer>
      <PageHeader>
        <PageTitleShort>Horta {horta.name}</PageTitleShort>
        <PageIcon>
          <Image
            source={ require('../media/icone-horta-home.png') }
            resizeMode="contain"
            style={{width: 45, height: 45}}
          /> 
        </PageIcon>
      </PageHeader>


      <NormalParagraph style={{marginBottom: 70, flex: 1, flexDirection: 'column'}}>
        <Text>Umidade: </Text>
        <GreenHighlighted>{
        Object.keys(horta.components).map(
          (key) => horta.components[key].type == "humidity_sensor" ? horta.components[key].measures.humidity + "%": ""
        )
      }</GreenHighlighted></NormalParagraph>

      <NormalParagraph>Status:</NormalParagraph>
      <NormalParagraph>
      <GreenHighlighted>{ horta.linked ? "horta vínculada " : "horta desvínculada "}</GreenHighlighted>
      <Image
        source={require('../media/linked.png')}
        style={{width: 15, height: 15}}
        resizeMode="contain"
      />
      </NormalParagraph>

      <DeleteActionButton style={{marginTop: 10}}
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

      <NormalParagraph style={{textAlign: 'center', marginTop: 70}}>DISPOSITIVOS</NormalParagraph>

      <FlatList
            data={horta.components}
            renderItem={(data) => renderItem(data)}
            keyExtractor={horta.type}
          />

      <NormalParagraph style={{textAlign: 'center', marginTop: 70}}>ADICIONAR NOVO DISPOSITIVO</NormalParagraph>

      <Picker
        style={{marginTop: 20}}
        selectedValue='humiditySensor'
        onValueChange={(itemValue, itemIndex) =>
          setSelectedComponent(itemValue)
        }>
        <Picker.Item label="Medidor de umidade do solo" value="humiditysensor" />
        <Picker.Item label="Válvula solenoide" value="solenoide" />
      </Picker>

      <TouchableOpacity onPress={() => {addComponent()}}>
        <HortaCard
          style={
          {marginTop: 15, backgroundColor: Colors.primarySaturateDarkest, flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center'}
          }>
          <Bold style={{fontSize: 16, color: 'white'}}>ADICIONAR DISPOSITIVO</Bold>
        </HortaCard>
      </TouchableOpacity>

    </StyledContainer>
  ) : (
    <StyledContainer>
    <PageHeader>
      <PageTitleShort>Horta não existe</PageTitleShort>
      <PageIcon>
        <Image
          source={ require('../media/icone-horta-home.png') }
          resizeMode="contain"
          style={{width: 45, height: 45}}
        /> 
      </PageIcon>
    </PageHeader>

  </StyledContainer>
  )
}

export default GardenScreen;