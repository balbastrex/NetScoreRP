import { React, useState, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import firestore from '@react-native-firebase/firestore';

export default function Counter(props) {
    const [set1, setSet1] = useState(0);
    const [points, setPoints] = useState(0);
    const [control, setControl] = useState(0);
    const [doc, setDoc] = useState('');
    const dbPoints = props.points;
    const documentId = props.documentId;


    //DATABASE FUNCTIONS
    const updatePoints = () => {
        if (dbPoints === 'T1Points') {
            try {
                firestore().collection('match').doc(documentId).update({ T1Points: points });
            } catch (e) {
                console.log(e);
            }
        } else if (dbPoints === 'T2Points') {
            try {
                firestore().collection('match').doc(documentId).update({ T2Points: points });
            } catch (e) {
                console.log(e);
            }
        }

    }

    const updateSets = () => {
        try {
            firestore().collection('match').doc(documentId).get()
                .then(snapshot => setDoc(snapshot.data()))
        } catch (e) {
            console.log(e);
        }
    }

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

        if (doc.T1Points === doc.T2Points && doc.T1Points === rule[40]) {
            firestore().collection('match').doc(documentId).update({ T1Points: 0 });
            firestore().collection('match').doc(documentId).update({ T2Points: 0 });
            firestore().collection('match').doc(documentId).update({ T1Set1: set1 });
        }
    };

    const controlLess = () => {

        if (control > 0) {
            setControl(control - 1);
            setPoints(rule[control - 1]);
            console.log(control);
        }
    };

    useEffect(() => {
        updatePoints();
        updateSets();
    })


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
                    <Text style={styles.buttonsText}>{set1}</Text>
                </View>
                <View>
                    <Text style={styles.buttonsText}>{set1}</Text>
                </View>
                {/* <View>
                <Text style={styles.buttonsText}>{points}</Text>
            </View> */}
                <View>
                    {/* <TouchableOpacity 
                style={styles.buttons} 
                onChangeText = {(points) => { setpoints(points) this.props.onChangeValue(value) }} 
                    onPress={() =>controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity> */}
                    <TouchableOpacity style={styles.buttons} onPress={() => controlMore()}><Text style={styles.buttonsText}>+</Text></TouchableOpacity>
                    <Text style={styles.buttonsText}>{points}</Text>
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
        marginVertical: 0,
        marginHorizontal: 0,
        paddingVertical: 0,
        paddingHorizontal: 5,
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