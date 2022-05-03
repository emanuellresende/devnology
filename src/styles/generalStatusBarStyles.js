import { StyleSheet, Platform, StatusBar } from 'react-native';
import { ifIphoneX, isIphoneX } from 'react-native-iphone-x-helper'
const STATUSBAR_HEIGHT = Platform.OS === 'ios' ? ifIphoneX ? 50 : 20 : StatusBar.currentHeight;

export default StyleSheet.create({
statusBar: {
height: STATUSBAR_HEIGHT
}
});