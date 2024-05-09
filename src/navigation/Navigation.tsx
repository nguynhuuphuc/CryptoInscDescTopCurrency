import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NAME_NAVIGATION} from '../utils/Const';
import Home from '../screens/home/Home';
import Porfolio from '../screens/porfolio/Porfolio';
import Trade from '../screens/trade/Trade';
import Market from '../screens/market/Market';
import Profile from '../screens/profile/Profile';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeTab() {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name={NAME_NAVIGATION.HOME} component={Home} />
      <BottomTab.Screen name={NAME_NAVIGATION.PORFOLIO} component={Porfolio} />
      <BottomTab.Screen name={NAME_NAVIGATION.TRADE} component={Trade} />
      <BottomTab.Screen name={NAME_NAVIGATION.MARKET} component={Market} />
      <BottomTab.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} />
    </BottomTab.Navigator>
  );
}

export default function Navigation() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name={NAME_NAVIGATION.MAINBOTTOMAPPBAR}
        component={HomeTab}
      />
      <Stack.Screen name={NAME_NAVIGATION.HOME} component={Home} />
      <Stack.Screen name={NAME_NAVIGATION.PORFOLIO} component={Porfolio} />
      <Stack.Screen name={NAME_NAVIGATION.TRADE} component={Trade} />
      <Stack.Screen name={NAME_NAVIGATION.MARKET} component={Market} />
      <Stack.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}
