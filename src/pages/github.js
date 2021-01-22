import React from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function Github(){

    function buscar(){
        console.log('Chamou o botão buscar!');
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
            />
            <TouchableOpacity
                style={style.botao}
                onPress={buscar}
            >
                <Text style={style.txtbotao}>Buscar</Text>
            </TouchableOpacity>
            <Image
            style={style.imagem} 
                source={require('../assets/Octocat.png')}
            />
            <Text style={style.txtInfo}>ID: </Text>
            <Text style={style.txtInfo}>LOGIN: </Text>
            
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