import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Counter() {
    let pointsTop= 0;
    let controlTop = 0;

    const points = [0,15,30,40];

    const controlTopMore = (controlTop) => {

        if (controlTop < 4) {
            controlTop = controlTop + 1 ;
        }
        return controlTop;
    };

    const controlTopLess = (controlTop) => {

        if (controlTop < 4) {
            controlTop -- ;
        }
    };


    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.buttonsText}>TEAM NAME</Text>
            </View>
            <View>
                <Text style={styles.buttonsText}>{points[controlTop]}</Text>
            </View>
            <View>
                <TouchableOpacity style={styles.buttons} onPress={() =>controlTopMore(controlTop)}><Text style={styles.buttonsText}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() =>controlTopLess(controlTop)}><Text style={styles.buttonsText}>-</Text></TouchableOpacity>
            </View>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    buttons: {
        backgroundColor: 'green',
        marginVertical: 5,
        marginHorizontal: 30,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
    },
    buttonsText: {
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
    },
});