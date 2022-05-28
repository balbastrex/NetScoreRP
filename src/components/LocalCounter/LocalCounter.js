import { React, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

export default function Counter(props) {

    //PROPS
    //const T1LName = props.T1LName;

    // SETS
    const [set1Top, setSet1Top] = useState('');
    const [set2Top, setSet2Top] = useState('');
    const [set3Top, setSet3Top] = useState('');
    const [set1Bottom, setSet1Bottom] = useState('');
    const [set2Bottom, setSet2Bottom] = useState('');
    const [set3Bottom, setSet3Bottom] = useState('');

    // POINTS
    const [pointsTop, setPointsTop] = useState('');
    const [pointsBottom, setPointsBottom] = useState('');


    const [set1, setSet1] = useState(0);
    const [points, setPoints] = useState(0);
    const [control, setControl] = useState(0);

    // let pointsTop= 0;
    //let control = 0;

    const rule = ['0', '15', '30', '40'];
    const sets = ['0', '1', '2', '3', '4', '5', '6', '7'];

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
            <View style={styles.counter}>
               <View>
                <Text style={styles.buttonsText}>{props.name}</Text>
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
                <TouchableOpacity style={styles.buttons} onPress={() => controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity>
                <TouchableOpacity style={styles.buttons} onPress={() => controlLess()}><Text style={styles.buttonsText}>-</Text></TouchableOpacity>
            </View> 
            </View>
            
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 2,
    },
    counter: {
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 10,
    },
    buttons: {
        marginVertical: 5,
        marginHorizontal: 20,
        paddingVertical: 5,
        paddingHorizontal: 20,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 0.5,
        borderColor: '#DFFF4F',
        borderRadius: 16,
    },
    buttonsText: {
        fontSize: 35,
        alignItems: 'center',
        justifyContent: 'center',
        color: '#DFFF4F',
        marginHorizontal: 5, 
    },
});