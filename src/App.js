import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.mainScreen}>
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
        <View style={styles.scoreboard}>
          <View style={styles.scoreboardTop}>
          <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>DAW</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>6</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>3</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>0</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>40</Text></View>
          </View>
          <View style={styles.scoreboardBottom}>
            <View style={styles.scoreboardBottom}><Text style={styles.scoreboardText}>DAW</Text></View>
            <View style={styles.scoreboardBottom}><Text style={styles.scoreboardText}>4</Text></View>
            <View style={styles.scoreboardBottom}><Text style={styles.scoreboardText}>5</Text></View>
            <View style={styles.scoreboardBottom}><Text style={styles.scoreboardText}>0</Text></View>
            <View style={styles.scoreboardBottom}><Text style={styles.scoreboardText}>15</Text></View>
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
  mainScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  topTitle: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
    borderColor: '#DFFF4F',
    borderWidth: 2,
  },
  topTitleText: {
    fontSize: 50,
    color: '#ffffff',
  },
  scoreboard: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: '#0d0d0d',
    borderWidth: 2,
  },
  scoreboardTop: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreboardBottom: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  scoreboardText: {
    fontSize: 30,
  },
  bottomTitle: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderColor: '#DFFF4F',
    borderWidth: 2,
  },
  bottomTitleText: {
    fontSize: 50,
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
