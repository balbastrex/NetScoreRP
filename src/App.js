import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.topTitle}>
          <Text style={styles.topTitleText}>DAM PADEL</Text>
        </View>
      <View style={styles.top}>
        <View style={styles.topLeft}>
          <Text style={styles.player1}>Paco Jonarte</Text>
        </View>
        <View style={styles.topRight}>
          <Text style={styles.player2}>Rafa Navidad</Text>
      </View>
      </View>
      <View style={styles.bottom}>
        <View style={styles.bottomLeft}>
          <Text style={styles.player3}>Belastegón</Text>
        </View>
        <View style={styles.bottomRight}>
          <Text style={styles.player4}>Juan LeBrín</Text>
      </View>
      </View>
      <View style={styles.bottomTitle}>
        <Text style={styles.bottomTitleText}>DAW PADEL</Text>
      </View>
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
  topTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DFFF4F',
    borderWidth: 2,
  },
  topTitleText: {
    flex: 1,
    borderColor: '#DFFF4F',
    borderWidth: 2,
    color: '#ffffff',
  },
  bottomTitle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#DFFF4F',
    borderWidth: 2,
  },
  bottomTitleText: {
    flex: 1,
    borderColor:  '#DFFF4F',
    borderWidth: 2,
    color: '#ffffff',
  },
  top: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomLeft: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomRight: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  player1: {
    color: '#ffffff',
    padding: 5,
    borderColor:  '#DFFF4F',
    borderWidth: 2,
  },
  player2: {
    color: '#DFFF4F',
  },
  player3: {
    color: '#DFFF4F',
  },
  player4: {
    color: '#DFFF4F',
  },
});
