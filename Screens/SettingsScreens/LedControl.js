
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,Dimensions} from 'react-native';
import { MaterialCommunityIcons,Entypo,FontAwesome } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

const { width, height } = Dimensions.get('window');

const PairingPassword= () => {
 

  return (
    <View style={styles.container}>
      <View style={styles.TopLabel}>
        <Text style={styles.TopText}>Settings</Text>
      </View>
    
        
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
  TopLabel:{
    width:'100%',
    height:'10%',
    backgroundColor:'#191B1F',
    position:'absolute',
    top:0,
    paddingLeft:wp(4),
    
    
  },
  TopText:{
    color:'white',
    fontSize:hp(3.2),
    fontFamily:'SpaceGrotesk_700Bold',
    marginTop:'2%'

  },
  SettingsContainer:{
    marginTop:'30%',
   
  },
  SettingCategoryContainer:{

  },
  SettingLabel:{
    fontSize:hp(2.5),
    color:'rgba(255,255,255,0.6)',
    fontFamily:'SpaceGrotesk_600SemiBold',
    marginBottom:hp(5),
    marginTop:hp(3),
    marginLeft:'5%'

  },
  Setting:{
    display:'flex',
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    borderBottomWidth:0.3,
    borderColor:'rgba(255,255,255,0.6)',
    paddingBottom:hp(2),
    marginBottom:hp(4),
    marginLeft:'5%'

    


  },
  SettingTitle:{
    color:'white',
    fontSize:hp(2.3),
    marginLeft:wp(4),
    fontFamily:'SpaceGrotesk_500Medium'
  },
  
  
 
 
  
});

export default PairingPassword;
