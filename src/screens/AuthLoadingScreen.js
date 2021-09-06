import React, { useState, useEffect } from 'react';

import {
  ActivityIndicator,
  View,
  Image,
  AsyncStorage
} from 'react-native';

import {
  FullHeight,
  ImageLogoLoading
} from '../components/styles';

import { useDispatch } from 'react-redux';
import * as usersActions from '../store/users-actions'

//import { logo } from '../media/logo.gif';

const AuthLoadingScreen = (props) => {
  useEffect(() => {
    bootstrapAsync();
  });
  const dispatch = useDispatch();

  const bootstrapAsync = async () => {
    let response = await AsyncStorage.getItem('userData');

    if(response) {
      props.navigation.navigate('App');
      dispatch(
        usersActions.createsUserState(response)
      );
    }
    else{
      setTimeout(() => {props.navigation.navigate('Auth');}, 5000)
    }
  }
  
  return (
    <FullHeight>
      <Image
        source={ require('../media/logo.png') } 
        style={{width: '60%'}}
      />
      <ActivityIndicator />
    </FullHeight>
  );
}

export default AuthLoadingScreen;