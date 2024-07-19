import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

import OffersForYou from '../components/OffersForYou';
import NearShop from '../components/NearShop';

export default function Offer({ route }) {
  const { product } = route.params;


  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          style={styles.image}
          source={{ uri: product.img }}
        />
        <View style={styles.containerItem}>
          <View style={styles.item}>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>{product.name}</Text>
            <Text>{product.description}</Text>
          </View>
          <View style={styles.item}>
            <TouchableOpacity
              style={styles.button}
            >
              <Text style={styles.buttonText}>
                {product.price}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.input}>
          <Text style={styles.title}>
            Title
          </Text>
          <Text style={{color: 'gray'}}>gdas gasd gsaga sgsags sda gsd g sadasd gsaga sgsags sda gsd g sadasd gsaga sgsags sda gsd g sad gsa</Text>
        </View>
      </View>
      <NearShop />
      <OffersForYou />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    textAlign: 'center',
    justifyContent: 'center',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  containerItem:{
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'center',
    gap: 30,
  },
  item:{
    padding: 10,
    backgroundColor: '#fff',
  },
  image: {
    width: 200,
    height: 200,
    resizeMode: 'contain',
  },
  button:{
    width: 130,
    height: 45,
    backgroundColor: '#319C0C',
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    color: '#fff',
  },
  input:{
    flex: 1,
    width: '90%',
    margin: 15,
    padding: 15,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'left',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    color: 'gray',
    fontSize: 30,
  },
  title:{
    color: '#000',
    fontSize: 15,
  }
});
