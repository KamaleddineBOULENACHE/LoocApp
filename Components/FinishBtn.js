import { StyleSheet, Text, Touchable, View, TouchableOpacity  } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import { useNavigation } from '@react-navigation/native';


const FinishBtn= () => {
    navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('Home')}>

            <Text style={{marginLeft:10, fontSize:20,fontFamily:'SpaceGrotesk_500Medium'}}>Finish</Text>
            <View style={{backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:100,width:30,height:30}}><AntDesign name="arrowright" size={20} color="white" /></View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        width:120 ,
        height:50,
        paddingHorizontal:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'space-between',
        borderRadius:20,
        position:'absolute',
        bottom:30,
        right:25
    
    }



})
export default FinishBtn;