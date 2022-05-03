import { Text, ImageBackground } from 'react-native'
import React from 'react'
import {
  Container,
  RightSide,
  Logo,
  Button,

} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { lightTheme } from '../../styles/colors';
import { getStatusBarHeight } from 'react-native-iphone-x-helper'


export default function Header() {
  return (
    <Container >
      <Logo >
        <ImageBackground
        source={require('../../images/LogoHeader.png')} 
        style={{width: 170, height: 27}}  
        />
          

      </Logo>
      <RightSide>
        <Button>
          <Ionicons
            name='search-outline'
            size={24}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </Button>

        <Button>
          <Ionicons
            name='notifications-outline'
            size={24}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </Button>
      </RightSide>
    </Container>
  )
}