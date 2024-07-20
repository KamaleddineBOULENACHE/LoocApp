import { StyleSheet, Text, Touchable, View, TouchableOpacity, Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');



const NextBtn= (props) => {
  navigation=useNavigation()
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{naviagtion.navigate(props.Screen)}}>

            <Text style={{marginLeft:10, fontSize:wp(4),fontFamily:'SpaceGrotesk_500Medium'}}>Next</Text>
            <View style={{backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:100,width:wp(6),height:wp(6)}}><AntDesign name="arrowright" size={wp(4)} color="white" /></View>

    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    container:{
        display:'flex',
        flexDirection:'row',
        width:wp(25 ) ,
        height:hp(5),
        paddingHorizontal:10,
        backgroundColor:'white',
        alignItems:'center',
        justifyContent:'center',
        gap:wp(2),
        borderRadius:15,
        position:'absolute',
        bottom:30,
        right:25
    
    }



})
export default NextBtn;