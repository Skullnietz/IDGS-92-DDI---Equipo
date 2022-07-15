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
} from 'native-base';
import Icon from 'react-native-vector-icons/Entypo';

export default function CondolenciaComponent(props) {
  return (
    <Box
      m={3}
      borderWidth="1"
      rounded="lg"
      w={'100%'}
      p={2}
      borderColor="coolGray.200">
      <Flex direction="row">
        <Text w={'85%'}>{props.mensaje}</Text>
        <Flex>
          <Button
            style={styles.actionButtons}
            onPress={() => console.log('Eliminar')}>
            <Icon name="dots-three-vertical" color="black" size={20} />
          </Button>
        </Flex>
      </Flex>
    </Box>
  );
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
