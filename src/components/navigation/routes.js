import React, {useContext} from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MoreScreen from '../../pages/MoreScreen';
import ProfileScreen from '../../pages/ProfileScreen';
import CartScreen from '../../pages/CartScreen';
import SearchScreen from '../../pages/SettingsScreen'
import { Ionicons } from '@expo/vector-icons'
import { lightTheme } from '../../styles/colors';
import { getBottomSpace } from 'react-native-iphone-x-helper'
const { Navigator, Screen } = createBottomTabNavigator();
import { CartContext } from '../CartContext';
import HomeScreen from '../../pages/HomeScreen';
import { Container, ContainerCircle, ContainerText } from './styles';

export default function Tabs() {
    const { getItemsCount } = useContext(CartContext);

    return (
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
            <Screen name="Home" component={HomeScreen} options={{
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
                        if(getItemsCount()>=1){
                        return (
<Container>
                            <Ionicons
                                name='cart-outline'
                                size={size}
                                color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                      />
                      <ContainerCircle>
                      <ContainerText>{getItemsCount()}</ContainerText>
                      </ContainerCircle>
                      </Container>
                        );
                        }

                        else{
                            return (
                                <Ionicons
                                    name='cart-outline'
                                    size={size}
                                    color={focused ? lightTheme.COLOR.Tertiary_TEXT_COLOR : lightTheme.COLOR.SECONDARY_TEXT_COLOR}
                                />
                            );
                            }


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
