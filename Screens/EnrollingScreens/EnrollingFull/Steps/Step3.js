import React,{useContext,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';

import FingerFailure from './assets/FingerFailure.png'
import FingerSuccces from './assets/FingerSuccces.png'

import FinishBtn from '../../../../Components/FinishBtn';
import { AntDesign } from '@expo/vector-icons';

import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import { WebSocketContext } from '../../../../Controllers/WebSocketContextt';
import NextBtn from '../../../../Components/NextBtn';
import { Ionicons } from '@expo/vector-icons';


const Step3= (props) => {

  const { connectionStatus, message, sendMessage,modifyMessage } = useContext(WebSocketContext);

  
  useEffect(() => {
     
    return () => {
      modifyMessage('')

    };
  }, [message]);
  const handleRetry = () => {
    props.progressFunction(0);
  };
  const Success=()=>{
    return(
       
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
      <Image style={{width:hp(25),height:hp(30)}} source={FingerSuccces}/>
    </View>
    
   

    
    </View>

  )

  }
  const RetryBtn=()=>{
    return(
    <TouchableOpacity style={styles.FinishBtncontainer} onPress={handleRetry}>

            <Text style={{marginLeft:10, fontSize:20,fontFamily:'SpaceGrotesk_500Medium'}}>Retry</Text>
            <View style={{backgroundColor:'black',display:'flex',alignItems:'center',justifyContent:'center',borderRadius:100,width:30,height:30}}><Ionicons name="refresh-outline" size={18} color="white" /></View>

    </TouchableOpacity>
    )

  }


  
  const Failure=()=>{
    return(
       
    <View style={{display:'flex', width:'90%',alignItems:'center',marginLeft:'5%'}} >

    <View style={{display:'flex', width:'100%'}}>
        <Text style={styles.Title}>
            An error occured !
        </Text>
        <Text style={styles.SubTitle}>
            Failed to enroll fingerprint
        </Text>
    </View>
    <View style={{marginTop:50}}> 
      <Image style={{width:hp(25),height:hp(30)}} source={FingerFailure}/>
    </View>

    
    
   

    
    </View>

  )

  


  }



if(props.EStatus === 1){

  return (
    <View style={styles.container}>
        <Success/>
        <FinishBtn/>
    </View>
  );
}
else{
  if(props.EStatus === 2){
  return (
    <View style={styles.container}>
        <Failure/>
        <RetryBtn/>
    </View>
  );

}}
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
  FinishBtncontainer:{
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
export default Step3;
