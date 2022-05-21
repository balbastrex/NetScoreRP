import { React, useState } from "react";
import { View, Button, TextInput, Text, StyleSheet } from "react-native";

export default function BroadcastMatchForm() {
    const [T1Name, setT1Name] = useState("");
    const [T1LName, setT1LName] = useState("");
    const [T1RName, setT1RName] = useState("");
    const [T2Name, setT2Name] = useState("");
    const [T2LName, setT2LName] = useState("");
    const [T2RName, setT2RName] = useState("");

    return (
        <View style={styles.container}>
            <View>
            <View style={styles.text}>
                <Text>TEAM 1</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Team 1 name"
                value={T1Name}
                onChangeText={setT1Name} />
                <TextInput
                style={styles.input}
                placeholder="Left player name"
                value={T1LName}
                onChangeText={setT1LName} />
                <TextInput
                style={styles.input}
                placeholder="Drive player name"
                value={T1RName}
                onChangeText={setT1RName} />
            </View>
            <View>
            <View style={styles.text}>
                <Text>TEAM 2</Text>
            </View>
            <TextInput
                style={styles.input}
                placeholder="Team 2 name"
                value={T2Name}
                onChangeText={setT2Name} />
                <TextInput
                style={styles.input}
                placeholder="Left player name"
                value={T2LName}
                onChangeText={setT2LName} />
                <TextInput
                style={styles.input}
                placeholder="Drive player name"
                value={T2RName}
                onChangeText={setT2RName} />
            </View>
            <Button
                style={styles.button}
                // onPress={Validator}
                title="Next step"
                color="#DFFF4F"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 0.7,
        backgroundColor: 'rgba(255,255,255, 0.7)',
        alignItems: 'center',
        justifyContent: 'center',
        width: 300,
        margin: 5,
        borderRadius: 16,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 6,
},
shadowOpacity: 0.37,
shadowRadius: 7.49,

elevation: 12,
    },
    form: {


    },
    text: {
        marginBottom: 10,
    },
    input: {
        width:200,
        margin: 10,
        borderColor: '#DFFF4F',
        borderWidth: 0.5,
        borderRadius: 16,
        padding: 10,

    },
    flash: {
        paddingTop: 70,
    },
    button:{
        marginTop: 10,
        width: 500,
        borderRadius: 16,
    }
});