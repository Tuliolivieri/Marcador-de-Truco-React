import React, {useState} from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

import {MaterialIcons} from '@expo/vector-icons';

function Marcador({navigation}){

    const [pontA, setPontA] = useState(0);
    const [pontB, setPontB] = useState(0);
    const [quedasA, setQuedasA] = useState(0);
    const [quedasB, setQuedasB] = useState(0);

    const time1 = navigation.getParam('time1');
    const time2 = navigation.getParam('time2');

    return(
        <View style={styles.container}>
            <Text style={styles.titulos}>Quedas</Text>
            <View style={styles.quedas}>
                <View style={styles.times}>
                    <Text style={styles.nomeEquipes}>{time1}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-less'
                            size={60}
                            color='#D7F205'
                            onPress={() => {setQuedasA(quedasA + 1)}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.valorPontos}>{quedasA}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-more'
                            size={60} color='#D7F205'
                            onPress={() => {quedasA>0?setQuedasA(quedasA - 1):null}}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.times}>
                    <Text style={styles.nomeEquipes}>{time2}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-less'
                            size={60}
                            color='#D7F205'
                            onPress={() => {setQuedasB(quedasB + 1)}}
                        />
                    </TouchableOpacity>
                    <Text style={styles.valorPontos}>{quedasB}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-more'
                            size={60} color='#D7F205'
                            onPress={() => {quedasB>0?setQuedasB(quedasB - 1):null}}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <Text style={styles.titulos}>Pontos</Text>
            <View style={styles.pontos}>
                <View style={styles.times}>
                    <Text style={styles.nomeEquipes}>{time1}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-less'
                            size={60}
                            color='#D7F205'
                            onPress={() => { pontA < 12 ? setPontA(pontA + 1) : null }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.valorPontos}>{pontA}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-more'
                            size={60} color='#D7F205'
                            onPress={() => { pontA > 0 ? setPontA(pontA - 1) : null }}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.times}>
                    <Text style={styles.nomeEquipes}>{time2}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-less'
                            size={60}
                            color='#D7F205'
                            onPress={() => { pontB < 12 ? setPontB(pontB + 1) : null }}
                        />
                    </TouchableOpacity>
                    <Text style={styles.valorPontos}>{pontB}</Text>
                    <TouchableOpacity>
                        <MaterialIcons
                            name='expand-more'
                            size={60}
                            color='#D7F205'
                            onPress={() => { pontB > 0 ? setPontB(pontB - 1) : null }}
                        />
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity 
                style={styles.btZerar} 
                onPress={()=>{
                            setPontA(0);
                            setPontB(0);
                }}
            >
                <Text style={styles.btZerarText}>Zerar</Text>
            </TouchableOpacity>
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
        marginLeft: 40,
        marginRight: 40,
        marginTop: 20,
        marginBottom: 10,
    },
    quedas: {
        flexDirection: 'row',
    },
    pontos: {
        flexDirection: 'row',
    },
    titulos: {
        fontSize: 24,
        color: '#D7F205',
    },
    nomeEquipes: {
        fontSize: 20,
        color: '#D7F205',
    },
    valorPontos: {
        fontSize: 40,
        color: '#D7F205',
    },
    btZerar: {
        backgroundColor: '#5207F2',
        width: 200,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: '#320555',
        borderWidth: 1,
        borderRadius: 5,
    },
    btZerarText: {
        fontSize: 20,
        color: '#D7F205',
    },
});

export default Marcador;