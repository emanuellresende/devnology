import React from 'react'
import 'react-native-gesture-handler';
import Routes from './src/components/navigation/routes'
import AppLoading from 'expo-app-loading';
import GeneralStatusBarColor from './src/styles/generalStatusBarColor';
import MyStack from './src/components/navigation/stack'
import { CartProvider } from './src/components/CartContext';
import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import { lightTheme } from './src/styles/colors';
export default function App() {
  let [fontsLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_100Thin_Italic,
    Roboto_300Light,
    Roboto_300Light_Italic,
    Roboto_400Regular,
    Roboto_400Regular_Italic,
    Roboto_500Medium,
    Roboto_500Medium_Italic,
    Roboto_700Bold,
    Roboto_700Bold_Italic,
    Roboto_900Black,
    Roboto_900Black_Italic,
  });
  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <>

        <GeneralStatusBarColor backgroundColor={lightTheme.BACKGROUND.SECONDARY_BACKGROUND_COLOR} barStyle="light-content" />
        <MyStack />
    </>
  );
}
