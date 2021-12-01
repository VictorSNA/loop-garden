import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity
} from 'react-native'

import {
  StyledContainer,
  StyleTextInput,
  DeleteActionButton,
  DeleteActionButtonText,
  DeleteActionButtonIcon,
  PageHeader,
  PageTitleShort,
  PageIcon,
  NormalParagraph,
  GreenHighlighted,
  Bold,
  Colors,
  HortaCard
} from '../components/styles';

import { useDispatch } from 'react-redux';
import * as usersActions from '../store/users-actions';


const GardenScreen = (props) => {
  const dispatch = useDispatch();

  const [configurations, setConfigurations] = useState({});

  const updateComponent = (component) => {
    let gardenName = props.navigation.state.params.gardenName;
    let options = {};

    options["configurations"] = configurations != {} ? configurations : NULL;

    dispatch(
      usersActions.updateComponent(gardenName, component, options)
    );
    props.navigation.goBack();
  }

  const deleteComponent = () => {
    let parameters = props.navigation.state.params;

    dispatch(
      usersActions.deleteComponent(parameters.gardenName, parameters.component.index)
    );

    props.navigation.goBack();
  };

  const captureHumiditySensorRoutine = (time) => {
    if(time){
      setConfigurations({"check_humidity": time * 1000});
    }
  }

  const captureSolenoideOpenPercentage = (percentage) => {
    if(percentage){
      setConfigurations({"open_humidity_below": percentage * 10});
    }
  }

  const renderComponentInfo = () => {
    let params = props.navigation.state.params;
    if(params.component.item.type == 'humidity_sensor') {
      let actualTimer = params.component.item.configurations.check_humidity;

      return (
        <>
          <PageHeader>
            <PageTitleShort>Sensor de Umidade</PageTitleShort>
            <PageIcon>
              <Image
                source={ require('../media/icone-horta-home.png') }
                resizeMode="contain"
                style={{width: 45, height: 45}}
              /> 
            </PageIcon>
          </PageHeader>


          <NormalParagraph style={{marginBottom: 25, flex: 1, flexDirection: 'column'}}>
            <Text>status: </Text>
            <GreenHighlighted>
              checando a umidade do solo a cada {actualTimer / 1000} segundos
          </GreenHighlighted></NormalParagraph>

          <NormalParagraph style={{width: '60%', textAlign: 'justify', marginTop: 40, marginBottom: 20}}>A cada quantos <Bold>segundos</Bold> deve ser <Bold>medido</Bold> a <Bold>umidade do solo</Bold>?</NormalParagraph>

          <StyleTextInput
            onChangeText={captureHumiditySensorRoutine}
            placeholder="digite o tempo em segundos, exemplo: 60."
            style={{marginBottom: 50}}
          />

          <TouchableOpacity onPress={() => {updateComponent(params.component.index)}}>
            <HortaCard
              style={
                {
                  marginTop: 15, backgroundColor: Colors.primarySaturateDarkest, flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center',   padding: 7
                }
              }>
              <Bold style={{fontSize: 16, color: 'white'}}>ATUALIZAR</Bold>
            </HortaCard>
          </TouchableOpacity>

          <DeleteActionButton style={{marginTop: 20}}
            onPress={() => { deleteComponent(params.index) }
            }
          >
          <DeleteActionButtonText>
            desvíncular dispositivo
          </DeleteActionButtonText>
          <DeleteActionButtonIcon>
            <Image
              source={require('../media/unlinked.png')}
              style={{width: 15, height: 15}}
              resizeMode="contain"
            />
          </DeleteActionButtonIcon>
          </DeleteActionButton>
        </>
      );
    }else if(params.component.item.type == 'solenoide') {
      let solenoidePercent = params.component.item.configurations.open_humidity_below

      return (
        <>
        <PageHeader>
          <PageTitleShort>Válvula Solenoide</PageTitleShort>
          <PageIcon>
            <Image
              source={ require('../media/icone-horta-home.png') }
              resizeMode="contain"
              style={{width: 45, height: 45}}
            /> 
          </PageIcon>
        </PageHeader>


        <NormalParagraph style={{marginBottom: 25, flex: 1, flexDirection: 'column'}}>
          <Text>status: </Text>
          <GreenHighlighted>
           irrigando com a humidade abaixo de {solenoidePercent / 10}%
        </GreenHighlighted></NormalParagraph>

        <NormalParagraph style={{width: '60%', textAlign: 'justify', marginTop: 40, marginBottom: 20}}>Quando o solo estiver com a <Bold>umidade abaixo</Bold> de quantos porcento deve ser <Bold>iniciado</Bold> a <Bold>irrigação</Bold>?</NormalParagraph>

        <StyleTextInput
          onChangeText={captureSolenoideOpenPercentage}
          placeholder="digite a porcentagem, exemplo: 1, 50, 100."
          style={{marginBottom: 50}}
        />

        <TouchableOpacity onPress={() => {updateComponent(params.component.index)}}>
          <HortaCard
            style={
              {
                marginTop: 15, backgroundColor: Colors.primarySaturateDarkest, flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center',   padding: 7
              }
            }>
            <Bold style={{fontSize: 16, color: 'white'}}>ATUALIZAR</Bold>
          </HortaCard>
        </TouchableOpacity>

        <DeleteActionButton style={{marginTop: 20}}
          onPress={() => { deleteComponent(params.index) }
          }
        >
        <DeleteActionButtonText>
          desvíncular dispositivo
        </DeleteActionButtonText>
        <DeleteActionButtonIcon>
          <Image
            source={require('../media/unlinked.png')}
            style={{width: 15, height: 15}}
            resizeMode="contain"
          />
        </DeleteActionButtonIcon>
        </DeleteActionButton>
      </>
      );
    }
  }
  return (
    <StyledContainer>
      { renderComponentInfo() }
    </StyledContainer>
  )
}

export default GardenScreen;