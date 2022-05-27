import { React, useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function BroadcastMatchForm() {

    // const [ matchForm, setMatchForm ] = useState({
    //     T1Name: '',
    //     T1LName: '',
    //     T1RName: '',
    //     T2Name: '',
    //     T2RName: '',
    //     T2LName: '',
    // });

    const navigation = useNavigation();


    const [T1Name, setT1Name] = useState("");
    const [T1LName, setT1LName] = useState("");
    const [T1RName, setT1RName] = useState("");
    const [T2Name, setT2Name] = useState("");
    const [T2LName, setT2LName] = useState("");
    const [T2RName, setT2RName] = useState("");

    
    //TEAM NAME CREATOR FUNCTION
    const teamName = (player1, player2) => {
        player1 = player1.slice(0, 3);
        player2 = player2.slice(0, 3);
        console.log(player1.toUpperCase()+'/'+player2.toUpperCase());
    }

    //DATABASE FUNCTIONS
    const newMatch = () => {
        console.log(T1Name, T1LName, T2Name, T2LName, T2RName);

        try {
            firestore().collection('match').doc("josepBonico").set({
                T1Name: T1Name,
                T1LName: T1LName,
                T1RName: T1RName,
                T2Name: T2Name,
                T2LName: T2LName,
                T2RName: T2RName,
            })
        } catch (e) {
            console.log(e);
        } finally {
            setT1Name('');
            setT1LName('');
            setT1RName('');
            setT2Name('');
            setT2LName('');
            setT2RName('');

            navigation.navigate('BroadcastMatch');
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
                    placeholder="Team 1 name"
                    placeholderTextColor={'#DFFF4F'}
                    color='#fff'
                    value={T1Name}
                    onChangeText={setT1Name} />
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
                    placeholder="Team 2 name"
                    placeholderTextColor={'#DFFF4F'}
                    color='#fff'
                    value={T2Name}
                    onChangeText={setT2Name} />
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
                onPress={() => newMatch()}>
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