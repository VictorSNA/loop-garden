import React, { useEffect } from 'react';
import {Text, View, Button, Platform} from 'react-native';

import UsersLoginInput from '../../src/components/UsersLoginInput';

import { useSelector } from 'react-redux'


const UsersLogin = (props) => {
  useEffect(() => {
    if(users.users.length > 0){
      props.navigation.navigate('Details');
    }
  }, users);

  const viewState = () => {
    console.log(tasks)
  }
  const users = useSelector(state => state.users)

  const renderLogin = () => {
    if(users.users.length == 0){
      return (
        <View>
        <UsersLoginInput />

        <Text>Não possui uma conta?</Text>
        <Button
          title="Cadastrar"
          testID="cadastrar"
          onPress={() => {
          props.navigation.navigate("Signup");}
          }
        />
        </View>
      )
    } else {
      return(
      <View>
        <Text onLoad={props.navigation.navigate("UsersDetails")}> Bem vindo {users.users[0].name}</Text>
        <Button title="Continuar" onPress={() => props.navigation.navigate('Details')} />
      </View>
      )
    }
  }

  return(
     renderLogin()
  )
}

UsersLogin.navigationOptions = ({ navigation }) => {
  return{
    headerTitle: "Login",
    headerRight: () =>
      <View></View>
  }
}

export default UsersLogin;
