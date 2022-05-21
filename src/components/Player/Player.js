import { React } from "react";
import { View, StyleSheet, Text } from 'react-native';

export default function Player() {

    return (
        <View style={styles.container}>
            <Text style={styles.name}>Paco Jonarte</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    name: {

    },
});