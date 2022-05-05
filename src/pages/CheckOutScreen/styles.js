import styled from 'styled-components/native';
import { lightTheme } from '../../styles/colors';
import { Dimensions,PixelRatio } from 'react-native';
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};
export const Wrapper = styled.SafeAreaView`

  background: ${lightTheme.BACKGROUND.QUATERNARY_TEXT_COLOR};
  color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
  flex: 1;
`;

export const Container = styled.View`
margin-top:  ${heightPercentageToDP('25%')};
justify-content: center;
align-items: center;
width: ${widthPercentageToDP('75%')};
margin: auto auto;

`
export const Circle = styled.View`
background-color: ${lightTheme.BACKGROUND.SECONDARY_BACKGROUND_COLOR};
width: 101px;
height: 101px;
border-radius: 50.5px;
justify-content: center;
align-items: center;
`

export const TextOrderPlaced = styled.Text`
font-family: ${lightTheme.FONT.Roboto_700Bold};
font-size: 30px;
line-height: 35px;
font-weight: 700;
color: #2E3746;
margin-top: ${heightPercentageToDP('4%')};

`

export const Text = styled.Text`
font-family: ${lightTheme.FONT.Roboto_400Regular};
font-size: 14px;
line-height: 16.41px;
font-weight: 400;
color: #2E3746;
margin-top: ${heightPercentageToDP('4%')};
align-items: center;

`
export const ButtonCart= styled.TouchableOpacity`
background-color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
height: 40px;
width: 37%;
border-radius: 30px;
flex-direction: row;
align-items: center;
justify-content: space-around;
margin-top: ${heightPercentageToDP('11%')};
`;
export const TextCart = styled.Text`
font-family: ${lightTheme.FONT.Roboto_900Black};
color: ${lightTheme.COLOR.SECONDARY_TEXT_COLOR};
font-size: 12px;
line-height: 14px;
font-weight: 900;
font-style: normal;
`