import React, { useState, useEffect } from 'react';

import {
  ActivityIndicator,
  View,
  AsyncStorage
} from 'react-native';

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
      props.navigation.navigate('App');
      dispatch(
        usersActions.createsUserState(response)
      );
    }else{
      props.navigation.navigate('Auth');
    }
  }

  return (
    <View>
      <ActivityIndicator />
    </View>
  );
}

export default AuthLoadingScreen;