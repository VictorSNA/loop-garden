import React from 'react';
import {
  View,
  Text,
  Button,
  Alert,
  Image,
  AsyncStorage
} from 'react-native';
import {
  HomeContainer,
  WrapperButtonCenter,
  HomeButton,
  HomeButtonText,
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
    props.navigation.navigate('Details');
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
      <SubTitle
        style={{marginTop: 0, borderTopWidth: 0, paddingHorizontal: '10%', textAlign: 'right'}}
      >Bem vindo de volta, selecione sua horta para continuar{console.log(state)}</SubTitle>
      <WrapperButtonCenter
        style={{marginTop: '20%'}}
      >
        <HomeButton
                  title="Lista de Hortas"
                  onPress={() => { selectionHortas() }}
        >
          <Image
            source={ require('../media/icone-horta-home.png') }
            resizeMode="cover"
          />
          <HomeButtonText>Ver lista de hortas</HomeButtonText>
        </HomeButton>
      </WrapperButtonCenter>

      <WrapperButtonCenter
        style={{marginBottom: '20%'}}
      >
        <HomeButton
          title="Usuário"
          onPress={() => { detalhesUsuarios() }}
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