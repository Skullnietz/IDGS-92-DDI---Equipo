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
  TextArea,
  Input,
  Select,
} from 'native-base';

export default class AddCondolenciaScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      idifunto: this.props.route.params.info.id,
      email: '',
      nombre: '',
      relacion: '',
      mensaje: '',
    };
  }

  addCondolencia() {
    if (
      this.state.email != '' &&
      this.state.nombre != '' &&
      this.state != '' &&
      this.state.mensaje != ''
    ) {
      fetch('https://www.mausoleosantaclara.com.mx/App/condolencia/enviar', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'Application/json',
        }),
        body: JSON.stringify({
          idifunto: this.state.idifunto,
          email: this.state.email,
          nombre: this.state.nombre,
          relacion: this.state.relacion,
          mensaje: this.state.mensaje,
        }),
      })
        .then(response => response.text())
        .then(response => {
          if (response == 'Condolencia registrada') {
            this.props.navigation.navigate('CondolenciasScreen');
          }
        });
    } else {
      // * Aqui va una alerta si algun parametro va vacio
      console.warn('Falta algun parametro por definir');
    }
  }

  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Box
            width={'80%'}
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            p={3}
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
              <Text>Email</Text>
              <Input
                placeholder={'Inserte su correo electronico'}
                onChange={text => this.setState({email: text.nativeEvent.text})}
              />

              <Flex direction={'row'}>
                <Box w={'50%'}>
                  <Text>Nombre</Text>
                  <Input
                    onChange={text =>
                      this.setState({nombre: text.nativeEvent.text})
                    }
                  />
                </Box>
                <Box w={'50%'}>
                  <Text>Relacion</Text>
                  <Select
                    placeholder={'Seleccione una opcion'}
                    onValueChange={itemValue =>
                      this.setState({relacion: itemValue})
                    }>
                    <Select.Item label={'Familiar'} value="familiar" />
                    <Select.Item label={'Amigo'} value="amigo" />
                    <Select.Item label={'Conocido'} value="conocido" />
                  </Select>
                </Box>
              </Flex>
              <Text>Mensaje</Text>
              <TextArea
                onChange={text =>
                  this.setState({mensaje: text.nativeEvent.text})
                }></TextArea>

              <Button
                w={'50%'}
                mt={3}
                style={{backgroundColor: '#FAFF00'}}
                onPress={() => this.addCondolencia()}>
                <Text m={(1, -1)}>Enviar condolencia</Text>
              </Button>
            </Center>
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
}
