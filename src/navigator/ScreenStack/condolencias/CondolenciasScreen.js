import React, {useState} from 'react';

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
} from 'native-base';
import Icon from 'react-native-vector-icons/AntDesign';
import Ionicon from 'react-native-vector-icons/Ionicons';

export default function DifuntosList(props, {navigation}) {
  console.log(props);
  return (
    <NativeBaseProvider>
      <ScrollView>
        <Center>
          <Box
            w={'80%'}
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
            <Flex direction="row">
              <Box w={'40%'}>
                <AspectRatio w="100%" ratio={1}>
                  <Image
                    source={{
                      uri: 'https://www.holidify.com/images/cmsuploads/compressed/Bangalore_citycover_20190613234056.jpg',
                    }}
                    alt="image"
                  />
                </AspectRatio>
              </Box>
              <Stack
                w={'60%'}
                p="4"
                space={3}
                alignItems="center"
                justifyContent="center">
                <Text m={(1, 1, 1, -3)}>Nombre</Text>
                <Box
                  width={'100%'}
                  style={{
                    borderBottomColor: '#90918d',
                    borderBottomWidth: 1,
                  }}></Box>
                <Text m={(1, 1, 1, -3)}>Familia</Text>
                <Box
                  width={'100%'}
                  style={{
                    borderBottomColor: '#90918d',
                    borderBottomWidth: 1,
                  }}></Box>
                <Text m={(1, 1, 1, -3)}>Fecha</Text>
                <Box
                  width={'100%'}
                  style={{
                    borderBottomColor: '#90918d',
                    borderBottomWidth: 1,
                  }}></Box>
              </Stack>
            </Flex>
          </Box>
          <Box
            m={3}
            borderWidth="1"
            rounded="lg"
            w={'80%'}
            p={2}
            borderColor="coolGray.200">
            <Flex direction="row">
              <Text w={'85%'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Flex>
                <Button
                  style={styles.actionButtons}
                  onPress={() => console.log('Eliminar')}>
                  <Icon name="delete" color="#900" size={20} />
                </Button>
                <Button
                  style={styles.actionButtons}
                  onPress={() => console.log('Editar')}>
                  <Icon name="edit" color="black" size={20} />
                </Button>
              </Flex>
            </Flex>
          </Box>
          <Box
            m={3}
            borderWidth="1"
            rounded="lg"
            w={'80%'}
            p={2}
            borderColor="coolGray.200">
            <Flex direction="row">
              <Text w={'85%'}>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </Text>
              <Flex>
                <Button
                  style={styles.actionButtons}
                  onPress={() => console.log('Eliminar')}>
                  <Icon name="delete" color="#900" size={20} />
                </Button>
                <Button
                  style={styles.actionButtons}
                  onPress={() => console.log('Editar')}>
                  <Icon name="edit" color="black" size={20} />
                </Button>
              </Flex>
            </Flex>
          </Box>
        </Center>
      </ScrollView>
      <Box style={(styles.addButton, styles.addButton)} alignItems="center">
        <Button
          p={-1}
          borderRadius={50}
          color={'white'}
          borderColor="coolGray.200"
          borderWidth="1">
          <Ionicon
            name="add"
            color="black"
            size={35}
            style={styles.icon}
            onPress={
              () => console.log(this.props)
              //this.props.navigation.navigate('AddCondolenciaScreen')
            }
          />
        </Button>
      </Box>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 100,
  },
  actionButtons: {
    backgroundColor: 'transparent',
  },
});
