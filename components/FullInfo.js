import React, { useState } from 'react';
import { StyleSheet,View,Text,Image} from 'react-native';
import { glogalStyle } from '../styles/style';



export default function FullInfo({route}) {




    return (
      <View style={styles.mainBlock}>
        <Text style={glogalStyle.title}>{route.params.name}</Text>
        <Image style={styles.img} source={{uri:route.params.img}}/>
        <Text style={glogalStyle.title}>{route.params.header}</Text>
      </View>
    );
}

const styles = StyleSheet.create({
 img:{
  width:'90%',                    
  height:200,
 },
 mainBlock:{
  alignItems:'center',
 }
})
  




