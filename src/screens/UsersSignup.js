import React from 'react';
import {Text, View, Button} from 'react-native';

import UsersSignupInput from '../components/UsersSignUpInput';

const UsersSignup = (props) => {

  return(
    <UsersSignupInput goBack={() => { props.navigation.goBack() }}  />
  )
}

export default UsersSignup;

