import React, { useEffect } from 'react';
import {Text, View, Button} from 'react-native';

import UsersLoginInput from '../../src/components/UsersLoginInput';


const UsersLogin = (props) => {
  const goTo = (page) => {
    props.navigation.navigate(page);
  }

  const renderLogin = () => {
    return (
      <View>
        <UsersLoginInput goApp={() => {goTo('App')}}/>
      
        <Text>Não possui uma conta?</Text>
        <Button
          title="Cadastrar"
          testID="cadastrar"
          onPress={() => {
            goTo("Signup");}
          }
        />
      </View>
    )
  }

  return(
    renderLogin()
  )
}

export default UsersLogin;