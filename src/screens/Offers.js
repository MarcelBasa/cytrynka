import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Button, FlatList, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import productsData from '../data/products.json';
import Search from '../components/Search';

export default function Offers() {
  const [products, setProducts] = useState([]);
  const navigation = useNavigation();
  
  useEffect(() => {
    setProducts(productsData.products);
  }, []);

  const handleChooseOffer = (product) => {
    navigation.navigate('Offer', { product });
  };

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Image
        style={styles.image}
        source={{ uri: item.img }}
      />
      <Text style={{paddingLeft: 10, fontWeight: 'bold'}}>{item.name}</Text>
      <View style={styles.ItemDescContainer}>
        <View style={styles.ItemDesc}>
          <Text>{item.description}</Text>
        </View>
        <View style={styles.ItemDesc}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleChooseOffer(item)}
          >
            <Text style={styles.buttonText}>{item.price}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      <View style={styles.offersContainer}>
        <FlatList
          data={products}
          renderItem={renderItem}
          keyExtractor={item => item.id.toString()}
          numColumns={2}
          columnWrapperStyle={styles.row}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  searchContainer: {
    flex: 1,
  },
  offersContainer: {
    flex: 3,
    backgroundColor: '#fff',
  },
  row: {
    justifyContent: 'space-around',
  },
  item: {
    margin: 5,
    padding: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    color: 'black',
    fontSize: 20
  },
  image: {
    width: 180,
    height: 180,
    resizeMode: 'contain',
  },
  input: {
    width: '95%',
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
    
  },
  ItemDescContainer:{
    flex: 1,
    flexDirection: 'row',
  },
  ItemDesc:{
    flex: 1,
    padding: 5,
  },
  button:{
    width: 80,
    height: 45,
    backgroundColor: '#319C0C',
    borderRadius: 6,
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  }
});
