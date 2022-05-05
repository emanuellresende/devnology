
import React, {  useContext } from 'react';
import { FlatList, StyleSheet, Dimensions, PixelRatio } from 'react-native';
import { Ionicons } from '@expo/vector-icons'
import { CartContext } from '../../components/CartContext';
import { TextBottom, ContainerBottom, TextPriceCircle, TextButton, ButtonContent, ButtonCircle, CartContainerText, TextPrice, TextDescription, CartContainer, Container, TextCart, Wrapper, Image, ContainerBottomText, TextBottomPrice, TextButtom } from './styles';
import Header from '../../components/Header'
import { lightTheme } from '../../styles/colors';
import { ButtonCart } from '../AboutScreen/styles';




export default function CartScreen({ navigation }) {

  const { items, getItemsCount, getTotalPrice } = useContext(CartContext);
  const { addItemToCart } = useContext(CartContext);
  const { removeItemToCart } = useContext(CartContext);
  const { checkOut } = useContext(CartContext);
  function onCheckOut() {
    checkOut();
    navigation.navigate('CheckOut');
  }

  function renderItem({ item }) {
    function onAddToCart() {
      addItemToCart(item.product.id);
    }
    function onRemoveToCart() {
      removeItemToCart(item.product.id);
    }

   

 
    return (

      <CartContainer>
        <Image source={item.product.posterUrl} />
        <CartContainerText>
          <TextDescription>{item.product.description}</TextDescription>
          <TextPrice>$   {item.totalPrice}</TextPrice>
          <ButtonContent>
            <ButtonCircle onPress={onRemoveToCart}><TextButton>-</TextButton></ButtonCircle>
            <TextPriceCircle>{item.qty}</TextPriceCircle>
            <ButtonCircle onPress={onAddToCart}><TextButton>+</TextButton></ButtonCircle>
          </ButtonContent>
        </CartContainerText>
      </CartContainer>
    );
  }


  return (
    
    <Wrapper>
      <Header />
      <Container>
        <TextCart>Cart</TextCart>
        <FlatList
          data={items}
          renderItem={renderItem}
          keyExtractor={(item) => item.product.id.toString()}
        // ListFooterComponent={Totals}
        />
      </Container>
      <ContainerBottom>
        <ContainerBottomText>
          <TextBottom>Total</TextBottom>
          <TextBottomPrice>$  {getTotalPrice()}</TextBottomPrice>
        </ContainerBottomText>
        <ButtonCart onPress={onCheckOut}><TextButtom>CHECKOUT</TextButtom>
        <Ionicons
            name='chevron-forward-outline'
            size={20}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </ButtonCart>
      </ContainerBottom>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  cartLine: {
    flexDirection: 'row',
  },
  cartLineTotal: {
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',
  },
  lineLeft: {
    fontSize: 20,
    lineHeight: 40,
    color: '#333333'
  },
  lineRight: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    lineHeight: 40,
    color: '#333333',
    textAlign: 'right',
  },

});