import React from 'react';
import {StyleSheet, TouchableHighlight} from 'react-native';
import {
  VStack,
  Input,
  Image,
  AspectRatio,
  Button,
  ScrollView,
  Text,
  NativeBaseProvider,
  Center,
  Box,
  Divider,
  Heading,
} from 'native-base';

export default class CementerioScreen extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <ScrollView>
        <Box alignItems="center" justifyContent={'center'}>
          <Box
            w={'90%'}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: 'coolGray.600',
              backgroundColor: 'gray.700',
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: 'gray.50',
            }}>
            <Box>
              <VStack
                m={2}
                p={3}
                space={5}
                w="100%"
                divider={
                  <Box px="2">
                    <Divider />
                  </Box>
                }>
                <VStack w="100%" space={5} alignSelf="center">
                  <Center>
                    <AspectRatio
                      ratio={{
                        base: 4 / 1,
                        md: 1 / 10,
                      }}
                      height={{
                        base: 65,
                        md: 50,
                      }}>
                      <Image
                        source={{
                          uri: 'https://www.mausoleosantaclara.com.mx/Images/demo/logolargo.png',
                        }}
                        onPress={() => console.log('Imagen')}
                        alt="Mausoleo Santa Clara logo"
                      />
                    </AspectRatio>
                  </Center>

                  <Center>
                    <TouchableHighlight
                      onPress={() =>
                        this.props.navigation.navigate('Escanear QR')
                      }>
                      <AspectRatio w="60%" ratio={1}>
                        <Image
                          source={{
                            uri: 'https://store-images.s-microsoft.com/image/apps.3104.14481483800220513.5d6b67d5-bde5-4f6b-9e61-27c8013e2ec6.9c60dd5e-6a52-40e1-af64-12ba12c450db',
                          }}
                          alt="QR reader"
                        />
                      </AspectRatio>
                    </TouchableHighlight>
                    <Text>O</Text>
                    <Input
                      alignItems="center"
                      justifyContent="center"
                      placeholder="Buscar Difunto"
                      variant="filled"
                      width="90%"
                      borderRadius="10"
                      py="1"
                      px="2"
                      borderWidth="0"
                      m={3}
                    />
                    <Button
                      w={'90%'}
                      style={{backgroundColor: '#FAFF00'}}
                      onPress={() =>
                        this.props.navigation.navigate('DifuntosList')
                      }>
                      <Text m={(1, -1)}>Buscar</Text>
                    </Button>
                  </Center>
                </VStack>
              </VStack>
            </Box>
          </Box>
        </Box>
        </ScrollView>
      </NativeBaseProvider>
    );
  }
}
