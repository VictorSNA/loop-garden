import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as usersActions from '../store/users-actions';
import { useDispatch } from 'react-redux';

import {Text, View, Button, TextInput, Alert} from 'react-native';

import {
  StyledContainer,
  PageTitle,
  SubTitle,
  LabelText,
  WrapperCenterObj,
  StandardButton,
  StandardButtonText,
  Colors
} from '../components/styles';

const UserDetails = (props) => {
  const state = useSelector(state => state.user)

  const dispatch = useDispatch();

  const delUser = () => {
    dispatch(
      usersActions.deleteUser()
    )
  }

  const logOut = () => {
    dispatch(
      usersActions.destroySession()
    )
  }

  const redirectLogin = () => {
    props.navigation.navigate('Login');
  }

  const renderUserInfo = () => {
    return(
      <StyledContainer>
      { state.user ? (
          <View>
            <PageTitle>Informações do perfil </PageTitle>
            <SubTitle
              style={{marginTop: '10%', marginBottom: 0, fontWeight: "normal"}}
            >Dados do usuário:</SubTitle>
            <LabelText
              style={{textAlign: "center", fontWeight: "bold", textTransform: "uppercase", marginTop: 10}}
            >
              {state.user.email}
            </LabelText>

            <SubTitle
              style={{marginTop: '10%', marginBottom: 0, fontWeight: "normal"}}
            >Deslogar:</SubTitle>
              <WrapperCenterObj
                style={{paddingTop: 30, marginBotom: 20}}
              >
              <StandardButton
                  onPress={() => logOut()}
                  style={
                    ({ pressed }) => ({
                      backgroundColor: pressed
                      ? Colors.darkGreyHov
                      : Colors.darkGrey
                  })
                }
              >
                <StandardButtonText>Deslogar-se</StandardButtonText>
              </StandardButton>
            </WrapperCenterObj>

            <SubTitle
              style={{marginTop: '10%', marginBottom: 0, fontWeight: "normal"}}
            >Deletar conta:</SubTitle>
            <WrapperCenterObj
              style={{paddingTop: 30, marginBotom: 20}}
            >
              <StandardButton
                onPress={() => delUser()}
                style={
                  ({ pressed }) => ({
                    backgroundColor: pressed
                    ? Colors.redDarkHov
                    : Colors.redDark
                })
              }
              >
                <StandardButtonText>Deletar sua conta</StandardButtonText>
              </StandardButton>
            </WrapperCenterObj>
          </View>

      ): (
        Alert.alert(
          "Faça login",
          "Para continuar faça o login",
          [
            { text: "OK", onPress: () => redirectLogin() }
          ]
        )
      )}
      </StyledContainer>
    );
  }

  return(
    renderUserInfo()
  )
}

export default UserDetails;