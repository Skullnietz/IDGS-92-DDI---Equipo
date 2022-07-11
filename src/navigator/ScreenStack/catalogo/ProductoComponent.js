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

export default function ProductoComponent(props){
    function ButtonSelector(){
        if( props.categoria == 'PRODUCTOS'){
            return (
                <Button
                bgColor={'black'}
                style={{position: 'relative', right:'-15%'}}
                >
                    Solicitar
                </Button>
            );
        }
        if( props.categoria == 'SERVICIOS'){
            return (
                <Link w={'15%'} 
                    direction="row" 
                    href="https://api.whatsapp.com/send?phone=+527228974086&text=Hola"
                >
                    <Icon name ="logo-whatsapp" size={25} color="green" style={{position: 'relative', right:'-150%'}}/>
                </Link>
            );
        }
    }

    return (
        <NativeBaseProvider>
            <Box m={2} maxW="80" rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
                    borderColor: "coolGray.600",
                    backgroundColor: "gray.700"
                    }} _web={{
                    shadow: 2,
                    borderWidth: 0
                    }} _light={{
                    backgroundColor: "gray.50"
                    }}>
                        <Box>
                        <AspectRatio w="100%" ratio={16 / 9}>
                            <Image source={{
                            uri: "https://www.mausoleosantaclara.com.mx/Images/demo/gallery/Ceremonias.jpg"
                        }} alt="image" />
                        </AspectRatio>
                        <Center bg= {props.categoria == "SERVICIOS" ? "violet.400": 'gray.500'}  _dark={{
                        bg: "violet.400"
                        }} _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1.5">
                            {props.categoria}
                        </Center>
                        </Box>
                        <Stack p="4" space={3}>
                        <Stack space={2}>
                            <Heading size="md" ml="-1">
                            {props.name}
                            </Heading>
                        </Stack>
                        <Text fontWeight="400">
                            {props.description}
                        </Text>
                        <Flex w={"80%"} direction="row" justifyContent={'center'}>
                            <Text w={'85%'}>Precio: ${props.price}</Text>

                            <ButtonSelector></ButtonSelector>
                        </Flex>
                        </Stack>
                    </Box> 
        </NativeBaseProvider>
    )
}