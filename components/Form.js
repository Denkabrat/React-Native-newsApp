import React, { useState } from 'react';
import { StyleSheet,View,Text,Image,Button,TextInput} from 'react-native';
import { glogalStyle } from '../styles/style';
import {Formik} from 'formik';


export default function Form({addArt}) {

    return (
      <View>
            <Formik initialValues={{name:'',anons:'',full:'',img:''}} onSubmit={(value,action)=> {addArt(value); action.resetForm}}>
                {(props)=> (
                    <View>
                        <TextInput style={styles.form} value={props.values.name} placeholder='Введите название' onChangeText={props.handleChange('name')} />
                        <TextInput style={styles.form} multiline value={props.values.header} placeholder='Введите анонс' onChangeText={props.handleChange('header')} />
                        {/* <TextInput multiline value={props.values.full} placeholder='Напишите статью' onChangeText={props.handleChange('full')} /> */}
                        <TextInput style={styles.form} value={props.values.img} placeholder='Добавьте фото' onChangeText={props.handleChange('img')} />

                        <Button title='Опубликовать' onPress={props.handleSubmit}/>
                    </View>
                )}
            </Formik>
      </View>
    );
}

const styles = StyleSheet.create({
    form:{
        textAlign:'center',
        fontSize:20,
        borderBottomWidth:1,
    }
})
  




