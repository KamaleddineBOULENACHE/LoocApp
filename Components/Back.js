

import { StyleSheet, Text, Touchable, View, TouchableOpacity ,Dimensions } from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import React from 'react'
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('window');


const BackBtn= ({navigation}) => {
    
  return (
    <TouchableOpacity style={styles.container} onPress={()=>{navigation.goBack()}}>

            <View style={styles.topContainer}>
                 <View style={{backgroundColor:'#2E3233',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:100,width:hp(3.5),height:hp(3.5)}}><AntDesign name="arrowleft" size={hp(2.5)} color="white" /></View>

            </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
    topContainer:{
        height:hp(10),
        
        paddingLeft:wp(5),
        paddingTop:hp(2),
        display:'flex',
        justifyContent:'center'
      
        
      },
    container:{
        
    
    }



})
export default BackBtn;