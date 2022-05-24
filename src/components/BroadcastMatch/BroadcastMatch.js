import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";
import { useNavigation } from '@react-navigation/native';

import Counter from "../Counter/Counter";
import GoBack from "../GoBack/GoBack";

export default function BroadcastMatch() {
    const navigation = useNavigation();

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


    return (

        <View style={styles.container}>
            <GoBack />
            <View>
                <View>
                    <Text style={styles.sectionTitle}>Point management</Text>
                </View>
                <View>
                    <Counter onChangeValue={(points) => { console.log(points) }}/>
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
                        onPress={() => setServe('T1L')}
                    />
                    <Text>Player Name</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T1R"
                        status={serve === 'T1R' ? 'checked' : 'unchecked'}
                        onPress={() => setServe('T1R')}
                    />
                    <Text>Player Name</Text>
                </View>
            </View>
            <View style={styles.serve}>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T2L"
                        status={serve === 'T2L' ? 'checked' : 'unchecked'}
                        onPress={() => setServe('T2L')}
                    />
                    <Text>Player Name</Text>
                </View>
                <View style={styles.serveRow}>
                    <RadioButton
                        value="T2R"
                        status={serve === 'T2R' ? 'checked' : 'unchecked'}
                        onPress={() => setServe('T2R')}
                    />
                    <Text>Player Name</Text>
                </View>
            </View>
            <Text>{serve}</Text>
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