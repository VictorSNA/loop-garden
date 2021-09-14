import React, { useState } from 'react';
import {
  Text,
  View,
  Button,
  Image
} from 'react-native';

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

import { useSelector } from 'react-redux';

import { AntDesign } from '@expo/vector-icons';

import {
  StyledContainer,
  RightIcon,
  LeftIcon,
  HortaCard,
  Colors
} from './styles';

const { primarySaturateLight } = Colors;

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
    <HortaCard>
    <LeftIcon style={{flex: 1}}>
      <Image
        source={ require('../media/unlinked.png') }
        style={{width: '30%', height: 20}}
        resizeMode="contain"
      />
    </LeftIcon>

    <Text style={{flex: 5}}>Horta {props.horta_name}</Text>

    <RightIcon
      onPress={() => {
        console.log("oi");
      }}
        style={{borderRadius: 30, padding: 5, backgroundColor: Colors.primarySaturateLight}}
    >
      <AntDesign
        name="right"
        size={15}
        color="black"
      />
    </RightIcon>
    </HortaCard>
  )
}

export default HortaSelect;
