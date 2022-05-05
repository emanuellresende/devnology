import React, { useEffect, useState } from 'react';

import { Wrapper, Main, ProductsContainer, Category } from './styles';
import TextTopics from '../../components/TextTopics'
import CategoryItems from '../../components/CategoryItem';
import CarouselCard from '../../components/CarouselCard';
import CardProducts from '../../components/CardProducts';
import Header from '../../components/Header';

import  {getProducts}  from '../../services/ProductServices';





const cards = [
  { posterUrl: require("../../images/card1.png") },
  { posterUrl: require("../../images/card2.png") },

]


export default function HomeScreen({ navigation }) {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(getProducts());

  });

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
        <CardProducts cardProducts={products} navigation={navigation} />
      </ProductsContainer>

    </Wrapper>
  );
}