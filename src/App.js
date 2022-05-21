import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import ShowMatch from './components/ShowMatch/ShowMatch';
import BroadcastMatchForm from './components/BroadcastMatchForm/BroadcastMatchForm';
import BroadcastMatch from './components/BroadcastMatch/BroadcastMatch';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <ShowMatch style={styles.ShowMatch}/> */}
      {/* <BroadcastMatchForm /> */}
      <BroadcastMatch />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004AAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  ShowMatch: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
