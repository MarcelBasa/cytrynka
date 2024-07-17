import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Offers from '../components/Offers';

export default function SpecialOffer({ route, navigation }) {
  const { product } = route.params;

  return (
    <View style={styles.container}>
        <View style={styles.textContainer}>
        <Text>Product Name: {product.name}</Text>
        <Text>Price: {product.price}</Text>
        <Text>Description: {product.description}</Text>
        </View>
        <Offers navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
  textContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#888',
  }
});
