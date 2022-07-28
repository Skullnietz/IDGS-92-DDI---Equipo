import React from 'react';

import ServicioComponent from './ServicioComponent';

import {
  NativeBaseProvider,
  ScrollView,
  Center,
  FlatList,
  Box,
} from 'native-base';

export default class ServiciosScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      servicios: [],
    };
  }
  async data() {
    this.setState({
      servicios: await fetch(
        'https://mausoleosantaclara.com.mx/App/Servicios',
      ).then(response => {
        return response.json();
      }),
    });
  }
  render() {
    this.data();
    return (
      <NativeBaseProvider>
        <Center>
          <Box>
            <FlatList
              data={this.state.servicios}
              renderItem={({item}) => (
                <ServicioComponent
                  categoria={item.categoria}
                  name={item.name}
                  image={item.image}
                  description={item.description}
                  price=""
                />
              )}
              keyExtractor={item => item.name}
            />
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
}
