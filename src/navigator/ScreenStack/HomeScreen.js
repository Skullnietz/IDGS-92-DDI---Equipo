import React from 'react';
import { StyleSheet,ScrollView,NativeBaseProvider, Box, Heading ,AspectRatio, Image, Center, HStack,Stack, Text, Link} from "native-base";

// * Iconos
import Icon from 'react-native-vector-icons/Ionicons';

const HomeBox1 = () => {
  return <ScrollView maxW="400" h="80" _contentContainerStyle={{
    px: "20px",
    mb: "4",
    minW: "72"
  }}>
    <Box alignItems="center" ml={'-7%'}>
    
      <Box maxW="80" m={2} rounded="lg" overflow="hidden" borderColor="coolGray.200" borderWidth="1" _dark={{
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
            uri: "https://www.mausoleosantaclara.com.mx/img/10.jpg"
          }} alt="image" />
          </AspectRatio>
          <Center bg="yellow.500" _dark={{
          bg: "yellow.400"
        }} _text={{
          color: "warmGray.50",
          fontWeight: "700",
          fontSize: "xs"
        }} position="absolute" bottom="0" px="3" py="1.5">
            VIDEO
          </Center>
        </Box>
        <Stack p="4" space={3}>
          <Stack space={2}>
            <Heading size="md" ml="-1">
              Bienvenido a Mausoleo Santa Clara, Toluca, Mex.
            </Heading>
            <Text fontSize="xs" _light={{
            color: "violet.500"
          }} _dark={{
            color: "violet.400"
          }} fontWeight="500" ml="-0.5" mt="-1">
              Un lugar de tranquilidad y paz.
            </Text>
          </Stack>
          <Text fontWeight="400">
            Te invitamos a dar un paseo virtual por el Mausoleo Santa Clara, donde podras ver los exteriores e interiores.
          </Text>
          <HStack alignItems="center" space={4} justifyContent="space-between">
            <HStack alignItems="center">
                <Link ml={'5%'} w={'35%'} href="http://api.whatsapp.com/send?phone=+527228974086">
                  <Icon name="logo-whatsapp" color="green" size={25}/>
                </Link>
                <Link w={'35%'} href="https://wwww.facebook.com/MausoleoSantaClaraToluca">
                  <Icon name="logo-facebook" color="blue" size={25}/>
                </Link>
                <Link w={'35%'} href="https://wwww.twitter.com/MausoleoStaCla">
                  <Icon name="logo-twitter" color="skyblue" size={25}/>
                </Link>
            </HStack>
          </HStack>
        </Stack>
      </Box>
    </Box>
    </ScrollView>;
};

    export default () => {
        return (
          <NativeBaseProvider>
            <Center flex={1} px="3">
                <HomeBox1/>
                
            </Center>
          </NativeBaseProvider>
        );
    };
    