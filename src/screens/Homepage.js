import React from 'react';
import {View, Text, Button, AsyncStorage} from 'react-native';

import { useSelector } from 'react-redux'

const Homepage = (props) => {
  const state = useSelector(state => state);

  const goTo = (page) => {
    props.navigation.navigate(page);
  }
  const detalhesUsuarios = async () => {
    props.navigation.navigate('Details');
  }

  const selectionHortas = async () => {
    props.navigation.navigate('Hortas');
  }

  return(
    <View>
      <Text>Bem vindo de volta, selecione sua horta para continuar{console.log(state)}</Text>
      <Button
          title="Usuário"
          onPress={() => { detalhesUsuarios() }
          }
      />
      <Button
          title="Lista de Hortas"
          onPress={() => { selectionHortas() }
          }
      />
    </View>
  )
}

export default Homepage;