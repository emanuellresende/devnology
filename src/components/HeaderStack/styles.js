import styled from 'styled-components/native';
import { lightTheme } from '../../styles/colors';
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
height: 60px;
background-color: ${lightTheme.BACKGROUND.SECONDARY_BACKGROUND_COLOR};
`;

 export const Logo = styled.View`
width: 170px;
height: 25px;
 `;

export const Button = styled.TouchableOpacity`
`;


export const ContainerIcon = styled.View`
flex-direction: row;
`;
export const ContainerCircle = styled.View`
height: 13px;
width: 13px;
border-radius: 7.5px;
background-color: ${lightTheme.COLOR.Tertiary_TEXT_COLOR};
position: absolute;
bottom: 0;
right: 0;




`

export const ContainerText = styled.Text`
align-items: center;
text-align: center;
color: #FFFFFF;
font-family:  ${lightTheme.FONT.Roboto_700Bold};
font-size: 9px;
line-height: 10px;
font-weight: 700;

`;


