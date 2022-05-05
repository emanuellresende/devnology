import { ImageBackground } from 'react-native'
import React, { useContext } from 'react'
import {
  Container,
  Logo,
  Button,
  ContainerIcon,
  ContainerCircle,
  ContainerText

} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { lightTheme } from '../../styles/colors';
import { CartContext } from '../CartContext';
export default function HeaderStack(props) {
  const { getItemsCount } = useContext(CartContext);
  if (getItemsCount() >= 1) {
    return (
      <Container >
        <Button onPress={() => {
          props.navigation.goBack();
        }}>
          <Ionicons
            name='chevron-back-outline'
            size={30}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </Button>
        <Logo >
          <ImageBackground
            source={require('../../images/LogoHeader.png')}
            style={{ width: 170, height: 27 }}
          />


        </Logo>
        <Button>
          <ContainerIcon>
            <Ionicons
              name='cart-outline'
              size={30}
              color={lightTheme.COLOR.Tertiary_TEXT_COLOR}
            />
            <ContainerCircle>
              <ContainerText>{getItemsCount()}</ContainerText>
            </ContainerCircle>
          </ContainerIcon>
        </Button>


      </Container>);
  }
  else {
    return (
      <Container >
        <Button onPress={() => {
          props.navigation.goBack();
        }}>
          <Ionicons
            name='chevron-back-outline'
            size={30}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </Button>
        <Logo >
          <ImageBackground
            source={require('../../images/LogoHeader.png')}
            style={{ width: 170, height: 27 }}
          />


        </Logo>
        <Button>
          <Ionicons
            name='cart-outline'
            size={24}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </Button>


      </Container>
    )
  }
}