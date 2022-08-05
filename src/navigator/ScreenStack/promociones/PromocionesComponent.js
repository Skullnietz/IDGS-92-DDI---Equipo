import React, {useState, useCallback, useRef, useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {Box, FlatList, Center, View, Image, AspectRatio} from 'native-base';

import Carousel from 'react-native-snap-carousel';

export default function PromocionesComponent() {
  const [data, setData] = useState({productos: [{img: '6.jpg'}]});

  const getPromociones = async () => {
    setData(
      await fetch('https://mausoleosantaclara.com.mx/App/promociones').then(
        response => response.json(),
      ),
    );
  };
  getPromociones();

  return (
    <View>
      <Carousel
        data={data.productos}
        windowSize={1}
        sliderWidth={'100%'}
        itemWidth={'90%'}
        //layout={'stack'}
        //layoutCardOffset={`18`}
        renderItem={({item, index}) => {
          return (
            <Box style={{width: '100%'}}>
              <Center>
                <Image
                  source={{
                    uri:
                      'https://mausoleosantaclara.com.mx/Images/Beneficiary/Promociones/' +
                      item.img,
                  }}
                  alt="alternative text"
                  size="xl"
                />
              </Center>
            </Box>
          );
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  flatlist: {
    flex: 1,
  },
});
