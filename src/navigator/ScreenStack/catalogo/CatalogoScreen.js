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
                     <ProductoComponent categoria='PRODUCTOS' name="Urna alternativa" image="https://www.mausoleosantaclara.com.mx/Images/Productos/Alternativa.jpeg" description="" />
                    <ProductoComponent categoria='PRODUCTOS' name="Urna cilindro" image="https://www.mausoleosantaclara.com.mx/Images/Productos/Cilindro.jpeg" description="" />
                    <ProductoComponent categoria='PRODUCTOS' name="Urna esmeralda" image="https://www.mausoleosantaclara.com.mx/Images/Productos/Esmeralda.jpeg" description="" />
                    <ProductoComponent categoria='PRODUCTOS' name="Urna infantil" image="https://www.mausoleosantaclara.com.mx/Images/Productos/Infantil.jpeg" description="" />
                    <ProductoComponent categoria='PRODUCTOS' name="Urna Inox Retablo" image="https://www.mausoleosantaclara.com.mx/Images/Productos/InoxRetablo.jpeg" description="" />
                    <ProductoComponent categoria='PRODUCTOS' name="Urna Jasper" image="https://www.mausoleosantaclara.com.mx/Images/Productos/Jasper.jpeg" description="" />
                    </Center>
                </ScrollView>
            </NativeBaseProvider>);
    }
}