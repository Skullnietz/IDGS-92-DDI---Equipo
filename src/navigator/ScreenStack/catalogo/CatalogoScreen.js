import React from 'react';

import ProductoComponent from './ProductoComponent';

import {NativeBaseProvider, Center, FlatList, Box} from 'native-base';

export default class CatalogoScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productos: [],
    };
    this.data();
  }
  async data() {
    this.setState({
      productos: await fetch(
        'https://mausoleosantaclara.com.mx/App/Productos',
      ).then(response => {
        return response.json();
      }),
    });
  }
  render() {
    return (
      <NativeBaseProvider>
        <Center>
          <Box>
            <FlatList
              data={this.state.productos}
              renderItem={({item}) => (
                <ProductoComponent
                  categoria={item.categoria}
                  name={item.name}
                  image={item.image}
                  description=""
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
