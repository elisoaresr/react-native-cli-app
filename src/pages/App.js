import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

import '../config/StatusBarConfig';
import SplashScreen from 'react-native-splash-screen';

export default class App extends Component {
    constructor(props) {
      super(props);
      this.state = {
      };
    }

    componentDidMount() {
      // do stuff while splash screen is shown
        // After having done stuff (such as async tasks) hide the splash screen
        SplashScreen.hide();
      }
  
    render() {
      return(
        <View style={styles.container}>
         <Text>OLX Brasil</Text>
         <Text>(Clone)</Text>
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