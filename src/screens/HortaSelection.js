import React, { useEffect } from 'react';
import {Text, View, Alert} from 'react-native';

import { useSelector } from 'react-redux'


const HortaSelection = (props) => {
  const handleCloseCreateUserSuccessMessage = () => {
    dispatch(
      usersActions.clearCreateUserSuccessMessage()
    );
  };
  useEffect(() => {
    if(state.users.length > 0){
      props.navigation.navigate('Details');
    }
  }, state);


  useEffect(() => {
    if(!user.user){
      props.navigation.navigate('Login');
    }
    }, user);

  const state = useSelector(state => state.users)

  return(
    <View>
    {state.user.successUserCreationMessage ? (
      Alert.alert(
        "Sucesso",
        state.user.successUserCreationMessage,
        [
          { text: "OK", onPress: () => handleCloseCreateUserSuccessMessage() }
        ]
      )
    ) : null}
    <Text>Hortaselection</Text>
    </View>
  )
}

export default HortaSelection;