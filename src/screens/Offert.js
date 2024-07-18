import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

import OffersForYou from '../components/OffertsForYou';
import NearShop from '../components/NearShop';

export default function Offert({ route, navigation }) {
  const { product } = route.params;


  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
          <Image
            style={styles.image}
            source={{ uri: product.img }}
          />
          <Text>{product.name}</Text>
          <Text>{product.price}</Text>
          <Text>{product.description}</Text>
        </View>
        <NearShop />
        <OffersForYou  navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
});
