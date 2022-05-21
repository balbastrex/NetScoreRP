import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Scoreboard() {
    return (
        <View style={styles.container}>
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
    );
}


const styles = StyleSheet.create({
    container: {
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
  });