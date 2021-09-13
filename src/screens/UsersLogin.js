import React from 'react';
import {Text, View, Button, Pressable, Alert} from 'react-native';

import UsersLoginInput from '../../src/components/UsersLoginInput';

import { useSelector, useDispatch } from 'react-redux';
import * as usersActions from '../store/users-actions';

import i18n from '../../i18n';

import {
  PageTitle,
  StyledContainer,
  InnerContainer,
  StyledButton,
  StyleTextInput,
  SubTitle,
  WrapperStandardButton,
  StandardButton,
  StandardButtonText,
  SecondaryButton,
  SecondaryButtonText
} from '../components/styles';

import { Colors } from '../components/styles';

const { primarySaturateDarkest, light } = Colors;

const UsersLogin = (props) => {
  const state = useSelector(state => state);

  const dispatch = useDispatch();

  const handleCloseFailedLoginMessage = () => {
    dispatch(
      usersActions.clearFailedLoginMesage()
    );
  };

  const goTo = (page) => {
    props.navigation.navigate(page);
  }

  const renderLogin = () => {
    return (
        <StyledContainer><PageTitle>Quem é você?</PageTitle>
          <InnerContainer>
            
            
            <UsersLoginInput goApp={() => {goTo('App')}}/>

            <SubTitle>Não possui uma conta?</SubTitle>
            <WrapperStandardButton>
              <SecondaryButton
                title="Cadastrar"
                testID="cadastrar"
                onPress={() => {
                  goTo("Signup");}
                }
              >
                <SecondaryButtonText>Cadastrar</SecondaryButtonText>
              </SecondaryButton>
            </WrapperStandardButton>

            {state.user.failedLoginMessage ? (
            Alert.alert(
              "Erro",
              i18n.t(
                "firebase.errors.auth." + state.user.failedLoginMessage.split("/")[1]
              ),
              [
                { text: "OK", onPress: () => handleCloseFailedLoginMessage() }
              ]
            )
          ) : null}
          </InnerContainer>
        </StyledContainer>

    )
  }

  return(
    renderLogin()
  )
}

export default UsersLogin;