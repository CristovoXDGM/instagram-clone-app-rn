import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// import { Container } from './styles';

const Lista = ({ dataItem }) => {

    const [feed, setFeed] = useState(dataItem);

    const mostralikes = (likes) => {

        if (feed.item.likes <= 0) {
            return;
        }

        return (
            <Text style={styles
                .likes}>
                {feed.item.likes} {feed.item.likes > 1 ? 'curtidas' : 'curtida'}
            </Text>
        );

    }
    const like = () => {
        let feedTemp = feed.item;
        console.log(feedTemp.nome);

        if (feedTemp.likeada == true) {
            setFeed({
                item: {
                    ...feedTemp,
                    likeada: false, likes: feed.item.likes - 1,

                }
            });
            console.log(feed);
        } else {
            setFeed({
                item: {
                    ...feedTemp,
                    likeada: true, likes: feed.item.likes + 1

                }
            });
            console.log(feed);
        }

    }
    const carregaIcone = (likeada) => {
        return likeada ? require("../../src/likeada.png") : require("../../src/like.png")
    }

    useEffect(() => {

    }, [like]);

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
                <TouchableOpacity onPress={like} >
                    <Image

                        source={carregaIcone(feed.item.likeada)}
                        style={styles.iconLike}
                    />
                </TouchableOpacity>
                <TouchableOpacity style={styles.buttonSend}>
                    <Image
                        source={
                            require("../../src/send.png")
                        }
                        style={styles.iconLike}
                    />
                </TouchableOpacity>
            </View>

            {mostralikes(feed.item.likes)}

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
    likes: {
        fontWeight: "bold",
        marginLeft: 5
    },
    descricao: { paddingLeft: 5, fontSize: 16, color: "#000" },
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