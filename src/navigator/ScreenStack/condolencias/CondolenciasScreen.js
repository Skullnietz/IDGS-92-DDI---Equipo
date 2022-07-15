import React from 'react';

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
  FlatList,
} from 'native-base';
import Ionicon from 'react-native-vector-icons/Ionicons';

import CondolenciaComponent from './CondolenciaComponent';

export default class DifuntosList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.state);
  }

  render() {
    console.log(this.props.route.params.condolencias);
    return (
      <NativeBaseProvider>
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
                      uri:
                        'https://mausoleosantaclara.com.mx/Images/Beneficiary/' +
                        this.props.route.params.id +
                        '_1.jpg',
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
                <Text m={(1, 1, 1, -3)}>{this.props.route.params.nombre}</Text>
                <Box
                  width={'100%'}
                  style={{
                    borderBottomColor: '#90918d',
                    borderBottomWidth: 1,
                  }}></Box>
                <Text m={(1, 1, 1, -3)}>{this.props.route.params.familia}</Text>
                <Box
                  width={'100%'}
                  style={{
                    borderBottomColor: '#90918d',
                    borderBottomWidth: 1,
                  }}></Box>
                <Text m={(1, 1, 1, -3)}>{this.props.route.params.fecha}</Text>
                <Box
                  width={'100%'}
                  style={{
                    borderBottomColor: '#90918d',
                    borderBottomWidth: 1,
                  }}></Box>
              </Stack>
            </Flex>
          </Box>
        </Center>
        <Center>
          <Box>
            <FlatList
              w={'80%'}
              data={this.props.route.params.condolencias}
              renderItem={({item}) => (
                <CondolenciaComponent id={item.id} mensaje={item.mensaje} />
              )}
              keyExtractor={item => item.id}
            />
          </Box>
        </Center>

        <Box style={styles.addButton} alignItems="center">
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
              onPress={() =>
                this.props.navigation.navigate('AddCondolenciaScreen', {
                  info: this.props.route.params,
                })
              }
            />
          </Button>
        </Box>
      </NativeBaseProvider>
    );
  }
}

const styles = StyleSheet.create({
  addButton: {
    position: 'absolute',
    bottom: 10,
    right: 15,
  },
  icon: {
    backgroundColor: 'white',
    borderRadius: 100,
  },
  actionButtons: {
    backgroundColor: 'transparent',
  },
});
