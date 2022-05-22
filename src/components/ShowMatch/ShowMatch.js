import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Scoreboard from '../Scoreboard/Scoreboard';

export default function ShowMatch() {
    return (
      <View style={styles.container}>
        <View style={styles.mainScreen}>
        <View style={styles.topTitle}>
            <Text style={styles.topTitleText}>STARVIE PADEL</Text>
          </View>
        <View style={styles.top}>
          <View style={styles.topLeft}>
            <Text style={styles.player1}>Paco Jonarte</Text>
          </View>
          <View style={styles.topRight}>
            <Text style={styles.player2}>Rafa Navidad</Text>
        </View>
        </View>
      <Scoreboard style={styles.scoreboard}/>
        <View style={styles.bottom}>
          <View style={styles.bottomLeft}>
            <Text style={styles.player3}>Belastegón</Text>
          </View>
          <View style={styles.bottomRight}>
            <Text style={styles.player4}>Juan LeBrín</Text>
        </View>
        </View>
        <View style={styles.bottomTitle}>
          <Text style={styles.bottomTitleText}>NOX PADEL</Text>
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
      marginTop: 40,
      marginBottom: 10,
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
    scoreboard: {
      flex: 0.5,
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