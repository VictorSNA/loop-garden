import React from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';

import { useSelector } from 'react-redux'

const Homepage = (props) => {
  const state = useSelector(state => state);

  const goTo = (page) => {
    props.navigation.navigate(page);
  }
  const emergencyButton = async () => {
    props.navigation.navigate('Details');
  }

  return(
    <View>
      <Text>Bem vindo de volta, selecione sua horta para continuar{console.log(state)}</Text>
      <Button
          title="Usuário"
          onPress={() => { emergencyButton() }
          }
        />
    </View>
  )
}

export default Homepage;