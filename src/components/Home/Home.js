import { React, useState, useEffect } from 'react';
import { View, StyleSheet, Text, TextInput, ScrollView } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';
import firestore from '@react-native-firebase/firestore';

export default function Home() {

    //NAVIGATRION PARAMS
    const navigation = useNavigation();
    const [matchCode, setMatchCode] = useState('');

    //DATABASE FUNCTIONS (GET ACTIVE MATCHES)
    const [list, setList] = useState([]);
    //let list = ['1NCH69msj0cmKjnmgKrn', 'U1T4mna6JRSjT65x6Tbp', 'muiUKqjlFvBY3v44JvEC','1NCH69msj0cmKjnmgKrn', 'U1T4mna6JRSjT65x6Tbp', 'muiUKqjlFvBY3v44JvEC','1NCH69msj0cmKjnmgKrn', 'U1T4mna6JRSjT65x6Tbp', 'muiUKqjlFvBY3v44JvEC',];
    async function getMatches() {
        //setList([]);
        const matchesRef = firestore().collection('match');
        const snapshot = await matchesRef.get();
        snapshot.forEach(doc => {
            setList(list => [...list, doc.id])
            //list.push(doc.id);
            console.log(doc.id);
        });
    }


    useEffect(() => {
        getMatches();
    }, [])


    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>NetScore</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>{'SHOW MATCH'}</Text>
                {/* <View>
                    <TextInput
                        style={styles.input}
                        placeholder='ENTER MATCH CODE'
                        placeholderTextColor='#fff'
                        value={matchCode}
                        onChangeText={setMatchCode}
                        textAlign='center'
                        color='#fff'
                    /> */}
                    <ScrollView
                        contentContainerStyle={{
                            flexDirection: 'row',
                            flexWrap: 'wrap',
                            justifyContent: 'space-evenly',
                            showsVerticalScrollIndicator: true,
                        }}>
                        {list.map((item, index) => (
                            <View key={index + item + ''}>
                            <Button
                            color='#DFFF4F'
                            style={{ borderColor: '#DFFF4F' }}
                            onPress={() => navigation.navigate('ShowMatch', {item: item})}
                        >{item}</Button></View>
                        ))}
                    </ScrollView>
                    {/* <Button
                        mode="outlined"
                        color='#DFFF4F'
                        style={{ borderColor: '#DFFF4F' }}
                        onPress={() => navigation.navigate('ShowMatch')}
                    >
                        Start viewing!
                    </Button>
                </View> */}
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>START MATCH</Text>
                <View style={styles.sectionButtons}>
                    <Button
                        mode="outlined"
                        color='#DFFF4F'
                        style={{ borderColor: '#DFFF4F', margin: 10, marginTop: 15, }}
                        onPress={() => navigation.navigate('BroadcastMatchForm')}>
                        On-line match
                    </Button>
                    <Button
                        mode="outlined"
                        color='#DFFF4F'
                        style={{ borderColor: '#DFFF4F', margin: 10, marginTop: 15, }}
                        onPress={() => navigation.navigate('LocalMatchForm')}>
                        Local match
                    </Button>
                </View>
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#004AAD',
    },
    titleContainer: {
        flex: 1,
        marginBottom: 30,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 2,
    },
    titleText: {
        fontSize: 50,
        color: 'white',
    },
    sectionText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        //borderWidth: 2,
    },
    input: {
        width: 200,
        margin: 10,
        borderColor: '#DFFF4F',
        borderBottomWidth: 0.5,
        padding: 10,
    },
    sectionContainer: {
        flex: 5,
        alignItems: 'center',
        justifyContent: 'center',
        //borderWidth: 2,
    },
    sectionButtons: {
        flexDirection: 'row',
    },
});