import React, { useState } from 'react';
import {
  Text,
  View,
  Button
} from 'react-native';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

import { useSelector } from 'react-redux';

import axios from 'axios';


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

  const linkToGarden = () => {
    let new_url = props.url.replace('info', "register");

    axios.post(new_url, {headers: {Accept: 'application/json'}}, { params: {uid: props.user_uid} })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log(error);
    })
  }

  return(
    <View>
      <Text>Horta X</Text>

      <Button
        title=">"
        onPress={() => { linkToGarden() }}
      />
      </View>
  )
}

export default HortaSelect;