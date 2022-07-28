import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

import {
    Box,
    AspectRatio,
    Image,
    Stack,
    Text,
    State,
    NativeBaseProvider,
    Button,
    Center,
    HStack,
    Flex,
    Heading,
    Link,
  } from 'native-base';

export default function ServicioComponent(props){
    function ButtonSelector(){
        if( props.categoria == 'PRODUCTOS'){
            return (
                <Button
                bgColor={'black'}
                style={{position: 'relative', right:'-10%' }}
                >
                    Solicitar
                </Button>
            );
        }
        if( props.categoria == 'SERVICIOS'){
            return (
                <Button  size={"xs"}
                bgColor={'green.700'} pt={1}
                style={{position: 'relative', right:'-5%'}}
                ><Flex direction="row"><Text color={"white"} style={{fontSize: 15}} justifyContent={'center'}>Solicitar</Text> <Icon name ="logo-whatsapp" size={25} color="white" style={{ right:'-25%'}} /></Flex>
                    
                    
                </Button>
            );
        }
    }

    return (
        
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
                            uri: props.image
                        }} alt="image" />
                        </AspectRatio>
                        <Center bg= {props.categoria == "SERVICIOS" ? "green.400": 'gray.500'}  _dark={{
                        bg: "violet.400"
                        }} _text={{
                        color: "warmGray.50",
                        fontWeight: "600",
                        fontSize: "xs"
                        }} position="absolute" bottom="0" px="3" py="1">
                            {props.categoria}
                        </Center>
                        </Box>
                    
                        
                        <Flex  direction="row">
                            <Box w={'60%'}>
                            <Heading   ml={1.5}>
                            {props.name}
                            </Heading>
                            </Box>    
                        
                            <ButtonSelector></ButtonSelector>
                        </Flex>
                        <Text p={3} fontWeight="400" >
                            {props.description}
                        </Text>
                    </Box> 
        
    )
}