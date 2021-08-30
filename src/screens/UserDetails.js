import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as usersActions from '../store/users-actions';
import { useDispatch } from 'react-redux';

import {Text, View, Button, TextInput, Alert} from 'react-native';

const UserDetails = (props) => {
  const state = useSelector(state => state.user)

  const dispatch = useDispatch();

  const delUser = () => {
    dispatch(
      usersActions.deleteUser()
    )
  }

  const logOut = () => {
    dispatch(
      usersActions.destroySession()
    )
  }

  const redirectLogin = () => {
    props.navigation.navigate('Login');
  }

  const renderUserInfo = () => {
    return(
      <View>
      { state.user ? (
          <View>
            <Text>Email: </Text>
            <TextInput placeholder={state.user.email}/>
            <Button title="Deletar Conta" onPress={() => delUser()}/>
            <Button title="SAIR" onPress={() => logOut()}/>
          </View>

      ): (
        Alert.alert(
          "Faça login",
          "Para continuar faça o login",
          [
            { text: "OK", onPress: () => redirectLogin() }
          ]
        )
      )}
      </View>
    );
  }

  return(
    renderUserInfo()
  )
}

export default UserDetails;