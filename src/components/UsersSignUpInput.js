import React , { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions'

const UsersSignupInput= (props) => {
  const dispatch = useDispatch();
  const addUser = () => {
    dispatch(
      usersActions.addUser(name, email, password)
    );

    props.goBack();
  }

  const [name, setName] = useState ('');
  const captureName = (name) => {
    setName(name)
  };

  const [email, setEmail] = useState ('');
  const captureEmail = (email) => {
    setEmail(email)
  };
  const [password, setPassword] = useState ('');
  const capturePassword = (password) => {
    setPassword(password)
  };

  return(
    <View>
      <Text>Nome:</Text>
      <TextInput
        testID="name"
        onChangeText={captureName}
      />

      <Text>E-mail:</Text>
      <TextInput
        testID="email"
        onChangeText={captureEmail}
      />

      <Text>Senha:</Text>
      <TextInput secureTextEntry={true} testID="senha" onChangeText={capturePassword}/>

      <Button
        title="Cadastrar"
        testID="cadastrar-confirmar"
        onPress={() => { addUser() }}
      />
    </View>
  )
}

export default UsersSignupInput;