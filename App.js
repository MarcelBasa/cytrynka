import React from 'react';
import { StatusBar, View, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Search from './src/components/Search';
import Offers from './src/components/Offerts';
import Offert from './src/screens/Offert';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StatusBar hidden={true} />
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={MainScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Offert" component={Offert} options={{ headerShown: true }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const MainScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <Search />
      </View>
      <View style={styles.offersContainer}>
        <Offers navigation={navigation} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
  },
  searchContainer: {
    flex: 1,
    width: '100%',
  },
  offersContainer: {
    flex: 3,
    width: '100%',
  },
});
