import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoreScreen from '../../pages/MoreScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import CartScreen from '../../pages/CartScreen';
import SearchScreen from '../../pages/SettingsScreen'
import { Ionicons } from '@expo/vector-icons'
import { lightTheme } from '../../styles/colors';
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { createStackNavigator } from '@react-navigation/stack';
const { Navigator, Screen } = createBottomTabNavigator();
import MyStack from './stack';


export default function Tabs() {


    return (
             <NavigationContainer>
        <Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                headerStatusBarHeight: 0,
                tabBarStyle: {
                    backgroundColor: lightTheme.BACKGROUND.SECONDARY_BACKGROUND_COLOR,
                    borderTopWidth: 0,
                    height: 60 + getBottomSpace(),
                    position: 'absolute',
                },
                tabBarItemStyle: {
                    alignItems: 'center',
                    justifyContent: 'center',


                },
                tabBarLabelStyle: {
                    fontFamily: lightTheme.FONT.Roboto_400Regular,
                    fontSize: 11,
                    color: lightTheme.COLOR.SECONDARY_TEXT_COLOR,
                    lineHeight: 12.9,

                }

            })}



        >
            <Screen name="Homer" component={MyStack} options={{
                tabBarIcon: ({ size, focused }) => {
                    return (
                        <Ionicons
                            name='home-outline'
                            size={size}
                            color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                        />
                    );
                }
            }} />

            <Screen name="Search" component={SearchScreen}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <Ionicons
                                name='search-outline'
                                size={size}
                                color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                            />
                        );
                    }
                }}
            />

            <Screen name="Cart" component={CartScreen}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <Ionicons
                                name='cart-outline'
                                size={size}
                                color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                            />
                        );
                    }
                }}
            />

            <Screen name="Profile" component={ProfileScreen}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <Ionicons
                                name='person-outline'
                                size={size}
                                color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                            />
                        );
                    }
                }}
            />

            <Screen name="More" component={MoreScreen}
                options={{
                    tabBarIcon: ({ size, focused }) => {
                        return (
                            <Ionicons
                                name='menu-outline'
                                size={size}
                                color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                            />
                        );
                    }
                }}

            />

        </Navigator>
        </NavigationContainer>
    );
}

// export default function Routes() {
//     return (
//         <GestureHandlerRootView>
//             <NavigationContainer>
             
//             </NavigationContainer>
//         </GestureHandlerRootView>
//     );
// }
