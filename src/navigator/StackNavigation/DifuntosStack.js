import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DifuntosList from '../ScreenStack/condolencias/DifuntosList';
import CondolenciaScreen from '../ScreenStack/condolencias/CondolenciasScreen';
import AddCondolenciaScreen from '../ScreenStack/condolencias/AddCondolenciaScreen';
import CementerioScreen from '../ScreenStack/condolencias/CementerioScreen';

const Stack = createNativeStackNavigator();

export default function DifuntosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cementerio virtual" component={CementerioScreen} />
      <Stack.Screen name="DifuntosList" component={DifuntosList} />
      <Stack.Screen name="CondolenciaScreen" component={CondolenciaScreen} />
      <Stack.Screen
        name="AddCondolenciaScreen"
        component={AddCondolenciaScreen}
      />
    </Stack.Navigator>
  );
}
