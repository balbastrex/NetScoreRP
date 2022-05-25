import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity} from "react-native";

export default function Counter() {
    const [set1, setSet1] = useState(0);
    const [points, setPoints] = useState(0);
    const [control, setControl] = useState(0);
    
    // let pointsTop= 0;
    //let control = 0;

    const rule = ['0','15','30','40'];
    const sets = ['0','1','2','3','4','5','6','7'];

    const controlMore = () => {

        if (control < 3) {
            setControl(control + 1);
            setPoints(rule[control + 1]);
            console.log(control);
        }
        if (points === rule[3]) {
            setControl(0);
            setPoints('0');
            setSet1(set1 + 1);
        }
    };

    const controlLess = () => {

        if (control > 0) {
            setControl(control - 1);
            setPoints(rule[control - 1]);
            console.log(control);
        }
    };


    return (

        <View style={styles.container}>
            <View>
                <Text style={styles.buttonsText}>TEAM NAME</Text>
            </View>
            <View>
                <Text style={styles.buttonsText}>{set1}</Text>
            </View>
            <View>
                <Text style={styles.buttonsText}>{points}</Text>
            </View>
            <View>
            {/* <TouchableOpacity 
                style={styles.buttons} 
                onChangeText = {(points) => { setpoints(points) this.props.onChangeValue(value) }} 
                    onPress={() =>controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity> */}
                <TouchableOpacity style={styles.buttons} onPress={() =>controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() =>controlLess()}><Text style={styles.buttonsText}>-</Text></TouchableOpacity>
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