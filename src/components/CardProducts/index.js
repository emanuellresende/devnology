import React from 'react'

import { Container, Content, TextDescription, TextPrice, Image, ContentText, ContentPrice } from './styles'
import {
    StyleSheet,
 
    TouchableOpacity,
} from "react-native"
import { lightTheme } from '../../styles/colors';

export default function CardProducts(props) {
    return (

        <Container>

            {props.cardProducts.map((item, idx) => {

                return (

                    <TouchableOpacity key={item.id} onPress={() => {
                        props.navigation.navigate('About', {
                            productId: item.id,
                        });
                    }}>
                        <Content>
                            <Image

                                source={item.posterUrl}
                                resizeMode="contain"

                            />

                            <ContentText>
                                <TextDescription>
                                    {item.name}
                                </TextDescription>
                            </ContentText>

                            <ContentPrice>
                                <TextPrice>
                                    ${
                                        item.price
                                    }
                                </TextPrice>
                            </ContentPrice>
                        </Content>
                    </TouchableOpacity>


                );
            })}


        </Container>
    )
}

const styles = StyleSheet.create({
    container: {
        width: 131,
        height: 135,
        backgroundColor: lightTheme.BACKGROUND.QUATERNARY_TEXT_COLOR,
        flexDirection: 'column',
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',

    },
})