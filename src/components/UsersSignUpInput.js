import React , { useState } from 'react';
import {
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import {
  StyleTextInput,
  LabelText,
  WrapperStandardButton,
  StandardButton,
  StandardButtonText
} from '../components/styles';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions'

const UsersSignupInput= (props) => {
  const dispatch = useDispatch();

  const createUser = () => {
    dispatch(
      usersActions.addUser(email, password)
    );

    props.auth();
  }

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
      <LabelText>E-mail:</LabelText>
      <StyleTextInput
        testID="email"
        onChangeText={captureEmail}
        placeholder="Seu email"
      />

      <LabelText>Senha:</LabelText>
      <StyleTextInput 
        secureTextEntry={true} 
        testID="senha" 
        onChangeText={capturePassword}
        placeholder="Sua senha"
      />

      <WrapperStandardButton>
        <StandardButton
                title="Cadastrar"
                testID="cadastrar-confirmar"
                onPress={() => { createUser() }}
                
        >
          <StandardButtonText>Logar</StandardButtonText>
        </StandardButton>
      </WrapperStandardButton>
      
    </View>
  )
}

export default UsersSignupInput;
