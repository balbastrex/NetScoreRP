import { React } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function GoBack() {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.goBack()}
            >
                <Text style={styles.text} onPress={() => navigation.goBack()}>Go Back</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        backgroundColor: '#ffffff',
    },
    button: {
        flexDirection: "row",
    },
    text: {

    },
});