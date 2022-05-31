import { React, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import { useNavigation, useRoute } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import Counter from "../Counter/Counter";

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
        setServe(player);

        try {
            firestore().collection('match').doc(documentId).update({serve: player});
        } catch (e) {
            console.log(e);
        }
    }

    //DATABASE VARIABLES
    const documentId = route.params.documentId;
    const T1Name = route.params.T1Name;
    const T1LName = route.params.T1LName;
    const T1RName = route.params.T1RName;
    const T2Name = route.params.T2Name;
    const T2LName = route.params.T2LName;
    const T2RName = route.params.T2RName;


    //ALERT MESSAGE
    const deleteMessage = () =>
        Alert.alert(
            "Are you sure you want to finish the match?",
            "All match data will be deleted",
            [
                {
                    text: "Cancel",
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
            navigation.navigate('Home');
        }
    }


    return (

        <View style={styles.container}>
            <Text style={styles.titleText}>MATCH CODE: {documentId}</Text>
            <View>
                <View>
                    <Text style={styles.sectionTitle}>Point management</Text>
                </View>
                <View>
                    <Counter name={T1Name} />
                    <Counter name={T2Name} />
                </View>
            </View>
            <View>
                <Text style={styles.sectionTitle}>Serve management</Text>
            </View>
            <View style={styles.serve}>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T1LName}
                        status={serve === T1LName ? 'checked' : 'unchecked'}
                        onPress={() => updateServe(T1LName)}
                    />
                    <Text>{T1LName}</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T1RName}
                        status={serve === T1RName ? 'checked' : 'unchecked'}
                        onPress={() => updateServe(T1RName)}
                    />
                    <Text>{T1RName}</Text>
                </View>
            </View>
            <View style={styles.serve}>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T2LName}
                        status={serve === T2LName ? 'checked' : 'unchecked'}
                        onPress={() => updateServe(T2LName)}
                    />
                    <Text>{T2LName}</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T2RName}
                        status={serve === T2RName ? 'checked' : 'unchecked'}
                        onPress={() => updateServe(T2RName)}
                    />
                    <Text>{T2RName}</Text>
                </View>
            </View>
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
        backgroundColor: '#004AAD',
    },
    titleText: {
        marginTop: -20,
        marginBottom: 20,
        fontSize: 30,
        color: 'white',
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
    },
    serveRow: {
        width: '60%',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: "center",
    },
});