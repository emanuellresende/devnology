import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import AboutScreen from '../../pages/AboutScreen'
import { NavigationContainer } from '@react-navigation/native';
const Stack = createStackNavigator();
import Tabs from './routes';
import { CartProvider } from '../CartContext';
import CheckOutScreen from '../../pages/CheckOutScreen'

export default function MyStack() {
    return (
        <CartProvider>
            <NavigationContainer independent="true">
                <Stack.Navigator screenOptions={{ headerShown: false }}>
                    <Stack.Screen name="Start" component={Tabs} />
                    <Stack.Screen name="About" component={AboutScreen} />
                    <Stack.Screen name="CartScreen" component={Tabs} />
                    <Stack.Screen name="CheckOut" component={CheckOutScreen} />
                </Stack.Navigator>
            </NavigationContainer>
        </CartProvider>

    );
};