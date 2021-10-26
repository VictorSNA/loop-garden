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

import axios from 'axios';

const HortaSelect = (props) => {
  const dispatch = useDispatch();

  const linkToGarden = () => {
    let new_url = props.url.replace('info', "register");

    axios.post(new_url, {headers: {Accept: 'application/json'}}, { params: {uid: props.user_uid} })
    .then((response) => {
      dispatch(
        usersActions.getGardens()
      );
    })
    .catch((error) => {
      console.log(error);
    })
  }

  const navigateToGarden = () => {
    props.nav.navigate('GardenScreen', {
      item: props.item,
      goBack: props.nav.goBack()
    });
  }
  return(
    <HortaCard>
    <LeftIcon style={{flex: 1}}>
      <Image
        source={ props.linked ? require('../media/linked.png') : require('../media/unlinked.png') }
        style={{width: '30%', height: 20}}
        resizeMode="contain"
      />
    </LeftIcon>

    <Text style={{flex: 5}}>Horta {props.linked ? props.item.name : props.name }</Text>


    <RightIcon
      onPress={() => {
        if(props.linked) {
          navigateToGarden();
        } else {
          linkToGarden();
        }
      }}
        style={{borderRadius: 30, padding: 5, backgroundColor: props.linked ? (Colors.primarySaturateLight) : (Colors.complementary)}}
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
