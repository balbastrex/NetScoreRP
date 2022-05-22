import { React, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home() {

    const [matchCode, setMatchCode] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>NetScore</Text>
            </View>
            <View>
                <View>
                    <Text>SHOW MATCH</Text>
                </View>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='MATCH CODE'
                        value={matchCode}
                        onChangeText={setMatchCode}
                    />
                </View>
            </View>
            <View style={styles.startMatchContainer}>
                <View>
                    <Text>START MATCH</Text>
                </View>
                <View>
                    <Button mode="contained"
                        onPress={() => console.log('hola')}>
                        On-line match
                    </Button>
                    <Button
                        style={styles.button}
                        mode="contained"
                        onPress={() => console.log('hola')}>
                        Local match
                    </Button>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    titleText: {
        fontSize: 30,
        color: 'white',
    },
    input: {
        width: 200,
        margin: 10,
        borderColor: '#DFFF4F',
        borderWidth: 0.5,
        borderRadius: 16,
        padding: 10,
    },
    startMatchContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lime',
    },
});