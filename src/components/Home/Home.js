import { React, useState } from 'react';
import { View, StyleSheet, Text, TextInput } from 'react-native';
import { Button } from 'react-native-paper';
import { useNavigation } from '@react-navigation/native';

export default function Home() {
    const navigation = useNavigation();
    const [matchCode, setMatchCode] = useState('');
    return (
        <View style={styles.container}>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>NetScore</Text>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>{'SHOW MATCH'}</Text>
                <View>
                    <TextInput
                        style={styles.input}
                        placeholder='ENTER MATCH CODE'
                        placeholderTextColor='#fff'
                        value={matchCode}
                        onChangeText={setMatchCode}
                        textAlign='center'
                        color='#fff'
                    />
                    <Button
                    style={styles.button}
                        mode="outlined"
                        onPress={() => navigation.navigate('ShowMatch')}
                    >
                        Start viewing!
                    </Button>
                </View>
            </View>
            <View style={styles.sectionContainer}>
                <Text style={styles.sectionText}>START MATCH</Text>
                <View>
                    <Button 
                        mode="outlined"
                        color='#DFFF4F'
                        onPress={() => console.log('hola')}
                        >
                        On-line match
                    </Button>
                    <Button
                        style={styles.button}
                        mode="outlined"
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
        backgroundColor: '#004AAD',
    },
    titleContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    titleText: {
        fontSize: 50,
        color: 'white',
    },
    sectionText: {
        fontSize: 20,
        textAlign: 'center',
        color: '#ffffff',
        borderWidth: 2,
    },
    input: {
        width: 200,
        margin: 10,
        borderColor: '#DFFF4F',
        borderWidth: 0.5,
        borderRadius: 16,
        padding: 10,
    },
    sectionContainer: {
        flex: 2,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 2,
    },
    button: {
        color: '#DFFF4F',
    },
});