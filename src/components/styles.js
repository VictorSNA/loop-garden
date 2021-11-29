import styled from 'styled-components';
import { View, Text, Image, Pressable, TextInput, TouchableOpacity } from 'react-native';
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
  redDarkHov: '#A20000',
  darkGrey: '#686D74',
  darkGreyHov: '#787D84',
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

export const StyledContainer = styled.ScrollView`
  flex: 1;
  padding: 18px;
  padding-top: ${StatusBarHeight + 10}px;
`

export const InnerContainer = styled.View`
  flex: 1;
  width: 90%;
  margin: 0 auto;
`

//export const PageLogo = styled.Image`
//  width: 250px;
//  height: 250px;
//`

export const PageTitle = styled.Text`
  font-size: 30px;
  text-align: center;
  font-weight: bold;
  padding-top: 20px;
  padding-bottom: 50px;
  color: ${dark};
`

export const SubTitle = styled.Text`
  font-size: 20px;
  font-weight: normal;
  margin-top: 50px;
  margin-bottom: 20px;
  padding-top: 10px;
  letter-spacing: 1px;
  font-weight: bold;
  text-align: center;
  border-top-width: 2px;
  border-color: ${neutral}
  color: ${dark};
`
export const WrapperCenterObj = styled.View`
  margin-bottom: 40px;
  padding-top: 100px;
  align-self: center;
`

export const StyledFormArea = styled.View`
  width: 90%;
`

export const LabelText = styled.Text`
 font-size: 20px;
 font-weight: bold;
`

export const StyleTextInput = styled.TextInput`
  padding: 15px;
  padding-left: 20px;
  padding-right: 20px;
  border-radius: 3px;
  font-size: 16px;
  height: 60px;
  margin-vertical: 3px;
  margin-bottom: 10px;
  border-width: 3px;
  border-color: ${primarySaturateDark};
  background-color: ${white};
`
//button generic
export const WrapperStandardButton = styled.View`
  flex-wrap: wrap;
  flex-direction: row-reverse;
  margin-top: 20px;
`
export const StandardButton = styled.Pressable`
  padding: 7px 20px;
  border-radius: 3px;
  background-color: ${primarySaturateDarkest};
`
export const StandardButtonText = styled.Text`
  color: ${light};
  font-size: 24px;
  text-transform: uppercase;
`

export const SecondaryButton = styled.Pressable`
  padding: 7px 20px;
  border-radius: 3px;
  background-color: ${white};
  border-color: ${primarySaturateDarkest};
  border-width: 2px;
  margin: 0 auto;
`
export const SecondaryButtonText = styled.Text`
  color: ${primarySaturateDarkest};
  font-size: 24px;
  text-transform: uppercase;
`
//button home
export const HomeContainer = styled.View`
  flex:1;
  justify-content: center;
  padding: 18px;
  padding-top: ${StatusBarHeight + 10}px;
`
export const WrapperButtonCenter = styled.View`
  flex: 1;
  align-items: center;
`
export const HomeButton = styled.Pressable`
  padding-top: 30px;
  padding-bottom: 20px;
  /*padding-horizontal: 25px;*/ /*apagar de outras telas ok*/
  width: 230px; /*ver em outras telas se ok*/
  border-radius: 10px;
  background-color: ${primarySaturateLight};
  border-top-width: 3px;
  border-left-width: 3px;
  border-right-width: 3px;
  border-bottom-width: 12px;
  border-color: ${primarySaturateDark};
  align-items: center;
`
export const HomeButtonText = styled.Text`
margin-top: 30px;
color: ${dark};
font-size: 16px;
text-transform: uppercase;
`

//inputs
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
  background-color: black;
  font-size: 320px;
  color: green;
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
