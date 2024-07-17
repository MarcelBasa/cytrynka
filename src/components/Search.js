import React, { useState, useEffect } from 'react';

import { StyleSheet, Text, View, TextInput } from 'react-native';

export default function Search() {
  return (
    <View style={styles.container}>
      <Text>Oferty</Text>
      <Text>Oferty specjalnie dla ciebie</Text>
      <TextInput 
        style={styles.input}
        placeholder="Search"
        />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#888',
      alignItems: 'center',
      justifyContent: 'center',
  },
  input: {
    width: '95%',
    backgroundColor: 'white',
    padding: 15,
    paddingTop: 10,
    paddingBottom: 10,
    margin: 10,
    marginTop: 30,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
});
