import React from 'react';

import {StyleSheet} from 'react-native';
import {
  Box,
  AspectRatio,
  Image,
  Flex,
  Stack,
  Text,
  NativeBaseProvider,
  ScrollView,
  Center,
  Button,
  TextArea,
} from 'native-base';

export default class AddCondolenciaScreen extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <TextArea w={'80%'} m={10}></TextArea>
          <Button
            m={-7}
            w={'50%'}
            style={{backgroundColor: '#FAFF00'}}
            onPress={() => console.log('Enviando')}>
            <Text m={(1, -1)}>Enviar condolencia</Text>
          </Button>
        </Center>
      </NativeBaseProvider>
    );
  }
}
