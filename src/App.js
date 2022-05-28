import React from 'react';
import { StyleSheet, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Constants from 'expo-constants';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Home from './components/Home/Home';
import ShowMatch from './components/ShowMatch/ShowMatch';
import BroadcastMatchForm from './components/BroadcastMatchForm/BroadcastMatchForm';
import BroadcastMatch from './components/BroadcastMatch/BroadcastMatch';
import LocalMatchForm from './components/LocalMatchForm/LocalMatchForm';
import LocalMatch from './components/LocalMatch/LocalMatch';




export default function App() {
  const Stack = createStackNavigator();
  return (

    <NavigationContainer >
      <Stack.Navigator options="false" screenOptions={{ headerShown: false }}>
        <Stack.Group>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="ShowMatch" component={ShowMatch} />
          <Stack.Screen name="BroadcastMatchForm" component={BroadcastMatchForm} />
          <Stack.Screen name="BroadcastMatch" component={BroadcastMatch} />
          <Stack.Screen name="LocalMatchForm" component={LocalMatchForm} />
          <Stack.Screen name="LocalMatch" component={LocalMatch} />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padingTop: Constants.statusBarHeight,
    backgroundColor: '#004AAD',
  },
});
