import styled from 'styled-components/native';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Constants from 'expo-constants';

const StatusBarHeight = Constants.statusBarHeight;

// colors

export const Colors = {
  primarySaturateDarkest: '#26734F',
  primarySaturateDark:  '#38A673',
  primarySaturateLight: '#73D99F',
  primaryPastel: '#A9D9BA',
  complementary: '#F27D72',
  neutral: '#D8E3F2',
  light: '#EFEFEE',
  dark: '#333333',
  zapzap: '#26D66E',
  brancoZapzap: '#FEFEFE',
  gray: '#838993',
  white: '#FFFFFF',
  redDark: '#A23E34',
  darkGrey: '#686D74',
  help: '#097395'
}

const {
  primarySaturateDarkest,
  primarySaturateDark,
  primarySaturateLight,
  primaryPastel,
  complementary,
  neutral,
  light,
  dark,
  zapzap,
  brancoZapzap,
  gray,
  white,
  redDark,
  darkGrey,
  help
 } = Colors;

export const StyledContainer = styled.View`
  flex: 1;
  padding: 18px;
  padding-top: ${StatusBarHeight + 10}px;
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 100%;
`

//export const PageLogo = styled.Image`
//  width: 250px;
//  height: 250px;
//`

export const PageTitle = styled.Text`
  font-size: 32px;
  text-align: center;
  font-weight: bold;
  padding: 10px;
`

export const SubTitle = styled.Text`
  font-size: 18px;
  margin-bottom: 20px;
  letter-spacing: 1px;
  font-weight: bold;
`

export const StyledFormArea = styled.View`
  width: 90%;
`

export const StyleTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 55px;
  padding-right: 55px;
  border-radius: 5px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
`


export const StyledInputLabel = styled.Text`
  font-size: 13px;
  text-aligh: left;
`

export const LeftIcon = styled.TouchableOpacity`
  left: 15px;
`

export const RightIcon = styled.TouchableOpacity`
  right: 15px;
  position: absolute;
`

export const StyledButton = styled.Button`
  padding: 15px;
  justify-content: center;
  border-radius: 5px;
  margin-vertical: 5px;
  height: 60px;
`

export const ButtonText = styled.Text`
  font-size: 16px;
`
export const FullHeight = styled.View`
  height: 100%;
  flex: 1;
  align-items: center;
  padding: 0 30px;
  background-color: ${Colors.white};
`

export const HortaCard = styled.View`
  flex-direction: row;
  justify-content: center;
  padding: 5px;
  border-bottom-width: 1px;
  border-color: ${primaryPastel};
  border-style: dashed;
`
