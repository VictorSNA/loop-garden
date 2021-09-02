import React from 'react';
import {Text, Alert} from 'react-native';
import * as usersActions from '../store/users-actions';

import UsersSignupInput from '../components/UsersSignUpInput';

import { useSelector, useDispatch } from 'react-redux'
import i18n from '../../i18n';

const UsersSignup = (props) => {
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  const createUserFailureMessage = useSelector(
    state => state.failureUserCreationMessage
  )

  const handleCloseFailedSignupMessage = () => {
    dispatch(
      usersActions.clearCreateUserFailMessage()
    );
  };

  return(
    <>
    {state.user.failureUserCreationMessage ? (
    Alert.alert(
      "Erro",
      i18n.t(
        "firebase.errors.auth." + state.user.failureUserCreationMessage.split("/")[1]
      ),
      [
        { text: "OK", onPress: () => handleCloseFailedSignupMessage() }
      ]
    )
    ) : null}
    {createUserFailureMessage ? (
      <Text>{createUserFailureMessage}</Text>
    ) : null}
    <UsersSignupInput auth={() => { props.navigation.navigate('Auth') }}  />
    </>
  )
}

export default UsersSignup;