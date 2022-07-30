import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
  Box,
  AspectRatio,
  Image,
  Stack,
  Text,
  NativeBaseProvider,
  Button,
  Center,
  HStack,
  Flex,
  Heading,
  Link,
} from 'native-base';

export default function ProductoComponent(props) {
  function ButtonSelector() {
    if (props.categoria == 'PRODUCTOS') {
      return (
        <Button bgColor={'black'} style={{position: 'relative', right: '-5%'}}>
          <Flex direction="row">
            <Text
              color={'white'}
              style={{fontSize: 15}}
              justifyContent={'center'}>
              Solicitar
            </Text>{' '}
            <Icon
              name="logo-whatsapp"
              size={25}
              color="white"
              style={{right: '-25%'}}
            />
          </Flex>
        </Button>
      );
    }
    if (props.categoria == 'SERVICIOS') {
      return (
        <Link
          w={'15%'}
          direction="row"
          href="https://api.whatsapp.com/send?phone=+527228974086&text=Hola">
          <Icon
            name="logo-whatsapp"
            size={25}
            color="green"
            style={{position: 'relative', right: '-150%'}}
          />
        </Link>
      );
    }
  }

  return (
    <Box
      m={2}
      maxW="80"
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
        <AspectRatio w="100%" ratio={1 / 1}>
          <Image
            source={{
              uri: props.image,
            }}
            alt="image"
          />
        </AspectRatio>
        <Center
          bg={props.categoria == 'SERVICIOS' ? 'violet.400' : 'gray.500'}
          _dark={{
            bg: 'violet.400',
          }}
          _text={{
            color: 'warmGray.50',
            fontWeight: '700',
            fontSize: 'xs',
          }}
          position="absolute"
          bottom="0"
          px="3"
          py="1.5">
          {props.categoria}
        </Center>
      </Box>

      <Flex direction="row">
        <Box w={'60%'}>
          <Heading ml={1.5}>{props.name}</Heading>
        </Box>

        <ButtonSelector></ButtonSelector>
      </Flex>
    </Box>
  );
}
