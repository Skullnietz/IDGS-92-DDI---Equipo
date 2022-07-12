import React from 'react';
import {Box, NativeBaseProvider, FlatList, Center} from 'native-base';

import DifuntoComponent from './DifuntoComponent';

export default class DifuntosList extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var data = JSON.parse(this.props.route.params.info);
    return (
      <NativeBaseProvider>
        <Center>
          <Box>
            <FlatList
              w={'80%'}
              data={data.difuntos}
              renderItem={({item}) => (
                <DifuntoComponent
                  id={item.id}
                  nombre={item.nombre}
                  fechaNacimiento={item.fechaNacimiento}
                  familia={data.nicho[0].familia}
                  fechaDefuncion={item.fechaDefuncion}
                  condolencias={item.condolencias}
                  navigation={this.props.navigation}
                />
              )}
              keyExtractor={item => item.id}
            />
          </Box>
        </Center>
      </NativeBaseProvider>
    );
  }
}
