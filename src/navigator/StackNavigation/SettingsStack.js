import * as React from "react";

import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

import SettingsScreen from '../ScreenStack/SettingsScreen.js';

export default SettingsStack = ()=>{
    return (
        <Stack.Navigator>
          <Stack.Screen name="Home" component={SettingsScreen} />
        </Stack.Navigator>
    );
}