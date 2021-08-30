import React from 'react';
import {Text, View, Button} from 'react-native';

import UsersSignupInput from '../components/UsersSignUpInput';

import { useSelector } from 'react-redux'

const UsersSignup = (props) => {
  const createUserFailureMessage = useSelector(
    state => state.failureUserCreationMessage
  )

  return(
    <>
    {createUserFailureMessage ? (
      <Text>{createUserFailureMessage}</Text>
    ) : null}
    <UsersSignupInput auth={() => { props.navigation.navigate('Auth') }}  />
    </>
  )
}

export default UsersSignup;

