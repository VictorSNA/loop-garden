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
  Colors,
  LabelText,
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
          console.log("Escaneando: " + url);
          if(response.data.data.alive) {
            let horta_name = response.data.data.arduino_id;
            console.log("achei")
            console.log(!linkedGarden(horta_name))
            if(!linkedGarden(horta_name)) {
              setData(previous =>[...previous, {horta: horta_name, url: url}]);
            }
          }
        })
        .catch((error) => {
          console.log("Nada encontrado em: " + url);
        })
      if(i == max_ip -1){ setLoadingHortas(false); }
    }
  };

  const renderItem = (item) => {
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

          <LabelText>vínculadas</LabelText>
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

          <LabelText>desvínculadas</LabelText>
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
              style={{fontWeight: "normal", textAlign: 'left', paddingHorizontal: '10%', marginBottom: 0, paddingTop: 40}}
            >Precisa de um técnico?{"\n"}
Você tem alguma dúvida?</SubTitle>
            <WrapperCenterObj
            style={{paddingTop: 50}}
            >
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
                style={({ pressed }) => ({
                  opacity: pressed
                    ? .7
                    : 1
                })}

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
