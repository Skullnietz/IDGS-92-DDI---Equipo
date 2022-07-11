import React from 'react';

import ProductoComponent from './ProductoComponent';

import {
  Box,
  AspectRatio,
  Image,
  Stack,
  Text,
  NativeBaseProvider,
  ScrollView,
  Center,
  HStack,
  Heading
} from 'native-base';

export default class CatalogoScreen extends React.Component {
    render(){
        return (
            <NativeBaseProvider>
                <ScrollView>
                    <Center>
                    <ProductoComponent categoria='SERVICIOS' name="Ceremonia" image="" description="Honra a tus seres queridos con un pequeño homenaje de ultimo adios o aniversario" price="5000"/>
                    <ProductoComponent categoria='PRODUCTOS' name="Urna alternativa" image="" description="" price="4000"/>
                    </Center>
                </ScrollView>
            </NativeBaseProvider>);
    }
}