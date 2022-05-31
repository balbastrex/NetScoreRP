import React from 'react';
import { View, StyleSheet, Text } from 'react-native';

export default function Scoreboard(props) {
  const doc = props.doc;

    return (
        <View style={styles.container}>
          <View style={styles.scoreboardTop}>
          <View style={styles.scoreboardTop}><Text style={styles.scoreboardTeam}>{doc.T1Name}</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>6</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>3</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>0</Text></View>
            <View style={styles.scoreboardTop}><Text style={styles.scoreboardText}>40</Text></View>
          </View>
          <View style={styles.scoreboardBottom}>
            <View style={styles.scoreboardBottom}><Text style={styles.scoreboardTeam}>{doc.T2Name}</Text></View>
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
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
        alignItems: 'center',
        justifyContent: 'center',
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
        fontSize: 50,
        color: 'rgba(50, 50, 50, 1)',
      },
      scoreboardTeam: {
        paddingTop: 5,
        color: 'rgba(50, 50, 50, 1)',
        fontSize: 25,
        fontWeight: '700',
      },
  });