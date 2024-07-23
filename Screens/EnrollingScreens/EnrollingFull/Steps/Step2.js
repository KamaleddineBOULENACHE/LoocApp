import React,{useContext,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput } from 'react-native';
import PlacedFinger from './assets/PlacedFinger.png'
import RemovedFinger from './assets/RemovedFinger.png'
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

import { WebSocketContext } from '../../../../Controllers/WebSocketContextt';





const Step2= (props) => {
  const { connectionStatus, message, sendMessage } = useContext(WebSocketContext);

  useEffect(() => {
    if(message){
      props.progressFunction()
      
    }
    
    
      
    

    return () => {
      console.log('Unmounted')
     
      
   
      
    };
  }, [message]);

  const Illiustration=()=>{
    if (message==='Place'){
      return(
     
        <View style={styles.PlacedFingerImageContainer}>
          <Image style={{width:wp(20),height:hp(20)}} source={PlacedFinger}/>
        </View>
       
       )
    }
    else if (message ==='Remove'){
      return (
        
          <View style={styles.RemovedFingerImageContainer}>
                  <Image style={{width:hp(20),height:hp(20)}} source={RemovedFinger}/>
          </View>
          
    
      )

    
    }
   
  }


  return (
    <View style={styles.container}>

       
        
        <View style={{display:'flex', width:'90%',alignItems:'center',marginLeft:'5%'}} >

        <View style={{display:'flex', width:'100%'}}>
            <Text style={styles.Title}>
                Follow instructions Carefully !
            </Text>
        </View>
        <View style={styles.SensorContainer}>
            <View style={styles.Sensor}>
             </View>
             <Illiustration/>
         
        </View>
        <View>
            <Text style={styles.GuideText}>{message==='Place'? 'Place your finger on the sensor' : 'Remove your finger from the sensor'}</Text>
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
  inputTitle:{
    alignSelf:'flex-start',
    fontSize: 18,
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular'
  },
  Title:{
    marginTop:hp(10),
    marginBottom:hp(2),
    fontSize: 32,
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular',
    textAlign:'center'
  },
  SensorContainer:{
    width:hp(25),
    height:hp(35),
    display:'flex',
    borderRadius:20,
    borderWidth:2,
    borderColor:'white',
    alignItems:'center',
    marginTop:30,
  },
  Sensor:{
    width:hp(7),
    height:hp(7),
    borderRadius:50,
    borderWidth:5,
    borderColor:'#D9D9D9',
    marginTop:20
    
  },
  GuideText:{
    marginTop:20,
    fontSize:wp(5),
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular',

  },
  PlacedFingerImageContainer:{
    width:50,
    position:'absolute',
    top:40,
    right:hp(10)
  },
  RemovedFingerImageContainer:{
    width:hp(10),
    position:'absolute',
    top:50,
    right:hp(2)
  }
})
export default Step2;
