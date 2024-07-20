import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import FingerSuccces from './assets/FingerSuccces.png'
import FinishBtn from '../../../../Components/FinishBtn';

import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'


const Step3= () => {

  return (
    <View style={styles.container}>


       
        <View style={{display:'flex', width:'90%',alignItems:'center',marginLeft:'5%'}} >

        <View style={{display:'flex', width:'100%'}}>
            <Text style={styles.Title}>
                Ready To Use !
            </Text>
            <Text style={styles.SubTitle}>
                Fingerprint added successfully 
            </Text>
        </View>
        <View style={{marginTop:50}}> 
          <Image style={{width:hp(26.5),height:hp(32)}} source={FingerSuccces}/>
        </View>
        
       

        
        </View>
        <FinishBtn/>

        
          
          
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121418',
    
    width:'100%'
  },
  inputTitle:{
    alignSelf:'flex-start',
    fontSize: 18,
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular'
  },
  Title:{
    marginTop:hp(10),
    
    fontSize: 32,
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular',
    textAlign:'center'
  },
  SubTitle:{
    
    fontSize: 20,
    color:'grey',
    fontFamily:'SpaceGrotesk_400Regular',
    textAlign:'center'
  },
  
  
})
export default Step3;
