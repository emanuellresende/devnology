
import React, { Component } from "react"
import {
  ScrollView,
  Animated,
  SafeAreaView,
  ImageBackground,
  Dimensions,
  PixelRatio,
  View,
  Image
} from "react-native"
import { Container } from './styles'
import { StyleSheet } from 'react-native';
const OFFSET = 30
const ITEM_WIDTH = 325
const ITEM_HEIGHT = 180.44


//

const widthPercentageToDP = widthPercent => {
  const screenWidth = Dimensions.get('window').width;
  return PixelRatio.roundToNearestPixel(screenWidth * parseFloat(widthPercent) / 100);
};

const heightPercentageToDP = heightPercent => {
  const screenHeight = Dimensions.get('window').height;
  return PixelRatio.roundToNearestPixel(screenHeight * parseFloat(heightPercent) / 100);
};

//
export default function CarouselCard(props) {
  const scrollX = React.useRef(new Animated.Value(0)).current
  return (

    <ScrollView
      horizontal
      style={styles.container}
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingRight: 40 }}
    >
      {props.item.map((item, idx) => {


        return (

          <Image style={styles.img}
            key={idx}
            source={item.posterUrl}>

          </Image>
        )

      })}
    </ScrollView>


  )
}



const styles = StyleSheet.create({
  container: {
    minHeight: 325,
    maxHeight: 180,
    paddingLeft: 25,
  },
  img: {
    width: widthPercentageToDP('86.6%'),
    height: heightPercentageToDP('25%'),
    marginRight: 10,
    borderRadius: 8,
  }
});