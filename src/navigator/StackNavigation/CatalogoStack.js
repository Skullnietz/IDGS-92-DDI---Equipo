import * as React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
const Stack = createNativeStackNavigator();

// * Componentes
import CatalogoScreen from '../ScreenStack/catalogo/CatalogoScreen';

export default function CatalogoStack(){
    return (
        <Stack.Navigator>
            <Stack.Screen name="Catalogo" component={CatalogoScreen}/>
        </Stack.Navigator>
    );
}