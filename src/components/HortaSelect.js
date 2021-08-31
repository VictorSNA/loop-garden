import React, { useState } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

import { useSelector } from 'react-redux';

const HortaSelect = (props) => {
  const user = useSelector(state => state.user);

  const dispatch = useDispatch();

  const [link, setLink] = useState (false);
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
      <Text>Horta X</Text>

      <Button
        title=">"
        onPress={() => { login() }}
      />
      </View>
  )
}

export default HortaSelect;