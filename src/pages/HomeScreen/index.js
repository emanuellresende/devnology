import React from 'react';

import Header from '../../components/Header';
import { Wrapper, Main, ProductsContainer, Category } from './styles';




import { StyleSheet, TouchableOpacity, Text, View, Button, Alert } from 'react-native';

import TextTopics from '../../components/TextTopics'
import CategoryItems from '../../components/CategoryItem';
import CarouselCard from '../../components/CarouselCard';
import CardProducts from '../../components/CardProducts';





const cards = [
  { posterUrl: require("../../images/card1.png") },
  { posterUrl: require("../../images/card2.png") },

]


const cardProducts = [
  {
    name: "Lenovo - IdeaPad L340 15 Gaming",
    posterUrl: require("../../images/product1.png"),
    price: 717.80,
    about: "1.8 GHz Intel Core i7-10510U Quad-Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520 Windows 10 Pro 64 - Bit Edition 1.8 GHz Intel Core i7 - 10510U Quad - Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520",
    description: "Lenovo 15.6 ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)",
  },

  {
    name: "Lenovo 15.6 ThinkPad P15s Gen1",
    posterUrl: require("../../images/product2.png"),
    price: 1.519,
    about: "1.8 GHz Intel Core i7-10510U Quad-Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520 Windows 10 Pro 64 - Bit Edition 1.8 GHz Intel Core i7 - 10510U Quad - Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520",
    description: "Lenovo 15.6 ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)",
  },

  {
    name: "Notebook Lenovo 2 em 1",
    posterUrl: require("../../images/product3.png"),
    price: 4.699,
    about: "1.8 GHz Intel Core i7-10510U Quad-Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520 Windows 10 Pro 64 - Bit Edition 1.8 GHz Intel Core i7 - 10510U Quad - Core Processor 16GB of DDR4 RAM | 512GB SSD 15.6 1920 x 1080 IPS Display NVIDIA Quadro P520",
    description: "Lenovo 15.6 ThinkPad P15s Gen 1 Laptop, Intel Core i7-10510U Quad-Core, 16GB DDR4 RAM, 512GB SSD, NVIDIA Quadro P520, Windows 10 Pro (20T4001VUS)",

  },
]
export default function HomeScreen({ navigation }) {

  return (
    <Wrapper>
      <Header />
      <Category>
        <TextTopics name="Categories" />

        <CategoryItems />

        <TextTopics name="Latest" />

      </Category>
      <Main>

        <CarouselCard item={cards} />
      </Main>

   
        <ProductsContainer>
          <CardProducts cardProducts={cardProducts} navigation={navigation}/>
        </ProductsContainer>

    </Wrapper>
  );
}