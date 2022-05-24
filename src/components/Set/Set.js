import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { useState } from 'react/cjs/react.development';

export default function Set() {
    const [top, setTop] = useState('6');
    const [bot, setBot] = useState('4');
    return (
        <View style={styles.container}>
            <View style={styles.setTop}><Text style={styles.setText}>{top}</Text></View>
            <View style={styles.setBottom}><Text style={styles.setText}>{bot}</Text></View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
    },
  });