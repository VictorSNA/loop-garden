import React, { useEffect, useState } from 'react';

import {
  ActivityIndicator,
  FlatList,
  SafeAreaView,
  Text,
  View,
  Linking,
  Pressable,
  Image
} from 'react-native';

import { useSelector } from 'react-redux'

import axios from 'axios';

import HortaSelect from '../components/HortaSelect';

import {
  StyledContainer,
  PageTitle,
  SubTitle,
  WrapperCenterObj,
  Colors
} from '../components/styles';

const WhatsApp = (text, phone) => {
  Linking.openURL(`whatsapp://send?text=${text}&phone=${phone}`);
 }


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
            setData(previous =>[...previous, {horta: response.data.data.arduino_id, url: url}]);
          }
        })
        .catch((error) => {
          console.log("Nothing found at " + url);
        })
        if(i == max_ip -1){ setLoadingHortas(false); }
    }
  };

  const renderItem = (value) => {
    return (
      <HortaSelect horta_name={value.item.horta}/>
    )
  }
  return(
    <StyledContainer>
    { loadingHortas ? (
      <ActivityIndicator size="large" color="#00ff00" />
    ) : (
      <View>
      { data.length ?
        (
          <>
          <PageTitle>Selecione uma horta</PageTitle>

          <SafeAreaView>
          <FlatList
            data={Object.values(data)}
            renderItem={value => renderItem(value)}
            keyExtractor={item => item.url}
          />
          </SafeAreaView>
          </>
        )
      :
        (
          <>
            <PageTitle>Não há hortas em seu wifi</PageTitle>
            <WrapperCenterObj>
              <Image
                  source={ require('../media/icone-sem-wifi.png') }
                  resizeMode="contain"
                />
            </WrapperCenterObj>
            <SubTitle
              style={{textAlign: 'left', paddingHorizontal: '10%'}}
            >Precisa de um técnico? {"\n"}
Você tem alguma dúvida?</SubTitle>
            <WrapperCenterObj>
              <Pressable
              onPress={() =>
                Linking.canOpenURL("whatsapp://send?text=oi").then(supported => {
                if (supported) {
                  return Linking.openURL(
                    "whatsapp://send?phone=5511973102020&text=Oi"
                  );
                } else {
                  return Linking.openURL(
                    "https://api.whatsapp.com/send?phone=5511973102020&text=Oi"
                  );
                }
              })
            }
              >
                <Image
                  source={ require('../media/icone-duvida-whatsapp.png') }
                  resizeMode="cover"
                />
              </Pressable>
            </WrapperCenterObj>
          </>
        )}
      </View>
    )
    }
    </StyledContainer>
  )
}

export default HortaSelection;
