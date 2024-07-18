import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import OffersForYou from '../components/OffersForYou';
import NearShop from '../components/NearShop';

export default function SpecialOffer({ route, navigation }) {
  const { product } = route.params;


  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
          <Text>Product Name: {product.name}</Text>
          <Text>Price: {product.price}</Text>
          <Text>Description: {product.description}</Text>
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
    backgroundColor: '#888',
  },
});
