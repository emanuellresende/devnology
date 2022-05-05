import {  Image } from 'react-native'
import React from 'react'
import {TextCart, ButtonCart,Circle, Container, Text, TextOrderPlaced, Wrapper } from './styles'
import HeaderStackNoIcon from '../../components/HeaderStackNoIcon'
import image from '../../images/vImage.png'
import { lightTheme } from '../../styles/colors'
import { Ionicons } from '@expo/vector-icons'
export default function CheckOutScreen({navigation}) {
  return (
   <Wrapper>
    <HeaderStackNoIcon navigation={navigation}/>
    <Container>
      <Circle>
        <Image source={image}/>
      </Circle>
      <TextOrderPlaced>Order Placed !</TextOrderPlaced>
<Text>Your order placed successfully. For more details,
  check All My Ordes page under Profile Tab  
</Text>
<ButtonCart>
          <TextCart>
            My Orders
          </TextCart>
          <Ionicons
            name='chevron-forward-outline'
            size={20}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </ButtonCart>
    </Container>
   </Wrapper>
  )
}