import styled from 'styled-components/native';
import { lightTheme } from '../../styles/colors';
import { Dimensions,PixelRatio } from 'react-native';
import Carousel from 'simple-carousel-react-native';
export const Wrapper = styled.SafeAreaView`

  background: ${lightTheme.BACKGROUND.PRIMARY_BACKGROUND_COLOR};
  color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
  flex: 1;
`;
const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

export const Bottom = styled.View`
width: 100%;
height: 86px;
position: absolute;
justify-content: space-around;
align-items: center;
bottom: 0;
background-color: #5A6476;
flex-direction: row;
`

export const ButtonShare= styled.TouchableOpacity`
background-color: ${lightTheme.COLOR.SECONDARY_TEXT_COLOR};
height: 40px;
width: 37%;
border-radius: 30px;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;

export const TextShare = styled.Text`
font-family: ${lightTheme.FONT.Roboto_900Black};
color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
font-size: 12px;
line-height: 14px;
font-weight: 900;
font-style: normal;
`
export const ButtonCart= styled.TouchableOpacity`
background-color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
height: 40px;
width: 37%;
border-radius: 30px;
flex-direction: row;
align-items: center;
justify-content: space-around;
`;
export const TextCart = styled.Text`
font-family: ${lightTheme.FONT.Roboto_900Black};
color: ${lightTheme.COLOR.SECONDARY_TEXT_COLOR};
font-size: 12px;
line-height: 14px;
font-weight: 900;
font-style: normal;
`
export const TextDescription = styled.Text`
font-family: ${lightTheme.FONT.Roboto_700Bold};
color: #000000;
font-size: 15px;
line-height: 18px;
font-weight: 700;
font-style: normal;
margin: 0 auto;
max-width: ${widthPercentageToDP('87%')};
margin-top: ${heightPercentageToDP('3%')};
`

export const Image = styled.Image`
max-width: ${widthPercentageToDP('54%')};
max-height: ${heightPercentageToDP('28%')};
min-width: ${widthPercentageToDP('54%')};
min-height: ${heightPercentageToDP('28%')};
`;
export const View = styled.View`
align-items: center;
justify-content: center;

`;
export const ViewCarousel = styled.View`
justify-content: center;
align-items: center;
margin-top: 7%;
`;

export const TextContentItem = styled.Text`
font-family: ${lightTheme.FONT.Roboto_700Bold};
font-size: 15px;
line-height: 18px;
color: #000000;
margin-top: ${heightPercentageToDP('3%')};

`


export const ContentText = styled.View`
width: ${widthPercentageToDP('87%')};
margin: 0 auto;

`;

export const TextValue = styled.Text`
font-family: ${lightTheme.FONT.Roboto_900Black};
font-size: 26px;
line-height: 31px;
color: #2E3746;
`
export const TextAbout = styled.Text`
font-family: ${lightTheme.FONT.Roboto_400Regular};
font-size: 14px;
line-height: 16px;
color: #000000;
margin-top: ${heightPercentageToDP('2%')};

`