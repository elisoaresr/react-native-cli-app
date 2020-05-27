import React, { Component, useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import './src/config/StatusBarConfig';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
  render() {
    return(
      <View style={styles.container}>
        <Text>Olx Brasil!</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F5F5F5'
  }
});