/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeStack from './src/navigator/StackNavigation/HomeStack.js';

import HomeScreen from './src/navigator/ScreenStack/HomeScreen.js';
import SettingsScreen from './src/navigator/ScreenStack/SettingsScreen.js';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const Stack = createNativeStackNavigator();
const App = () => {
  const backgroundStyle = {
    backgroundColor: '#fff',
  };

  return (
    <NavigationContainer>
      <HomeStack />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;

function FunctionComponent() {
  return (
    <View>
      <Text
        style={{
          color: 'black',
        }}>
        Home component
      </Text>
    </View>
  );
}
