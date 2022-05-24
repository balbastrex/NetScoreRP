import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter() {
    const [points, setPoints] = useState('0');
    const [control, setControl] = useState(0);

    // let pointsTop= 0;
    //let control = 0;

    const rule = ['0', '15', '30', '40'];

    const controlMore = () => {

        if (control < 3) {
            setControl(control + 1);

            pointsUpdate(control);

            // setPoints(rule[control + 1]);
            // console.log(control);
        }
    };

    const controlLess = () => {

        if (control > 0) {
            setControl(control - 1);

            pointsUpdate(control);

            // setPoints(rule[control - 1]);
            // console.log(control);
        }
    };

    const pointsUpdate = (control) => {
        setPoints(rule[control]);
        console.log(control);
    };


    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.buttonsText}>TEAM NAME</Text>
            </View>
            <View>
                <Text style={styles.buttonsText}>{points}</Text>
            </View>
            <View>
                {/* <TouchableOpacity 
                style={styles.buttons} 
                onChangeText = {(points) => { setpoints(points) this.props.onChangeValue(value) }} 
                    onPress={() =>controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.buttons} onPress={() => controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => controlLess()}><Text style={styles.buttonsText}>-</Text></TouchableOpacity>
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