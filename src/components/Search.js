import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text style={styles.text1}>Oferty</Text>
      <Text style={styles.text2}>Oferty specjalnie dla ciebie</Text>
      <View style={styles.inputs}>
        <View style={styles.textInput}>
          <Icon style={{paddingTop: 8}} name="search" size={30} color="#000"/>
          <TextInput style={{fontSize: 25, paddingLeft: 5,}} placeholder=" Szukaj" />
        </View>
        <TouchableOpacity style={styles.button}>
          <Icon style={styles.buttonText} name="options-outline" size={40} color="#fff"/>
        </TouchableOpacity>
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
  textInput: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    color: 'black',
    fontSize: 20,   
    flexBasis: '60%',
    height: 70,
  },
  text1:{
    color: 'gray',
    fontSize: 22,
  },
  text2:{
    fontWeight: 'bold',
    fontSize: 22,
  },
  button:{
    flex: 1,
    height: 70,
    backgroundColor: '#319C0C',
    borderRadius: 25,
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
  },
  inputs:{
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    width: '100%',
    gap: 15,
    marginTop: 30,
  }
});
