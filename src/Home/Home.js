import React from 'react';
import { View, StyleSheet, Text, } from 'react-native';
import { Button } from 'react-native-paper';

export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>NetScore</Text>
            </View>
            <View style={styles.startMatchContainer}>
                <View>
                    <Text>Start match</Text>
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
    startMatchContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lime',
    },
});