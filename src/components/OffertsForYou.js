import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import Offers from './Offerts';

export default function OffersForYou( {navigation} ){
    return (
        <View style={styles.container}>
            <Text style={styles.textInput}>
                To może Ci się spodobać
            </Text>
            <Offers navigation={navigation} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    textInput:{
      textAlign: 'center',
      padding: 10,
    }
});