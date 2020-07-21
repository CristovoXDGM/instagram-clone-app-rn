import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler';
import Lista from './src/Lista/Lista';

export default function App() {

  const dadosFeed = [
    {
      id: "1",
      nome: 'Fulano1',
      descricao: "dadsasdasdasdasdads",
      imgPerfil: "https://cdn.pixabay.com/photo/2016/02/11/16/59/dog-1194083_1280.jpg",
      imgPublicacao: "https://cdn.pixabay.com/photo/2020/07/03/16/51/sunrise-5367028_960_720.jpg",
      likeada: false,
      likes: 0,
    },
    {
      id: "2",
      nome: 'Fulano2',
      descricao: "dadsasdasdasdasdads",
      imgPerfil: "https://cdn.pixabay.com/photo/2020/05/17/20/21/cat-5183427_1280.jpg",
      imgPublicacao: "https://cdn.pixabay.com/photo/2020/07/01/23/50/thistle-5361303_960_720.jpg",
      likeada: true,
      likes: 3,
    },
    {
      id: "3",
      nome: 'Fulano3',
      descricao: "dadsasdasdasdasdads",
      imgPerfil: "https://instagram.fmcz2-1.fna.fbcdn.net/v/t51.2885-19/s320x320/93778469_258340748631177_7641140285832953856_n.jpg?_nc_ht=instagram.fmcz2-1.fna.fbcdn.net&_nc_ohc=z7uEinLj6KwAX80jVBh&oh=9a469e1892af2b733587a6760e71c5b8&oe=5F419438",
      imgPublicacao: "https://cdn.pixabay.com/photo/2020/07/03/16/51/mountains-5367026_960_720.jpg",
      likeada: false,
      likes: 0,
    },

  ];

  const [feed, setFeed] = useState(dadosFeed);


  return (
    <View style={styles.container}>
      <View style={styles.header} >
        <TouchableOpacity>
          <Image source={require("./src/logo.png")} style={styles.logo} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image source={require("./src/send.png")} style={styles.send} />
        </TouchableOpacity>
      </View>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={feed}
        keyExtractor={(key) => key.id}
        renderItem={(item) => <Lista dataItem={item} />}
      />

    </View>
  );
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',

  },
  logo: {

  },
  send: {
    width: 23,
    height: 23
  },
  header: {
    height: 55,
    backgroundColor: "#fff",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
    shadowColor: "#000",
    borderBottomWidth: 0.2,
    elevation: 4
  }
});
