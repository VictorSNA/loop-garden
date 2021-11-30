import React, {useState} from 'react'
import {
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native'

import {
  StyleTextInput,
  LabelText,
  WrapperStandardButton,
  StandardButton,
  StandardButtonText
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
      let actualTimer = params.component.item.configurations.check_humidity

      return (
        <>
          <Text>Sensor de Umidade</Text>
          <Text>Checando a umidade do solo a cada: {actualTimer / 1000} segundos</Text>
          <Text>Medir umidade do solo a cada quantos segundos?</Text>
          <StyleTextInput
            onChangeText={captureHumiditySensorRoutine}
            placeholder=""
          />
          <Button
            title="atualizar"
            onPress={()=> { updateComponent(params.component.index)}}
          />
        </>
      );
    }else if(params.component.item.type == 'solenoide') {
      let solenoidePercent = params.component.item.configurations.open_humidity_below

      return (
        <>
          <Text>Válvula solenoide</Text>
          <Text>Irrigando com a humidade abaixo de: {solenoidePercent / 10}%</Text>
          <Text>Irrigar se a umidade estivar abaixo de quantos porcento?</Text>
          <StyleTextInput
            onChangeText={captureSolenoideOpenPercentage}
            placeholder=""
          />
          <Button
            title="atualizar"
            onPress={()=> { updateComponent(params.component.index)}}
          />
        </>
      );
    }
  }
  return (
    <View>
      { renderComponentInfo() }
    </View>
  )
}

export default GardenScreen

const styles = StyleSheet.create({})
