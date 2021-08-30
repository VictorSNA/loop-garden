import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

import { useSelector } from 'react-redux';

const UsersLoginInput = (props) => {
  useEffect(() => {
  if(user.user != null){
    console.log(user.user);
    props.goApp();
  }
  }, user);

  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [email, setEmail] = useState ('');
  const captureEmail = (email) => {
    setEmail(email)
  };
  const [password, setPassword] = useState ('');
  const capturePassword = (password) => {
    setPassword(password)
  };

  const login = async () => {
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