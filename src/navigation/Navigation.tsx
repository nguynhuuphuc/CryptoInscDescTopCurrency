import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {COLORS, ICONS, NAME_NAVIGATION} from '../utils/Const';
import Home from '../screens/home/Home';
import Porfolio from '../screens/portfolio/Portfolio';
import Trade from '../screens/trade/Trade';
import Market from '../screens/market/Market';
import Profile from '../screens/profile/Profile';
import Portfolio from '../screens/portfolio/Portfolio';
import TabIcon from '../components/TabIcon';

const Stack = createStackNavigator();
const BottomTab = createBottomTabNavigator();

function HomeTab() {
  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          height: 64,
          backgroundColor: COLORS.bgGrayBlack,
        },
      }}>
      <BottomTab.Screen
        name={NAME_NAVIGATION.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon icon={ICONS.home} label="Home" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={NAME_NAVIGATION.PORTFOLIO}
        component={Portfolio}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon
              icon={ICONS.portfolio}
              label="Portfolio"
              focused={focused}
            />
          ),
        }}
      />
      <BottomTab.Screen
        name={NAME_NAVIGATION.TRADE}
        component={Trade}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon icon={ICONS.trade} label="Trade" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={NAME_NAVIGATION.MARKET}
        component={Market}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon icon={ICONS.market} label="Market" focused={focused} />
          ),
        }}
      />
      <BottomTab.Screen
        name={NAME_NAVIGATION.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon icon={ICONS.profile} label="Profile" focused={focused} />
          ),
        }}
      />
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
      <Stack.Screen name={NAME_NAVIGATION.PORTFOLIO} component={Portfolio} />
      <Stack.Screen name={NAME_NAVIGATION.TRADE} component={Trade} />
      <Stack.Screen name={NAME_NAVIGATION.MARKET} component={Market} />
      <Stack.Screen name={NAME_NAVIGATION.PROFILE} component={Profile} />
    </Stack.Navigator>
  );
}
