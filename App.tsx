import {View, Text} from 'react-native';
import React from 'react';
import {Provider} from 'react-redux';
import {store} from './src/redux/Store';
import Navigation from './src/navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Navigation />
      </NavigationContainer>
    </Provider>
  );
}
