import { React, useEffect, useState } from 'react';
import { View, StyleSheet, Text, ImageBackground } from 'react-native';
import Scoreboard from '../Scoreboard/Scoreboard';
import { useNavigation, useRoute } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

//import GoBack from '../GoBack/GoBack';

export default function ShowMatch() {
  const navigation = useNavigation();
  const route = useRoute();

  const documentId = route.params.item;

  const [doc, setDoc] = useState('');

  const getData = () => {
    try {
      firestore().collection('match').doc(documentId).get()
        .then(snapshot => setDoc(snapshot.data()))
      console.log(doc.T1Name);
    } catch (e) {
      console.log(e);
    }
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <ImageBackground
      source={require('../../assets/padelField.png')}
      style={{ width: '100%', height: '100%' }}>
      <View style={styles.container}>
        <View style={styles.mainScreen}>
          <View style={styles.topTitle}>
            <Text style={styles.topTitleText}>{doc.T1Name}</Text>
          </View>
          <View style={styles.top}>
            <View style={styles.topLeft}>
              <Text style={styles.player1}>{doc.T1LName}</Text>
            </View>
            <View style={styles.topRight}>
              <Text style={styles.player}>{doc.T1RName}</Text>
            </View>
          </View>
          <Scoreboard style={styles.scoreboard} doc={doc} />
          <View style={styles.bottom}>
            <View style={styles.bottomLeft}>
              <Text style={styles.player}>{doc.T2LName}</Text>
            </View>
            <View style={styles.bottomRight}>
              <Text style={styles.player}>{doc.T2RName}</Text>
            </View>
          </View>
          <View style={styles.bottomTitle}>
            <Text style={styles.bottomTitleText}>{doc.T2Name}</Text>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#004AAD',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mainScreen: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  topTitle: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  topTitleText: {
    fontSize: 50,
    color: '#ffffff',
  },
  bottomTitle: {
    flex: 0.3,
    alignItems: 'center',
    justifyContent: 'flex-start',
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
    fontSize: 30,
    padding: 5,
    borderColor: '#DFFF4F',
    borderWidth: 2,
  },
  player: {
    color: '#DFFF4F',
    fontSize: 30,
  },
});