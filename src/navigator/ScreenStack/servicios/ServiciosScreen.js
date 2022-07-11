import React from 'react';

import ServicioComponent from './ServicioComponent';

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

export default class ServiciosScreen extends React.Component {
    render(){
        return (
            <NativeBaseProvider>
                <ScrollView>
                    <Center>
                    <ServicioComponent categoria='SERVICIOS' name="Ceremonia" image="https://www.mausoleosantaclara.com.mx/Images/demo/gallery/Ceremonias.jpg" description="Honra a tus seres queridos con un pequeño homenaje de ultimo adios o aniversario" price="5000"/>
                    <ServicioComponent categoria='SERVICIOS' name="Mantenimiento" image="https://www.mausoleosantaclara.com.mx/img/exteriorcarrouseldos.jpg" description="Instalaciones edificadas con materiales y acabados de calidad." price=""/>
                    <ServicioComponent categoria='SERVICIOS' name="Vigilancia" image="https://www.mausoleosantaclara.com.mx/img/exteriorcarrouseluno.jpg" description="Personal capacitado para mantener las instalaciones en óptimas condiciones." price=""/>
                    </Center>
                </ScrollView>
            </NativeBaseProvider>);
    }
}