import { React, useState } from "react";
import { View, TextInput, Text, StyleSheet, Alert } from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function LocalMatchForm() {

    //NAVIGATION PARAMS
    const navigation = useNavigation();

    //TEAM DATA
    const [T1LName, setT1LName] = useState('');
    const [T1RName, setT1RName] = useState('');
    const [T2LName, setT2LName] = useState('');
    const [T2RName, setT2RName] = useState('');

    //TEAM NAME CREATOR FUNCTION
    const teamName = (player1, player2) => {
        player1 = player1.slice(0, 3);
        player2 = player2.slice(0, 3);

        const newName = player1.toUpperCase() + '/' + player2.toUpperCase();

        return newName;
    }

    //PARAMS CHECKER
    const checkValues = () => {

        if (!T1LName || !T1RName || !T2LName || !T2RName) {
            Alert.alert(
                "Empty fields",
                "Please fill in all the fields."
            );
        } else {
            const T1Name = teamName(T1LName, T1RName);
            const T2Name = teamName(T2LName, T2RName);

            navigation.navigate('LocalMatch', {
                T1Name: T1Name,
                T1LName: T1LName,
                T1RName: T1RName,
                T2Name: T2Name,
                T2LName: T2LName,
                T2RName: T2RName,
            });
        }
    }


    return (
        <View style={styles.container}>
            <View>
                <View style={styles.text}>
                    <Text style={styles.text}>TEAM 1</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Left player name"
                    placeholderTextColor={'#DFFF4F'}
                    color='#fff'
                    value={T1LName}
                    onChangeText={setT1LName} />
                <TextInput
                    style={styles.input}
                    placeholder="Drive player name"
                    placeholderTextColor={'#DFFF4F'}
                    color='#fff'
                    value={T1RName}
                    onChangeText={setT1RName} />
            </View>
            <View>
                <View style={styles.text}>
                    <Text style={styles.text}>TEAM 2</Text>
                </View>
                <TextInput
                    style={styles.input}
                    placeholder="Left player name"
                    placeholderTextColor={'#DFFF4F'}
                    color='#fff'
                    value={T2LName}
                    onChangeText={setT2LName} />
                <TextInput
                    style={styles.input}
                    placeholder="Drive player name"
                    placeholderTextColor={'#DFFF4F'}
                    color='#fff'
                    value={T2RName}
                    onChangeText={setT2RName} />
            </View>
            <Button
                mode="outlined"
                color='#DFFF4F'
                style={{ borderColor: '#DFFF4F', marginTop: 20, }}
                onPress={() => checkValues()}>
                START THE MATCH!
            </Button>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flex: 1,
        backgroundColor: '#004AAD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {


    },
    text: {
        marginBottom: 10,
        color: '#ffffff',
    },
    input: {
        width: 250,
        margin: 10,
        borderColor: '#DFFF4F',
        borderWidth: 0.5,
        borderRadius: 16,
        padding: 10,

    },
    button: {
        marginTop: 10,
        width: 500,
        borderRadius: 16,
    }
});