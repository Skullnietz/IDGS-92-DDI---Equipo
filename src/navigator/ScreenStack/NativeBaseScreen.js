import React from 'react';
import {StyleSheet, View} from 'react-native';
// 1. import `NativeBaseProvider` component
import {
  NativeBaseProvider,
  Text,
  Box,
  Button,
  Image,
  Center,
} from 'native-base';

export default function App() {
  // 2. Use at the root of your app
  return (
    <NativeBaseProvider>
      <Box flex={1} bg="#343A40" alignItems="center">
        <Box flex={1} bg="whitesmoke" alignItems="center">
          <Center>
            <Image
              source={{
                uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
              }}
              alt="image"
              size="xl"
            />
          </Center>
          <Text>Open up App.js to start working on your app!</Text>
          <View style={styles.lineStyle} />
          <Button style={styles.button} alignContent="center">
            <Text style={styles.buttonText}>Enviar condolencia</Text>
          </Button>
        </Box>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#FAFF00',
    color: '#000',
    width: '80%',
    borderRadious: '10px',
    fontSize: 30,
  },
  buttonText: {
    color: '#000',
    fontWeight: 'bold',
  },
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    margin: 10,
    width: 150,
  },
});
