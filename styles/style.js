import { StyleSheet } from 'react-native';

export const glogalStyle = StyleSheet.create({
    main:{
        flex:1,
        paddingTop:10,
    },
    title:{
        fontSize:20,
        color:'#333',
        fontFamily:'lt-light',
        textAlign:'center',
        paddingBottom:5,
    },
    newsBlock:{
        paddingTop:20,
        alignItems:'center',
        shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 12,
},
shadowOpacity:  0.24,
shadowRadius: 13.84,
elevation: 17
    }
});