import React, { Component } from 'react';
import {
  Text,
  View,
} from 'react-native';
import { createBottomTabNavigator, createSwitchNavigator} from 'react-navigation'

import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';
import TabMenu from './TabMenu'
import TabHistory from './TabHistory'
import TabInfo from './TabInfo'
import TabOrder from './TabOrder';

const BottomNavigation = createBottomTabNavigator({
  Menu: TabMenu,
  Order: TabOrder,
  History: TabHistory,
  Info: TabInfo
})

const SwitchNavigation = createSwitchNavigator({
  HomeScreen: BottomNavigation,
  SplashScreen: SplashScreen,
  LoginScreen: LoginScreen,
})

class App extends Component {
  state = {  }
  render() {
    return (
      <SwitchNavigation/>
    );
  }
}

export default App;