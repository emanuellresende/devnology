import React from 'react'

import { Container, Content, TextDescription, TextPrice, Image, ContentText, ContentPrice } from './styles'
import {
    ScrollView,
    Animated,
    SafeAreaView,
    StyleSheet,
    Dimensions,
    Text,
    Button,
    TouchableHighlight,
} from "react-native"
import { lightTheme } from '../../styles/colors';

export default function CardProducts(props) {
    return (

        <Container>

            {props.cardProducts.map((item, idx) => {
                idx += 1;
                return (

                    <TouchableHighlight onPress={() => {
                        props.navigation.navigate('About');
                    }}>
                        <Content key={idx}>
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
                    </TouchableHighlight>


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