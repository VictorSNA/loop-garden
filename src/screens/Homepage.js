import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  AsyncStorage
} from 'react-native';

import { useSelector, useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

const Homepage = (props) => {
  const dispatch = useDispatch();

  const handleCloseCreateUserSuccessMessage = () => {
    dispatch(
      usersActions.clearCreateUserSuccessMessage()
    );
  };

  const state = useSelector(state => state);

  const detalhesUsuarios = async () => {
    props.navigation.navigate('Details');
  }

  const selectionHortas = async () => {
    props.navigation.navigate('Hortas');
  }

  return(
    <View>
      {state.user.successUserCreationMessage ? (
        Alert.alert(
          "Sucesso",
          state.user.successUserCreationMessage,
          [
            { text: "OK", onPress: () => handleCloseCreateUserSuccessMessage() }
          ]
        )
      ) : null}
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