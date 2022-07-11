import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

<<<<<<< HEAD
import HomeScreen from '../ScreenStack/HomeScreen';
=======

// * Componentes
import HomeScreen from '../ScreenStack/HomeScreen.js';
>>>>>>> a2fc299bb3fe8c51d63a42ee96ffea85481a7552
import DifuntosStack from './DifuntosStack.js';
import CatalogoStack from './CatalogoStack.js';
import ServiciosStack from './ServiciosStack.js';

// * Iconos
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
          if (route.name === 'Catalogo') {
            iconName = focused ? 'book' : 'book';
            return <Icon name={iconName} color={color} size={size} />;
          }
          if (route.name === 'Condolencias') {
            iconName = focused ? 'church' : 'church';
            return <OtherIcon name={iconName} color={color} size={size} />;
          }
          if (route.name === 'Servicios') {
            iconName = focused ? 'contacts' : 'contacts';
            return <OtherIcon name={iconName} color={color} size={size} />;
          }
        },
        tabBarActiveTintColor: '#900',
        tabBarInactiveTintColor: '#000',
      })}>
      <Tab.Screen name="Home" component={HomeScreen} />
<<<<<<< HEAD
      <Tab.Screen name="Condolencias" component={DifuntosStack} />
=======
      <Tab.Screen name="Catalogo" component={CatalogoStack}/>
      <Tab.Screen name="Servicios" component={ServiciosStack}/>
      <Tab.Screen
        name="Condolencias"
        component={DifuntosStack}
        /*options={({route}) => ({
          tabBarVisible: this.getTabBarVisibility(route),
        })}*/
      />
>>>>>>> a2fc299bb3fe8c51d63a42ee96ffea85481a7552
    </Tab.Navigator>
  );
};

export default HomeStack;
