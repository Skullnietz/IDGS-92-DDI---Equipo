'use strict';

import React, {Component, useState} from 'react';

import {StyleSheet, Linking} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  NativeBaseProvider,
  Center,
  AspectRatio,
  Image,
  Box,
  Button,
  Text,
} from 'native-base';

import QRCodeScanner from 'react-native-qrcode-scanner';
import {RNCamera} from 'react-native-camera';

export default class ScanScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  onSuccess = async e => {
    const response = await fetch(
      'https://www.mausoleosantaclara.com.mx/api/nichosfiltro/A_1',
    ).then(response => response.json());
    this.setState({data: await response});
    console.log(this.state.data);
  };

  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <AspectRatio
            ratio={{
              base: 4 / 1,
              md: 1 / 10,
            }}
            height={{
              base: 65,
              md: 50,
            }}
            mb={2}>
            <Image
              source={{
                uri: 'https://www.mausoleosantaclara.com.mx/Images/demo/logolargo.png',
              }}
              onPress={() => console.log('Imagen')}
              alt="Mausoleo Santa Clara logo"
            />
          </AspectRatio>
          <Box
            mb={2}
            width={'80%'}
            style={{
              borderBottomColor: '#90918d',
              borderBottomWidth: 1,
            }}></Box>
          <AspectRatio w={'80%'} ratio={{base: 1 / 1}} overflow={'hidden'}>
            <QRCodeScanner
              cameraStyle={{width: '100%'}}
              onRead={this.onSuccess}
            />
          </AspectRatio>
          <Button
            w={'90%'}
            style={{backgroundColor: '#FAFF00'}}
            onPress={() =>
              //console.log(this.state.url)
              this.props.navigation.navigate('DifuntosList', {
                url: this.state.url,
              })
            }>
            <Text m={(1, -1)}>Buscar</Text>
          </Button>
        </Center>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  camera: {
    width: '50%',
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    padding: 32,
    color: '#777',
  },
  textBold: {
    fontWeight: '500',
    color: '#000',
  },
  buttonText: {
    fontSize: 21,
    color: 'rgb(0,122,255)',
  },
  buttonTouchable: {
    padding: 16,
  },
});
