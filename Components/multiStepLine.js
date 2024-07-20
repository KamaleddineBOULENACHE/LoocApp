import { StyleSheet, Text, Touchable, View, TouchableOpacity  } from 'react-native'

import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

import React from 'react'


const MultiStepLine= (props) => {
    const step=props.currentStep
  return (
    <View style={styles.container}>
            <View style={styles.multiStepContainer}>
              
              <View style={[styles.multiStepCircleContainer,{left:33}]}>
                <View style={[styles.multiStepCircle,{backgroundColor:step > 0 ? 'white' :'#121418' }]}>

                </View>
                <Text style={styles.CircleText}>Enter Name</Text>
              </View>
              
              
              <View style={[styles.multiStepLine ,{backgroundColor:step > 0 ? 'white' :'grey' }]}></View>


              <View style={styles.multiStepCircleContainer}>
                <View style={[styles.multiStepCircle,{backgroundColor:step > 1 ? 'white' :'#121418',borderColor:step>=1  ? 'white' :'grey'  }]}></View>
                <Text style={styles.CircleText}>ScanFingerprint</Text>
              </View>

              <View style={[styles.multiStepLine ,{backgroundColor:step > 1 ? 'white' :'grey' }]}></View>



              <View style={[styles.multiStepCircleContainer,{right:55}]}>
                <View style={[styles.multiStepCircle,{backgroundColor:step >= 2 ? 'white' :'#121418',borderColor:step>=2  ? 'white' :'grey'   }]}></View>
                <Text style={styles.CircleText}>Finish</Text>
              </View>
            </View>
            
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        
    
    },
    multiStepContainer:{
      width:'100%',
      height:50,
      display:'flex',
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'center',
      marginTop:hp(2),
      zIndex:3
    },
    multiStepCircleContainer:{
      display:'flex',
      alignItems:'center',
      position:'absolute',
      top:14,
      
      
      
    },

    multiStepCircle:{
      width:23,
      height:23,
      borderRadius:50,
      borderWidth:2,
      borderColor:'white',
      marginBottom:10,
      zIndex:3

    },
    multiStepLine:{
      width:'30%',
      height:3,
      backgroundColor:'white',marginLeft:12,marginRight:12
    },
    CircleText:{
      color:'white',
      fontFamily:'SpaceGrotesk_500Medium'
    }

    
    




})
export default MultiStepLine;