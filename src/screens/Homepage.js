import React from 'react';

import {
  Alert,
  Image
} from 'react-native';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {
  HomeContainer,
  WrapperButtonCenter,
  HomeButton,
  HomeButtonText,
  PageTitle,
  SubTitle
} from '../components/styles';

import { useSelector, useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

const Homepage = (props) => {
  const dispatch = useDispatch();

  const handleCloseCreateUserSuccessMessage = () => {
    dispatch(
      usersActions.clearCreateUserSuccessMessage()
    );
  };

  const state = useSelector(state => state);

  const detalhesUsuarios = async () => {
    props.navigation.navigate('Detalhes');
  }

  const selectionHortas = async () => {
    props.navigation.navigate('Hortas');
  }

  return(
    <HomeContainer>
      {state.user.successUserCreationMessage ? (
        Alert.alert(
          "Sucesso",
          state.user.successUserCreationMessage,
          [
            { text: "OK", onPress: () => handleCloseCreateUserSuccessMessage() }
          ]
        )
      ) : null}
      <PageTitle
        style={{marginTop: 0, borderTopWidth: 0, paddingHorizontal: '10%', paddingBottom: 0}}
      >Bem vindo!</PageTitle>
      <SubTitle>Selecione uma opção abaixo:{console.log(state)}</SubTitle>
      <WrapperButtonCenter
        style={{marginTop: 10}}
      >
        <HomeButton
                  title="Lista de Hortas"
                  testID="view-gardens"
                  onPress={() => { selectionHortas() }}
                  style={({ pressed }) => ({
                    opacity: pressed
                      ? .7
                      : 1
                  })}
        >
          <Image
            source={ require('../media/icone-horta-home.png') }
            resizeMode="cover"
          />
          <HomeButtonText>Ver lista de hortas</HomeButtonText>
        </HomeButton>
      </WrapperButtonCenter>

      <WrapperButtonCenter
        style={{marginBottom: 0}}
      >
        <HomeButton
          title="Usuário"
          onPress={() => { detalhesUsuarios() }}
          style={({ pressed }) => ({
            opacity: pressed
              ? .7
              : 1
          })}
        >
          <Image
            source={ require('../media/icone-perfil-home.png') }
            resizeMode="cover"
          />
          <HomeButtonText>Perfil do usuário</HomeButtonText>
        </HomeButton>
      </WrapperButtonCenter>
    </HomeContainer>
  )
}

export default Homepage;
