import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

import { useDispatch } from 'react-redux';

import * as usersActions from '../store/users-actions';

const GardenScreen = (props) => {
  const { item, goBack } = props.navigation.state.params;

  const dispatch = useDispatch();

  const unlinkGarden = () => {
    dispatch(
      usersActions.deleteGarden(item.name)
    );

    props.navigation.goBack();
  }

  return (
    <View>
      <Text>{item.name}</Text>
      <Button
          title="desvíncular horta"
          onPress={() => { unlinkGarden() }
          }
      />
    </View>
  )
}

export default GardenScreen

const styles = StyleSheet.create({})
