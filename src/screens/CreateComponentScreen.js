import React, {useState, useEffect} from 'react'
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
  }

  const setDefaultConf = () => {
    let params = props.navigation.state.params;
    if(params.component == "humidity_sensor") {
      setConfigurations({"check_humidity": 5000});
      setMeasures({humidity: 1000});
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
          <Text>Novo Sensor de Umidade</Text>
          <Text>Medir umidade do solo a cada quantos segundos?</Text>
          <StyleTextInput
            onChangeText={captureHumiditySensorRoutine}
            placeholder="5"
          />
          <Button
            title="adicionar"
            onPress={()=> { addComponent("humidity_sensor")}}
          />
        </>
      );
    }else if(params.component == 'solenoide') {
      return (
        <>
          <Text>Nova válvula solenoide</Text>
          <Text>Irrigar se a umidade estivar abaixo de quantos porcento?</Text>
          <StyleTextInput
            onChangeText={captureSolenoideOpenPercentage}
            placeholder="60"
          />
          <Button
            title="adicionar"
            onPress={()=> { addComponent("solenoide")}}
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
