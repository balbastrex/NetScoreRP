import { React, useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { RadioButton, Button } from "react-native-paper";
import { useNavigation, useRoute } from '@react-navigation/native';

import LocalCounter from "../LocalCounter/LocalCounter";

export default function LocalMatch() {


    //NAVIGATION PARAMS
    const navigation = useNavigation();
    const route = useRoute();

    //MATCH DATA
    const T1Name = route.params.T1Name;
    const T1LName = route.params.T1LName;
    const T1RName = route.params.T1RName;
    const T2Name = route.params.T2Name;
    const T2LName = route.params.T2LName;
    const T2RName = route.params.T2RName;



    //SERVE
    const [serve, setServe] = useState('');


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
                { text: "OK", onPress: () => navigation.navigate('Home') }
            ]
        );


    return (

        <View style={styles.container}>
            <View>
                <View>
                    <Text style={styles.sectionTitle}>Point management</Text>
                </View>
                <View>
                    <LocalCounter name={T1Name} />
                    <LocalCounter name={T2Name} />
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
                        onPress={() => setServe(T1LName)}
                    />
                    <Text>{T1LName}</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T1RName}
                        status={serve === T1RName ? 'checked' : 'unchecked'}
                        onPress={() => setServe(T1RName)}
                    />
                    <Text>{T1RName}</Text>
                </View>
            </View>
            <View style={styles.serve}>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T2LName}
                        status={serve === T2LName ? 'checked' : 'unchecked'}
                        onPress={() => setServe(T2LName)}
                    />
                    <Text>{T2LName}</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value={T2RName}
                        status={serve === T2RName ? 'checked' : 'unchecked'}
                        onPress={() => setServe(T2RName)}
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