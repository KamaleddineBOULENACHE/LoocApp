import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,Dimensions} from 'react-native';
import PairingIllustration from './assets/PairingIllustration.png'
import { Entypo,AntDesign } from '@expo/vector-icons';

import NextBtn from '../../Components/NextBtn';
import BackBtn from '../../Components/Back';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
  
const { width, height } = Dimensions.get('window');

const PairingScreen= ({ navigation }) => {
 

  return (
    <View style={styles.container}>
      
        <View>
          <View style={styles.TopTextContainer}>
            <Text style={{fontSize:hp(3),color:'white',fontFamily:'SpaceGrotesk_600SemiBold'}}>Connect To Device</Text>
            <Text style={{fontSize:20 ,color:'white',fontFamily:'SpaceGrotesk_300Light'}} >Enter pairing mode </Text>
          </View>
          <View style={styles.PairingIllustrationContainer}>
            <Image source={PairingIllustration}/>
          </View>
          <View style={styles.BottomTextContainer}>
            <View style={{display:'flex',flexDirection:'row',marginBottom:hp(2)}}>
            <Entypo name="dot-single" size={24} color="white" />
            <Text style={styles.BottomText}>Press and hold the red button for 5sec to enter pairing mode</Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginBottom:hp(2)}}>
            <Entypo name="dot-single" size={24} color="white" />
            <Text style={styles.BottomText}>Pairing mode will make the device's network visible for connction </Text>
            </View>
            <View style={{display:'flex',flexDirection:'row',marginBottom:hp(2)}}>
            <Entypo name="dot-single" size={24} color="white" />
            <Text style={styles.BottomText}>connect to looc ssid to continue </Text>
            </View>
            <View style={{display:'flex',flexDirection:'row'}}>
            <Entypo name="dot-single" size={24} color="white" />
            <Text style={styles.BottomText}>Note that the connection will remain open for 10 min  </Text>
            </View>
          </View>
          



        </View>
        
        <TouchableOpacity style={styles.NextBtncontainer} onPress={()=>{navigation.navigate('Credentials')}}>

          <Text style={{marginLeft:10, fontSize:wp(4),fontFamily:'SpaceGrotesk_500Medium'}}>Next</Text>
          <View style={{backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:100,width:wp(6),height:wp(6)}}><AntDesign name="arrowright" size={wp(4)} color="white" /></View>

        </TouchableOpacity>
    

        
          
        
        
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121418',
    
    width:'100%'
  },
  logoContainer: {
    
    
  },
  
  TopTextContainer:{
    height:hp(10),
    marginLeft:wp(5)

    
    
  },
  BottomTextContainer:{
    display:'flex',
    width:'85%',
    marginBottom:50,
    marginLeft:wp(5),
    marginTop:hp(3)
    
  },
  BottomText:{
    fontSize:hp(2),
    color:'white',
    fontFamily:'SpaceGrotesk_300Light',
    letterSpacing:0.5
    
  },
  
  PairingIllustrationContainer:{
    display:'flex',
    alignItems:'center',
    marginBottom:hp(3)
  },
  BottomContainer:{
    display:'flex',

    
  },
  NextBtncontainer:{
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

 
  
});

export default PairingScreen;
