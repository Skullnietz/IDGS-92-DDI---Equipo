import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// * Componentes
import ServiciosScreen from '../ScreenStack/servicios/ServiciosScreen';

export default function ServiciosStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Servicios" component={ServiciosScreen}/>
        </Stack.Navigator>
    );
}