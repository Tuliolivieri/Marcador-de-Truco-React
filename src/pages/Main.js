import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

function Main({navigation}){

    const [time1, setTime1] = useState('Time 1');
    const [time2, setTime2] = useState('Time 2');

    return(
        <View style={styles.container}>
            <View style={styles.times}>
                <TextInput value={time1} style={styles.nomeTime} onChangeText={setTime1}/>
                <TextInput value={time2} style={styles.nomeTime} onChangeText={setTime2}/>
                <TouchableOpacity style={styles.botaoProximo} onPress={() => {
                    navigation.navigate('Marcador', { time1: time1, time2: time2 });
                }} >
                    <Text></Text>
                    <MaterialIcons name='done-all' size={40} color='#D7F205' style={styles.icone}/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#7D07F2',
        alignItems: 'center',
        justifyContent: 'center',
    },
    times: {
        alignItems: 'center',
        justifyContent: 'center',

        backgroundColor: '#5207F2',
        borderColor: '#320555',
        borderWidth: 1,
        borderRadius: 5,
        width: 300,
        height: 300,
    },
    nomeTime: {
        width: 150,
        borderBottomColor: '#7D07F2',
        borderBottomWidth: 1,
        fontSize: 16,
        color: '#D7F205',
        margin: 10,
    },
    botaoProximo: {
        margin: 20,
        backgroundColor: '#7D07F2',
        width: 150,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#5C05CC',
        borderWidth: 1,
        borderRadius: 5,
    },
    icone: {
        position: 'absolute',
        top: 0,
    }
});

export default Main;