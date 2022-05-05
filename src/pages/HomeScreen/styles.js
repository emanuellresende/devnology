import styled from 'styled-components/native';
import Constants from 'expo-constants';
import { Platform } from 'react-native';





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
import  { lightTheme } from '../../styles/colors';


export const Wrapper = styled.SafeAreaView`
  background: ${lightTheme.BACKGROUND.PRIMARY_BACKGROUND_COLOR};
  color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
  
  
`;


export const Main = styled.View`
display: flex;
flex-direction: column;
width: 100%;
margin: 0 auto;
/* tirei text align left */

`
export const Category = styled.View`
display: flex;
margin: auto;
flex-direction: column;
width: ${widthPercentageToDP('86%')};
/* tirei text align left */
margin-top: 30px;
`

export const ProductsContainer = styled.View`
display: flex;
flex-direction: row;
justify-content: space-between;
margin: auto;
text-align: left;
width:${widthPercentageToDP('86%')};

`;