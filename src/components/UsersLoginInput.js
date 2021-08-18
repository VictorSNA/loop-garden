import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions'

const UsersLoginInput = (props) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState ('');
  const captureEmail = (email) => {
    setEmail(email)
  };
  const [password, setPassword] = useState ('');
  const capturePassword = (password) => {
    setPassword(password)
  };

  const login = () => {
    dispatch(
      usersActions.login(email, password)
    );
  }

  return(
    <View>
      <Text>Email:</Text>
      <TextInput
        testID=""
        onChangeText={captureEmail}
      />

      <Text>Senha:</Text>
      <TextInput
        testID=""
        secureTextEntry={true}
        onChangeText={capturePassword}
      />

      <Button
        title="Login"
        testID=""
        onPress={() => { login() }}
      />

      </View>
  )
}


export default UsersLoginInput;

