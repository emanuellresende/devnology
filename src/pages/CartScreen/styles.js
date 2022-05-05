import styled from 'styled-components/native';
import { Dimensions, PixelRatio } from 'react-native';
import { lightTheme } from '../../styles/colors';

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
width: ${widthPercentageToDP('86%')};
margin: 0 auto;
margin-top: ${heightPercentageToDP('4%')};
`;
export const FlatList = styled.FlatList`

`;

export const TextCart = styled.Text`
font-family: ${lightTheme.FONT.Roboto_700Bold};
line-height: 35px;
font-weight: 700;
font-size: 30px;
`

export const CartContainer = styled.View`
flex-direction: row;
`
export const CartContainerText = styled.View`
flex-direction: column;
margin-left: ${widthPercentageToDP('6%')};
overflow: visible;
`

export const Image = styled.Image`
width: 100px;
height: 100px;
`;

export const TextDescription = styled.Text`
font-size: 11px;
font-family: ${lightTheme.FONT.Roboto_400Regular};
line-height: 13px;
font-weight: 400;
`;

export const TextPrice = styled.Text`
font-size: 14px;
font-family: ${lightTheme.FONT.Roboto_700Bold};
line-height: 17px;
font-weight: 700;
color: #000000;
margin-top: 10px;
`;
export const TextButton = styled.Text`
font-family: ${lightTheme.FONT.Roboto_400Regular};
font-weight: 400;
font-size: 12px;
line-height: 14px;
color: #FFFFFF;
justify-content: center;
align-items: center;
`;
export const ButtonCircle = styled.TouchableOpacity`
background-color: #2E3746;
width: 13px;
height: 13px;
border-radius: 13px;
align-items: center;

`
export const ButtonContent = styled.View`
flex-direction: row;
margin-top: ${heightPercentageToDP('1.5%')};


`

export const TextPriceCircle = styled.Text`
font-size: 14px;
font-family: ${lightTheme.FONT.Roboto_700Bold};
line-height: 17px;
font-weight: 700;
padding-right: 10px;
padding-left: 10px;
color: #000000;
`;

export const ContainerBottom = styled.View`
width: 100%;
height: ${heightPercentageToDP('12%')};
justify-content: space-around;
align-items: center;
bottom: 60px;
position: absolute;
background-color: #5A6476;
flex-direction: row;
padding-bottom: ${widthPercentageToDP('3.4%')};

`
export const TextBottom = styled.Text`
font-family: ${lightTheme.FONT.Roboto_400Regular};
font-weight: 400;
font-size: 16px;
line-height: 19px;
color: ${lightTheme.COLOR.SECONDARY_TEXT_COLOR};

`
export const TextBottomPrice = styled.Text`
font-family: ${lightTheme.FONT.Roboto_700Bold};
font-weight: 700;
font-size: 24;
line-height: 28px;
color: ${lightTheme.COLOR.SECONDARY_TEXT_COLOR};
`

export const ContainerBottomText = styled.View`
flex-direction: column;

`
export const TextButtom= styled.Text`
font-family: ${lightTheme.FONT.Roboto_900Black};
font-weight: 900;
font-size: 12px;
line-height: 14px;
color: ${lightTheme.COLOR.SECONDARY_TEXT_COLOR};
`