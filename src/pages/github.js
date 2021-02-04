import React from 'react';
import { useState } from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

import api from '../service/api';

export default function Github(){

    const [id, setID] = useState('');
    const [usuario, setUsuario] = useState('');
    const [login, setLogin] = useState('');
    const [avatar, setAvatar] = useState('');

    async function buscar() {
        // console.warn('Chamou o botão buscar!');
        // Promisse
        await api.get(usuario).then(resp =>{
            setID(resp.data.id);
            setLogin(resp.data.login);
            setAvatar(resp.data.avatar_url);
        }).catch((error) => console.warn(error));

    }

    return(
        <View style={style.container}>
            <Image
            style={style.imagem} 
                source={require('../assets/Octocat.png')}
            />
            <TextInput
            style={style.input}
                placeholder="Usuário"
                onChangeText={usuario => setUsuario(usuario)}
            />
            <TouchableOpacity
                style={style.botao}
                onPress={buscar}
            >
                <Text style={style.txtbotao}>Buscar</Text>
            </TouchableOpacity>
            <Image
            style={style.imagem} 
                source={{ uri: avatar }}
            />
            <Text style={style.txtInfo}>Id: {id}</Text>
            <Text style={style.txtInfo}>Login: {login}</Text>
            
        </View>
    );
}

const style = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"

    },
    imagem: {
        height: 200,
        width: 200,
        margin: 10,
    },
    input: {
        fontSize: 16,
        borderColor: "#a38",
        borderWidth: 2,
        width: 300,
        height: 40,
        borderRadius: 8,
        margin: 10,
    },
    botao: {
        backgroundColor: "#a38",
        width: 300,
        height: 40,
        borderRadius: 8,
        margin: 10,

    },
    txtbotao: {
        fontSize: 15,
        color: "#fff",
        textAlign: "center",
        fontWeight: "bold",
        padding: 10,
    },
    txtInfo: {
        fontSize: 16,
        color: "#a38",
        textAlign: "center",
        fontWeight: "bold"
    }

});