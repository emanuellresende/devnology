import React from 'react'

import { BoxCircle, Circle, Text } from './styles'
import { LinearGradient } from 'expo-linear-gradient';
import { Alert, ImageBackground,StyleSheet } from 'react-native'
export default function CircleGradient(props) {
  
    return (
        <Circle>


            <BoxCircle>
                <LinearGradient start={[0, 1]}
                    end={[1, 0]}
                    colors={[props.color1, props.color2]}
                    style={{
                        borderRadius: 30,
                        width: 65,
                        height: 65,
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>

                    <ImageBackground
                        source={props.img}
                        style={styles(props).size}
                    />

                </LinearGradient>
                <Text>{props.text}</Text>
            </BoxCircle>
        </Circle>
    )
}

const styles = (props)=> StyleSheet.create({
  size:{
      width: props.width,
      height: props.height,
  }
})