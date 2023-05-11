import React, { useState } from 'react';
import { StyleSheet} from 'react-native';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font';
import MainStack from './navigate';

const fonts = () => Font.loadAsync({
  'lt-light':require('./assets/fonts/Lato-Light.ttf'),
  'lt-regular':require('./assets/fonts/Lato-Regular.ttf')
})


export default function App() {

  const [font,setFont] = useState(false);

  if(font){
    return (
      <MainStack/>
    );
  }else{
    return (
      <AppLoading  
        startAsync={fonts} 
        onFinish={()=> setFont(true)} 
        onError={(error)=> console.warn(error)} />
    );
  }  
}




const styles = StyleSheet.create({
  
});
