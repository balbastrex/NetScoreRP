import { React, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import { RadioButton } from "react-native-paper";

export default function BroadcastMatch() {

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
            <View>
                <RadioButton
                    value="first"
                    status={serve === 'first' ? 'checked' : 'unchecked'}
                    onPress={() => setServe('first')}
                />
                <RadioButton
                    value="second"
                    status={serve === 'second' ? 'checked' : 'unchecked'}
                    onPress={() => setServe('second')}
                />
            </View>
            <Text>{{serve}}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});