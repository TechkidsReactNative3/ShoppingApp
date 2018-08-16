import React, { Component } from 'react';
import {
  Text, Image, Dimensions,
  View, StyleSheet
} from 'react-native';

import {
  backgroundColor
} from '../styles'

class SplashScreen extends Component {
  state = {  }
  render() {
    return (
      <View style={styles.container}>
        <Image
          source={require('../../assets/imgs/logo_app.jpg')}
          style={{ width: '100%', height: Dimensions.get('window').width - 60 }}
          resizeMode='contain' />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: backgroundColor,
    flex: 1,
    justifyContent: 'center',
    padding: 30
  },
})

export default SplashScreen;