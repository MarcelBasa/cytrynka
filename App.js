import React from 'react';
import { StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Offers from './src/screens/Offers';
import Offer from './src/screens/Offer';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar />
      <Stack.Navigator
        initialRouteName="Offers"
        screenOptions={{ headerShown: false }} 
      >
        <Stack.Screen name="Offers" component={Offers} />
        <Stack.Screen name="Offer" component={Offer} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}