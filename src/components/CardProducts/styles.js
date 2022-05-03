import styled from 'styled-components/native';
import { lightTheme } from '../../styles/colors';


//


//
import { Dimensions, PixelRatio } from 'react-native';

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};
//

export const Container = styled.View`
width: 100%;
flex-direction: row;
justify-content: space-between;


  
`;


export const Content = styled.View`
 width: ${widthPercentageToDP('27%')};
  height: ${heightPercentageToDP('19%')};
  background-color: ${lightTheme.BACKGROUND.QUATERNARY_TEXT_COLOR};
  flex-direction: column;
  border-radius: 10px;
  align-items: center;
  justify-content: center;
  
`;

export const ContentText = styled.View`
width: ${widthPercentageToDP('25%')};
flex-direction: row;
line-height: 10.5px;
height: 25px;

`;

export const TextDescription = styled.Text`

font-family: ${lightTheme.FONT.Roboto_300Light};
font-size: 11px;
color: #000000;
`;

export const TextPrice = styled.Text`
margin-top: 4px;
font-family: ${lightTheme.FONT.Roboto_700Bold};
font-size: 12px;
color: #000000;
line-height: 12.9px;


`;

export const Image = styled.Image`

height: 80px;
width: 80px;
`;
export const ContentPrice = styled.View`
margin-right: 60%;
`;