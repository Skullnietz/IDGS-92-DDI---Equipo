import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';

import DifuntosList from '../ScreenStack/condolencias/DifuntosList';
import CondolenciaScreen from '../ScreenStack/condolencias/CondolenciasScreen';
import AddCondolenciaScreen from '../ScreenStack/condolencias/AddCondolenciaScreen';
import CementerioScreen from '../ScreenStack/condolencias/CementerioScreen';
import QRScanner from '../ScreenStack/Extras/QRScanner';

const Stack = createNativeStackNavigator();

export default function DifuntosStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Cementerio virtual" component={CementerioScreen} />
      <Stack.Screen name="DifuntosList">
        {props => <DifuntosList {...props} />}
      </Stack.Screen>
      <Stack.Screen name="CondolenciaScreen" component={CondolenciaScreen} />
      <Stack.Screen
        name="AddCondolenciaScreen"
        component={AddCondolenciaScreen}
      />
      <Stack.Screen name="Escanear QR" component={QRScanner} />
    </Stack.Navigator>
  );
}
