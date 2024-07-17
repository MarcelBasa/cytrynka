import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SpecialOffer({ route }) {
  const { product } = route.params;
  
  return (
    <View style={styles.container}>
      <Text>Product Name: {product.name}</Text>
      <Text>Price: {product.price}</Text>
      <Text>Description: {product.description}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 20,
  },
});
