import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import * as usersActions from '../store/users-actions';
import { useDispatch } from 'react-redux';

import {Text, View, Button, Platform, TextInput} from 'react-native';


const UserDetails = (props) => {
  const dispatch = useDispatch();
  const delUser = () => {
    dispatch(
      usersActions.delUser(users.users[0].email)
    );

    props.navigation.navigate('Login');
  }

  const updateUser= () => {
    dispatch(
      usersActions.updateUser(users.users[0].id, name, email)
    );
  }

  const logOut = () => {
    dispatch(
      usersActions.destroySession(users.users[0].id)
    );

    props.navigation.navigate('Login');
  }

  const users = useSelector(state => state.users)

  const renderUserInfo = () => {
    if(users.users.length > 0){
      return(
        <View>
        <Text>Nome: </Text>
        <TextInput placeholder={users.users[0].name} onChangeText={captureName}/>
        <Text>Email: </Text>
        <TextInput placeholder={users.users[0].email} onChangeText={captureEmail}/>

        <Button title="Atualizar Conta" onPress={() => updateUser()}/>

        <Button title="Deletar Conta" onPress={() => delUser()}/>

        <Button title="SAIR" onPress={() => logOut()}/>
        </View>
      )
    }else{
      return <View><Text>Faça login para continuar</Text></View>
    }
  }

  const [name, setName] = useState ('');
  const captureName = (name) => {
    setName(name)
  };

  const [email, setEmail] = useState ('');
  const captureEmail = (email) => {
    setEmail(email)
  };

  return(
    renderUserInfo()
  )
}

export default UserDetails;
