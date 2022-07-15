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

export default function DifuntoComponent(props) {
  const fechaNacimiento = new Date(props.fechaNacimiento);
  const fechaDefuncion = new Date(props.fechaDefuncion);
  console.log(props.condolencias);
  return (
    <Box
      width={'100%'}
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
              uri:
                'https://mausoleosantaclara.com.mx/Images/Beneficiary/' +
                props.id +
                '_1.jpg',
            }}
            alt="image"
          />
        </AspectRatio>
      </Box>
      <Stack p="4" space={3} alignItems="center">
        <Text m={(1, 1, 1, -3)}>{props.nombre}</Text>
        <Box
          width={'90%'}
          style={{
            borderBottomColor: '#90918d',
            borderBottomWidth: 1,
          }}></Box>
        <Text m={(1, 1, 1, -3)}>{props.familia}</Text>
        <Box
          width={'90%'}
          style={{
            borderBottomColor: '#90918d',
            borderBottomWidth: 1,
          }}></Box>
        <Text m={(1, 1, 1, -3)}>
          {fechaNacimiento.getDay() +
            '/' +
            fechaNacimiento.getMonth() +
            '/' +
            fechaNacimiento.getFullYear()}
          -
          {fechaDefuncion.getDay() +
            '/' +
            fechaDefuncion.getMonth() +
            '/' +
            fechaDefuncion.getFullYear()}
        </Text>
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
            props.navigation.navigate('CondolenciaScreen', {
              id: props.id,
              nombre: props.nombre,
              familia: props.familia,
              fecha:
                fechaNacimiento.getDay() +
                '/' +
                fechaNacimiento.getMonth() +
                '/' +
                fechaNacimiento.getFullYear() +
                ' - ' +
                fechaDefuncion.getDay() +
                '/' +
                fechaDefuncion.getMonth() +
                '/' +
                fechaDefuncion.getFullYear(),
              condolencias: props.condolencias,
            })
          }>
          <Text m={(1, -1)}>Enviar condolencia</Text>
        </Button>
      </Stack>
    </Box>
  );
}
