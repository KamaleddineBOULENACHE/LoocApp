
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity ,Dimensions} from 'react-native';
import { MaterialCommunityIcons,Entypo,FontAwesome } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const SettingsScreen= () => {
  navigation=useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.TopLabel}>
        <Text style={styles.TopText}>Settings</Text>
      </View>
    <View style={styles.SettingsContainer}>
   
      <View style={styles.SettingCategoryContainer}>
        <Text style={styles.SettingLabel}>APPEARENCE</Text>
        
        <View style={styles.Setting}>
          <TouchableOpacity style={styles.settingsPressable} onPress={()=>{navigation.navigate('WifiPassword')}}>
         <MaterialCommunityIcons name="lightbulb-on-outline" size={hp(3.5)} color="white" />          
          <Text style={styles.SettingTitle}>Led Control</Text>
          <Entypo style={{marginStart:'auto'}}name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.SettingCategoryContainer}>
        <Text style={styles.SettingLabel}>SECURITY</Text>
        <View style={styles.Setting}>
        <TouchableOpacity style={styles.settingsPressable} onPress={()=>{navigation.navigate('PairingPassword')}}>
         <MaterialCommunityIcons name="lock-outline" style={{marginHorizontal:wp(2)}} size={hp(3)} color="white" /> 
          <Text style={styles.SettingTitle}>Pairing Password</Text>
          <Entypo style={{marginStart:'auto'}}name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View style={styles.Setting}>
        <TouchableOpacity style={styles.settingsPressable} onPress={()=>{navigation.navigate('WifiPassword')}}>
          < MaterialCommunityIcons name="lock-outline" style={{marginHorizontal:wp(2)}} size={hp(3)} color="white" />  
          <Text style={styles.SettingTitle}>Wifi Password</Text>
          <Entypo style={{marginStart:'auto'}}name="chevron-right" size={24} color="white" />
          </TouchableOpacity>
        </View>
      </View>
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
    marginTop:hp(15),
   
  },
  SettingCategoryContainer:{

  },
  SettingLabel:{
    fontSize:hp(2.2),
    color:'rgba(255,255,255,0.6)',
    fontFamily:'SpaceGrotesk_600SemiBold',
    marginBottom:hp(3),
    marginLeft:'5%'

  },
  Setting:{
    display:'flex',
    flexDirection:'row',
    width:'90%',
    alignItems:'center',
    borderBottomWidth:0.18,
    borderColor:'rgba(255,255,255,0.6)',
    paddingBottom:hp(1),
    marginBottom:hp(4),
    marginLeft:'5%'

    


  },
  settingsPressable:{
    display:'flex',
    flexDirection:'row',
    width:'100%',
    alignItems:'center',
   


  },
  SettingTitle:{
    color:'white',
    fontSize:hp(2),
    marginLeft:wp(2),
    fontFamily:'SpaceGrotesk_500Medium'
  },
  
  
 
 
  
});

export default SettingsScreen;
