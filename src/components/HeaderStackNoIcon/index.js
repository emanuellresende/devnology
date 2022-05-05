import { ImageBackground } from 'react-native'
import React from 'react'
import {
  Container,
  Logo,
  Button,
} from './styles'
import { Ionicons } from '@expo/vector-icons'
import { lightTheme } from '../../styles/colors';
export default function HeaderStackNoIcon(props) {

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
        
        </Button>


      </Container>
    )
}