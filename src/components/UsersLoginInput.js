import React, { useState, useEffect } from 'react';
import {
  Text,
  View,
  Button,
  TextInput,
  Pressable
} from 'react-native';

import {
  StyleTextInput,
  LabelText,
  WrapperStandardButton,
  StandardButton,
  StandardButtonText,
  Colors
} from '../components/styles';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

import { useSelector } from 'react-redux';

const UsersLoginInput = (props) => {
  useEffect(() => {
    if(user.user != null){
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
    <LabelText>Email:</LabelText>
    <StyleTextInput
    testID="email-login-input"
    onChangeText={captureEmail}
    placeholder="Seu email"
    />


    <LabelText
    style={{marginTop: 10}}
    >Senha:</LabelText>
    <StyleTextInput
    testID="password-login-input"
    secureTextEntry={true}
    onChangeText={capturePassword}
    placeholder="Sua senha"
    />

      <WrapperStandardButton>
        <StandardButton
        onPress={() => { login() }}
        testID="button-login"
        style={({ pressed }) => ({
          opacity: pressed
            ? .7
            : 1
        })}
        >
          <StandardButtonText>Logar</StandardButtonText>
        </StandardButton>
      </WrapperStandardButton>
    </View>
  )
}

export default UsersLoginInput;
