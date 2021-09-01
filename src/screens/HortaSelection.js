import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
} from 'react-native';

import { useSelector } from 'react-redux'

import axios from 'axios';

import HortaSelect from '../components/HortaSelect';

const HortaSelection = (props) => {
  useEffect(() => {
    if(!state.user){
      props.navigation.navigate('Login');
    }
    }, state);

  const [data, setData] = useState([]);

  useEffect(() => {
    getHortasFromNetwork();
  }, []);

  const state = useSelector(state => state.user)

  const [loadingHortas, setLoadingHortas] = useState(true);

  const getHortasFromNetwork = () => {
    let base_ip = '192.168.1.';
    let max_ip = 256;
    for(var i = 0; i < max_ip; i++) {
      let url = 'http://';
      url += base_ip;
      url += i;
      url += ":8080";
      url += '/info';
      axios.get(url)
        .then((response) => {
          if(response.data.data.alive) {
            setData(previous =>[...previous, {horta: i, url: url}]);
          }
        })
        .catch((error) => {
          console.log("Nothing found at " + url);
        })
        if(i == max_ip -1){ setLoadingHortas(false); }
    }
  };

  const renderItem = () => {
    return (
      <HortaSelect />
    )
  }
  return(
    <View>
    { loadingHortas ? (
      <ActivityIndicator size="large" color="#00ff00" />
    ) : (
      <View>
      { data.length ?
        (
          <SafeAreaView>
          <FlatList
            data={data}
            renderItem={renderItem}
            keyExtractor={item => item.url}
          />
        </SafeAreaView>
        )
      :
        (<Text>Não há hortas em seu wifi</Text>)}
      </View>
    )
    }
    </View>
  )
}

export default HortaSelection;