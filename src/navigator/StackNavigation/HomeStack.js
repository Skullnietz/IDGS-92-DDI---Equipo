import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import HomeScreen from '../ScreenStack/HomeScreen.js';
import DifuntosStack from './DifuntosStack.js';
import Icon from 'react-native-vector-icons/Ionicons';
import OtherIcon from 'react-native-vector-icons/MaterialCommunityIcons';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Tab.Navigator
      initialRouteName="home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home';
            return <Icon name={iconName} color={color} size={size} />;
          }
          if (route.name === 'Condolencias') {
            iconName = focused ? 'church' : 'church';
            return <OtherIcon name={iconName} color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#900',
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen
        name="Condolencias"
        component={DifuntosStack}
        /*options={({route}) => ({
          tabBarVisible: this.getTabBarVisibility(route),
        })}*/
      />
    </Tab.Navigator>
  );
};

export default HomeStack;
