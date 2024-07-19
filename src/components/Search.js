import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Oferty</Text>
      <Text style={styles.text2}>Oferty specjalnie dla ciebie</Text>
      <View style={styles.input}>
        <Icon name="search" size={30} color="#000"/>
        <TextInput style={{fontSize: 20, paddingLeft: 5,}} placeholder=" Szukaj" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'left',
    justifyContent: 'center',
  },
  input: {
    flexDirection: 'row',
    width: '95%',
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 30,
    marginBottom: 30,
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
  text1:{
    color: 'gray',
    fontSize: 22,
  },
  text2:{
    fontWeight: 'bold',
    fontSize: 22,
  }
});
