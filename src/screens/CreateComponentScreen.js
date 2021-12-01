import React, {useState, useEffect} from 'react'
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

  useEffect(() => {
    setDefaultConf();
  }, []);

  const [configurations, setConfigurations] = useState({});
  const [measures, setMeasures] = useState({});

  const addComponent = (component) => {
    let gardenName = props.navigation.state.params.gardenName;
    let options = {};
    options["configurations"] = configurations;
    options["measures"] = measures;
    dispatch(
      usersActions.addComponent(gardenName, component, options)
    );
    props.navigation.goBack();
  }

  const setDefaultConf = () => {
    let params = props.navigation.state.params;
    if(params.component == "humidity_sensor") {
      setConfigurations({"check_humidity": 5000});
      setMeasures({humidity: 100});
    } else {
      setConfigurations({"open_humidity_below": 600});
      setMeasures({open: false});
    }
  };

  const captureHumiditySensorRoutine = (time) => {
    if(time){
      setConfigurations({"check_humidity": time * 1000});
    }else{
      setConfigurations({"check_humidity": 5000});
    }
  }

  const captureSolenoideOpenPercentage = (percentage) => {
    if(percentage){
      setConfigurations({"open_humidity_below": percentage * 10});
    }else{
      setConfigurations({"open_humidity_below": 600});
    }
  }

  const renderComponentInfo = () => {
    let params = props.navigation.state.params;
    if(params.component == 'humidity_sensor') {
      return (
        <>
          <PageHeader>
            <PageTitleShort>Novo Sensor de Umidade</PageTitleShort>
            <PageIcon>
              <Image
                source={ require('../media/icone-horta-home.png') }
                resizeMode="contain"
                style={{width: 45, height: 45}}
              /> 
            </PageIcon>
          </PageHeader>

          <NormalParagraph style={{width: '60%', textAlign: 'justify', marginTop: 40, marginBottom: 20}}>A cada quantos <Bold>segundos</Bold> deve ser <Bold>medido</Bold> a <Bold>umidade do solo</Bold>?</NormalParagraph>

          <StyleTextInput
            onChangeText={(time) => {captureHumiditySensorRoutine(time)}}
            placeholder="digite o tempo em segundos, exemplo: 60."
            style={{marginBottom: 50}}
          />

          <TouchableOpacity onPress={() => {addComponent("humidity_sensor")}}>
            <HortaCard
              style={
                {
                  marginTop: 15, backgroundColor: Colors.primarySaturateDarkest, flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center',   padding: 7
                }
              }>
              <Bold style={{fontSize: 16, color: 'white'}}>ADICIONAR</Bold>
            </HortaCard>
          </TouchableOpacity>
        </>
      );
    }else if(params.component == 'solenoide') {
      return (
        <>
          <PageHeader>
            <PageTitleShort>Nova Válvula Solenoide</PageTitleShort>
            <PageIcon>
              <Image
                source={ require('../media/icone-horta-home.png') }
                resizeMode="contain"
                style={{width: 45, height: 45}}
              /> 
            </PageIcon>
          </PageHeader>

        <NormalParagraph style={{width: '60%', textAlign: 'justify', marginTop: 40, marginBottom: 20}}>Quando o solo estiver com a <Bold>umidade abaixo</Bold> de quantos porcento deve ser <Bold>iniciado</Bold> a <Bold>irrigação</Bold>?</NormalParagraph>

        <StyleTextInput
          onChangeText={(percentage) => {captureSolenoideOpenPercentage(percentage)}}
          placeholder="digite a porcentagem, exemplo: 1, 50, 100."
          style={{marginBottom: 50}}
        />

        <TouchableOpacity onPress={() => {addComponent("solenoide")}}>
          <HortaCard
            style={
              {
                marginTop: 15, backgroundColor: Colors.primarySaturateDarkest, flex: 1, justifyContent: 'center', flexDirection: 'row', alignItems: 'center',   padding: 7
              }
            }>
            <Bold style={{fontSize: 16, color: 'white'}}>ADICIONAR</Bold>
          </HortaCard>
        </TouchableOpacity>
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