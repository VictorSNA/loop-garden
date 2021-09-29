import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View
} from 'react-native';

import { useSelector } from 'react-redux'

import axios from 'axios';

import HortaSelect from '../components/HortaSelect';

import {
  StyledContainer,
  PageTitle,
  Colors
} from '../components/styles';

const HortaSelection = (props) => {
  useEffect(() => {
    if(!state.user){
      props.navigation.navigate('Login');
    }
    }, state);

  const [data, setData] = useState([]);

  const state = useSelector(state => state.user);

  useEffect(() => {
    getHortasFromNetwork();
  }, []);

  useEffect(() => {
    setData([]);
  }, [state.hortas]);

  const [loadingHortas, setLoadingHortas] = useState(true);

  const linkedGarden = (horta) => {
    if(state.hortas[horta] != undefined) {
      return true;
    }

    return false;
  }

  const getHortasFromNetwork = () => {
    let base_ip = '192.168.1.';
    let max_ip = 255;
    for(var i = 1; i < max_ip; i++) {
      let url = 'http://';
      url += base_ip;
      url += i;
      url += ":8080";
      url += '/info';
      axios.get(url)
        .then((response) => {
          if(response.data.data.alive) {
            let horta_name = response.data.data.arduino_id;
            if(!linkedGarden(horta_name)) {
              setData(previous =>[...previous, {horta: horta_name, url: url}]);
            }
          }
        })
        .catch((error) => {
        })
        if(i == max_ip -1){ setLoadingHortas(false); }
    }
  };

  const renderItem = (item) => {
    console.log(item)
    return (
      <HortaSelect name={item.horta} url={item.item.url} user_uid={state.user.uid}/>
    )
  }

  const renderItemLinked = (item) => {
    return (
      <HortaSelect nav={props.navigation} url="" user_uid="" linked="true" item={item.item}/>
    )
  }

  const removeItemFromState = (item) => {
    setState({data: data.filter(function(horta) { 
      return horta !== item
    })});
  }

  return(
    <StyledContainer>
    { loadingHortas ? (
      <ActivityIndicator size="large" color="#00ff00" />
    ) : (
      <View>
      { data.length || state.hortas ?
        (
          <>
          <PageTitle>Selecione uma horta</PageTitle>

          <Text>Vínculadas</Text>
          { state.hortas ? (
            <>
           <SafeAreaView>
           <FlatList
             data={Object.keys(state.hortas).map(key => state.hortas[key])}
             renderItem={(item) => renderItemLinked(item)}
             keyExtractor={item => item.name}
           />
           </SafeAreaView>
           </>
          ) : <Text>Não há outras hortas</Text>}

          <Text>Desvínculadas</Text>
          { data.length ?
          <SafeAreaView>
          <FlatList
            data={Object.values(data)}
            renderItem={(item) => renderItem(item)}
            keyExtractor={item => item.url}
          />
          </SafeAreaView>
          : <Text>Não há outras hortas</Text>}
          </>
        )
      :
        (<PageTitle>Não há hortas em seu wifi</PageTitle>)}
      </View>
    )
    }
    </StyledContainer>
  )
}

export default HortaSelection;
