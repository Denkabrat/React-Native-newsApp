import uuid from 'react-native-uuid';
import React,{useState,useEffect} from 'react';
import {View,Text,TouchableOpacity,FlatList,Image,StyleSheet,Modal} from 'react-native';
import { glogalStyle } from '../styles/style';
import { AntDesign } from '@expo/vector-icons';
import Form from './Form';
import { useHttp } from './http.hook';


export default function Main({navigation}) {

    const [news,setNews] = useState()

    const {request} = useHttp();

    const [modalWin,setModalWin] = useState(false);

    useEffect(()=> {
        request('https://64357339537112453fd6bcac.mockapi.io/News')
        .then(data => {setNews(data)})
        .catch(err=> console.log(err))
    },[])


    const addArt = (art) => {
        art.key = uuid.v4();
        setNews((list)=> {
            return [
                art,
                ...list,
            ]
        })
        setModalWin(false);
    }

    return (
      <View style={glogalStyle.main}>
        <Modal visible={modalWin}>
                <View style={glogalStyle.main}>
                   <AntDesign style={styles.Close} name="closecircleo" size={40} color="red" onPress={()=> setModalWin(false)} />
                    <Text style={glogalStyle.title}>Добавить статью</Text>
                    <Form addArt={addArt}/>
                </View>
        </Modal>
            <AntDesign style={styles.Add} name="pluscircleo" size={40} color="green" onPress={()=> setModalWin(true)} />
        <FlatList data={news} renderItem={({item}) => (
            <TouchableOpacity style={glogalStyle.newsBlock} onPress={()=> navigation.navigate('FullInfo',item)}>
                <Text style={glogalStyle.title}>{item.name}</Text>
                <Image style={styles.img} source={{uri:item.img}}/>             
            </TouchableOpacity>
        )}/>
      </View>
    );
}

const styles = StyleSheet.create({
    img:{
        width:'90%',                    
        height:200,  
    },
    Add:{
        textAlign:'center',
        paddingBottom:10,
    },
    Close:{
        textAlign:'center',
        marginTop:40,
        marginBottom:20,
    }
})




