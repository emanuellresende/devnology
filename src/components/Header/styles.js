import styled from 'styled-components/native';
import { lightTheme } from '../../styles/colors';
export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
height: 60px;
background-color: ${lightTheme.BACKGROUND.SECONDARY_BACKGROUND_COLOR};
`;

 export const Logo = styled.View`
width: 170px;
height: 25px;
margin-left: 27px;
 `;
export const RightSide = styled.View`
flex-direction: row;
align-items: center;
margin-right: 20px;
  
`;
export const Button = styled.View`
  margin-left: 20px;
`;