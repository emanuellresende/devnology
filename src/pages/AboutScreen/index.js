import React, { useEffect, useState, useContext } from 'react';
import { Dimensions, PixelRatio } from 'react-native';
import HeaderStack from '../../components/HeaderStack'
import { TextAbout, TextValue, Bottom, View, ButtonShare, ViewCarousel, Wrapper, ButtonCart, TextCart, TextShare, TextDescription, Image, ContentText, TextContentItem } from './styles';
import { Ionicons } from '@expo/vector-icons'
import { lightTheme } from '../../styles/colors';
import Carousel from 'simple-carousel-react-native';
import { getProduct } from '../../services/ProductServices'
import { CartContext } from '../../components/CartContext'

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};


export default function AboutScreen(props) {
  const productId = props.route.params.productId;
  const [product, setProduct] = useState({});
  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  
  function onAddToCart() {
    addItemToCart(product.id);
    {props.navigation.navigate('Cart')}
  }

  return (
    <Wrapper>
      <HeaderStack navigation={props.navigation} />

      <TextDescription>
        {product.description}
      </TextDescription>


      <ViewCarousel>
        <Carousel

          width={widthPercentageToDP('54%')}
          height={heightPercentageToDP('28%')}
          showScroll={true}
          color='black'
        >
          <View>
            <Image source={product.posterUrl} resizeMode="contain" />
          </View>
          <View>
            <Image source={product.posterUrl} resizeMode="contain" />
          </View>
          <View>
            <Image source={product.posterUrl} resizeMode="contain" />
          </View>
        </Carousel>
      </ViewCarousel>

      <ContentText>
        <TextContentItem>
          Price:
        </TextContentItem>
        <TextValue>
          $ {product.price}
        </TextValue>
        <TextContentItem>
          About this item
        </TextContentItem>
        <TextAbout>
          {product.about}
        </TextAbout>
      </ContentText>

      <Bottom>
        <ButtonShare>
          <TextShare>
            SHARE THIS
          </TextShare>
          <Ionicons
            name='chevron-up-outline'
            size={20}
            color={lightTheme.COLOR.PRIMARY_TEXT_COLOR}
          />
        </ButtonShare>
        <ButtonCart onPress={onAddToCart}>
          <TextCart>
            ADD TO CART
          </TextCart>
          <Ionicons
            name='chevron-forward-outline'
            size={20}
            color={lightTheme.COLOR.SECONDARY_TEXT_COLOR}
          />
        </ButtonCart>
      </Bottom>
    </Wrapper>
  );
}

