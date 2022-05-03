import styled from 'styled-components/native';
import { lightTheme } from '../../styles/colors';

export const Container = styled.View`
  flex-direction: row;
  font-size: 15px;
  color: ${lightTheme.COLOR.PRIMARY_TEXT_COLOR};
  font-family: ${lightTheme.FONT.Roboto_400Regular};
  justify-content: space-between;
  margin-top: 12px;
`;

