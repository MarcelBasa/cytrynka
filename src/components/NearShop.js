import React from 'react';
import { StyleSheet, View, TouchableOpacity, Linking, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function NearShop(){
    
  const openGoogleMaps = () => {
    const url = 'https://www.google.com/maps/search/?api=1&query=ITMakeovers+Bydgoszcz';
    try{
      Linking.openURL(url);
    }catch(err){
      console.error("Couldn't load page", err);
    }
  }

    return (
        <View style={styles.container}>
            <TouchableOpacity
              style={styles.button}
              onPress={openGoogleMaps}
            >
              <Text style={styles.buttonText}>
                <Icon name="location" size={20} color="#fff"/> Najbliższy sklep
              </Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    textAlign: 'center',
    width: '100%',
  },
  button:{
    marginLeft: 70,
    marginRight: 70,
    height: 45,
    backgroundColor: '#319C0C',
    borderRadius: 6,
    justifyContent: 'center',
  },
  buttonText:{
    textAlign: 'center',
    justifyContent: 'center',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  }
});