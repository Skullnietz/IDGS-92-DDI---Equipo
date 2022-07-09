import React from 'react';
import {View, Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text style={{color: 'black'}}>Settings Screen</Text>
      <Icon name="settings" size={30} color="#900" />
    </View>
  );
};
export default SettingsScreen;
