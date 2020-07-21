import React, { useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Lista = ({ dataItem }) => {

    const [feed, setFeed] = useState(dataItem)
    return (
        <View style={styles.areaFeed}>

            <View style={styles.viewPerfil}>

                <Image source={{
                    uri: feed.item.imgPerfil
                }}
                    style={styles.fotoPerfil}
                />

                <Text style={styles.nomeUsuario}>{feed.item.nome}</Text>
            </View>

            <Image style={styles.fotoPublicacao}
                resizeMode="cover"
                source={{
                    uri: feed.item.imgPublicacao
                }}
            />
            <View style={styles.areaButtons} >
                <TouchableOpacity>
                    <Image
                        source={require("../../src/like.png")}
                        style={styles.iconLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSend}>
                    <Image
                        source={require("../../src/send.png")}
                        style={styles.iconLike}
                    />
                </TouchableOpacity>
            </View>

            <View style={styles.viewRodape}  >
                <Text style={styles.nomeRodape}>{feed.item.nome}</Text>
                <Text style={styles.descricao} >
                    {feed.item.descricao}
                </Text>
            </View>


        </View>
    );
}

export default Lista;

const styles = StyleSheet.create({
    descricao: { paddingLeft: 5, fontSize: 15, color: "#000" },
    viewRodape: {

        flexDirection: "row",
        alignItems: "center"
    },
    nomeRodape: {
        fontSize: 18,
        fontWeight: "bold",
        paddingLeft: 5,
        color: '#000'
    },
    areaButtons: {
        flexDirection: "row",
        padding: 5
    },
    areaFeed: {

    },
    nomeUsuario: {
        fontSize: 22,
        textAlign: "left",
        color: "#000"
    },
    fotoPerfil: {
        height: 50,
        width: 50,
        borderRadius: 25,
        margin: 5
    },
    fotoPublicacao: {
        flex: 1,
        height: 400,
        alignItems: "center"
    },
    viewPerfil: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        padding: 8
    },
    iconLike: {
        height: 33,
        width: 33
    },
    buttonSend: {
        paddingLeft: 5
    }
});