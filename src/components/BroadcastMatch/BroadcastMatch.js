import { React, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import { useNavigation, useRoute } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import Counter from "../Counter/Counter";
import GoBack from "../GoBack/GoBack";

export default function BroadcastMatch() {
    
    //NAVIGATION PARAMS
    const navigation = useNavigation();
    const route = useRoute();

    // SETS
    const [set1Top, setSet1Top] = useState('');
    const [set2Top, setSet2Top] = useState('');
    const [set3Top, setSet3Top] = useState('');
    const [set1Bottom, setSet1Bottom] = useState('');
    const [set2Bottom, setSet2Bottom] = useState('');
    const [set3Bottom, setSet3Bottom] = useState('');

    // POINTS
    const [pointsTop, setPointsTop] = useState('');
    const [pointsBottom, setPointsBottom] = useState('');

    //SERVE
    const [serve, setServe] = useState('');

    //DATABASE FUNCTIONS
    const updateServe = (player) => {

        try {
            firestore().collection('match').doc(documentId).set({
                serve: player,
            })
        } catch (e) {
            console.log(e);
        }
    }

    //DATABASE VARIABLES
    const documentId = route.params.documentId;


    //ALERT MESSAGE
    const deleteMessage = () =>
    Alert.alert(
      "Are you sure you want to finish the match?",
      "All match data will be deleted",
      [
        {
          text: "Cancel",
          onPress: () => console.log("Cancel Pressed"),
          style: "cancel"
        },
        { text: "OK", onPress: () => deleteMatch() }
      ]
    );


    //DATABASE FUNCTIONS
    async function deleteMatch() {
        try {
            await firestore().collection('match').doc(documentId).delete();
        } catch (e) {
            console.log(e);
        } finally {
            navigation.goBack();
        }
    }


    return (

        <View style={styles.container}>
            <GoBack />
            <View>
                <View>
                    <Text style={styles.sectionTitle}>Point management</Text>
                </View>
                <View>
                    <Counter onChangeValue={(points) => { console.log(points) }} />
                    <Counter />
                </View>
            </View>
            <View>
                <Text style={styles.sectionTitle}>Serve management</Text>
            </View>
            <View style={styles.serve}>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T1L"
                        status={serve === 'T1L' ? 'checked' : 'unchecked'}
                        onPress={() => updateServe('T1L')}
                    />
                    <Text>Player Name</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T1R"
                        status={serve === 'T1R' ? 'checked' : 'unchecked'}
                        onPress={() => updateServe('T1R')}
                    />
                    <Text>Player Name</Text>
                </View>
            </View>
            <View style={styles.serve}>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T2L"
                        status={serve === 'T2L' ? 'checked' : 'unchecked'}
                        onPress={() => updateServe('T2L')}
                    />
                    <Text>Player Name</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T2R"
                        status={serve === 'T2R' ? 'checked' : 'unchecked'}
                        onPress={() => updateServe('T2R')}
                    />
                    <Text>Player Name</Text>
                </View>
            </View>
            <Text>{serve}</Text>
            <Button
                mode="outlined"
                color='#DFFF4F'
                style={{ borderColor: '#DFFF4F', marginTop: 20, }}
                onPress={() => deleteMessage()}>
                FINISH THE MATCH!
            </Button>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
        backgroundColor: '#004AAD',
    },
    sectionTitle: {
        alignItems: 'center',
        justifyContent: 'center',
        color: '#ffffff',
        fontSize: 25,
    },
    serve: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    serveRow: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
});