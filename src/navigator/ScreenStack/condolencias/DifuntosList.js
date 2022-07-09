import React from 'react';
import {
  Box,
  AspectRatio,
  Image,
  Stack,
  Text,
  NativeBaseProvider,
  Button,
} from 'native-base';

export default class DifuntosList extends React.Component {
  render() {
    return (
      <NativeBaseProvider>
        <Box alignItems="center">
          <Box
            width={'70%'}
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
              <AspectRatio w="100%" ratio={1}>
                <Image
                  source={{
                    uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                  }}
                  alt="image"
                />
              </AspectRatio>
            </Box>
            <Stack p="4" space={3} alignItems="center">
              <Text m={(1, 1, 1, -3)}>Nombre</Text>
              <Box
                width={'90%'}
                style={{
                  borderBottomColor: '#90918d',
                  borderBottomWidth: 1,
                }}></Box>
              <Text m={(1, 1, 1, -3)}>Familia</Text>
              <Box
                width={'90%'}
                style={{
                  borderBottomColor: '#90918d',
                  borderBottomWidth: 1,
                }}></Box>
              <Text m={(1, 1, 1, -3)}>Fecha</Text>
              <Box
                width={'90%'}
                style={{
                  borderBottomColor: '#90918d',
                  borderBottomWidth: 1,
                }}></Box>
              <Button
                w={'90%'}
                style={{backgroundColor: '#FAFF00'}}
                onPress={() =>
                  this.props.navigation.navigate('CondolenciaScreen')
                }>
                <Text m={(1, -1)}>Enviar condolencia</Text>
              </Button>
            </Stack>
          </Box>
        </Box>
      </NativeBaseProvider>
    );
  }
}
