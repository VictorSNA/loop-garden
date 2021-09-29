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


const AuthLoadingScreen = (props) => {
  useEffect(() => {
    bootstrapAsync();
  });
  const dispatch = useDispatch();

  const bootstrapAsync = async () => {
    let response = await AsyncStorage.getItem('userData');

    if(response) {
      dispatch(
        usersActions.createsUserState(response)
      );

      dispatch(
        usersActions.getGardens()
      );
      setTimeout(() => {props.navigation.navigate('App');}, 550);
    }
    else{
      setTimeout(() => {props.navigation.navigate('Auth');}, 550)
    }
  }

  return (
    <FullHeight>
      <Image
        source={ require('../media/logo.png') }
        style={{width: '70%', paddingTop: '20%'}}
        resizeMode="contain"
      />
      <ActivityIndicator />
    </FullHeight>
  );
}

export default AuthLoadingScreen;
