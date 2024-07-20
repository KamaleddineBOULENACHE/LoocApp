
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,Dimensions} from 'react-native';

import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('window');

const SettingsScreen= () => {
 

  return (
    <View style={styles.container}>
      
       
        
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
    fontFamily:'SpaceGrotesk_300SemiBold',
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
 
  
});

export default SettingsScreen;
