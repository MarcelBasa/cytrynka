import React from 'react';
import { View, Button, Linking } from 'react-native';

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
        <View>
            <Button 
                title='Najbliższy sklep'
                onPress={openGoogleMaps}
            />
        </View>
    );
}