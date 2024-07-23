import React, { useState,useContext,useEffect } from 'react';
import { View, Text, StyleSheet, Image,SafeAreaView, TouchableOpacity, Dimensions } from 'react-native';
import menu from './assets/Menu.png';
import FingerConnected from './assets/FingerConnected.png';
import FingerDisConnected from './assets/FingerDisConnected.png';
import enroll from './assets/enroll.png';
import usersIcon from './assets/users.png';
import settingsIcon from './assets/settings.png';
import chev2 from './assets/chev2.png';
import { Entypo ,FontAwesome6} from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import 'react-native-gesture-handler';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated'; 
import {
  Gesture,
  GestureDetector,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import { WebSocketContext } from '../../Controllers/WebSocketContextt';
import WebSocketConnection from './../../Controllers/WebSocketConnection';

const { width, height } = Dimensions.get('window');

const HomeScreen = ({ navigation }) => {
  const pressed = useSharedValue(false);
  const offset = useSharedValue(0);
  
  const pan = Gesture.Pan()
    .onBegin(() => {
      pressed.value = true;
    })
    .onChange((event) => {
      offset.value = event.translationX < (height<800?100:125) ? event.translationX : (height<800?100:125);
      console.log(offset.value);
    })
    .onFinalize(() => {
      offset.value = 0;
      pressed.value = false;
    });

  const animatedStyles = useAnimatedStyle(() => ({
    transform: [
      { translateX: offset.value },
    ],
    backgroundColor: offset.value === (height<800?100:125) ? 'grey' : 'black',
  }));

  const cheanimatedStyles1 = useAnimatedStyle(() => ({
    color: offset.value > 50 ? 'grey' : 'black',
  }));

  const cheanimatedStyles2 = useAnimatedStyle(() => ({
    color: offset.value > 70 ? 'grey' : 'black',
  }));
  const { connectionStatus, message, sendMessage } = useContext(WebSocketContext);

  const ConnectionBtn=()=>{
    if(connectionStatus){
      return(
        <View style={styles.button}>
          <Text style={{marginRight:5}}><FontAwesome6  name="check" size={24} color="black" /></Text>
          <Text style={styles.buttonText}>Wifi Connected</Text>
          
        </View>
      )
    }
    else{
      return(
      <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Pairing')}}>
      <Text style={styles.buttonText}>Connect</Text>
      </TouchableOpacity>)

    }}
    

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.Topcontainer}>
        <Text style={styles.TopText1}>Good Morning!</Text>
        <TouchableOpacity><Image source={menu} /></TouchableOpacity>
      </View>
      <View>
      <Text style={styles.TopText2}>Welcome to the looc app</Text>
      
      <View style={styles.connectionContainer}>
          <ConnectionBtn/>
          <View style={styles.connectionBtContainer}>
          <Image style={{width:height<800?hp(18):hp(20),height:height<800?hp(18):hp(20)}} source={connectionStatus?FingerConnected:FingerDisConnected} />
          <View style={[styles.SwipeCon,{backgroundColor: connectionStatus ?'#2E3233':'rgba(10, 10, 10, 0.5)'}]}>
         
            <GestureHandlerRootView style={styles.gestureContainer}>
           
              <View style={styles.swipe }>
              
              <View style={[styles.DisconnectCover,{display:connectionStatus?'none':'inline'}] }/>
                <GestureDetector gesture={pan}>
                  <Animated.View style={[styles.circle, animatedStyles]}>
                    <Feather name="lock" size={20} color="white" />
                  </Animated.View>
                </GestureDetector>
                <View style={styles.chevronContainer}>
                    <Entypo style={{ marginRight: height<800?-15:-22 }} name="chevron-small-right" size={height<800?30:40} color="white" />
                  <Entypo style={{ marginRight: height<800?-15:-22 }} name="chevron-small-right" size={height<800?30:40} color="grey" />
                   <Entypo name="chevron-small-right" size={height<800?30:40} color="grey" />
                </View>
                <View style={styles.circle}>
                  <Feather name="lock" size={20} color="white" />
                </View>
              </View>

            </GestureHandlerRootView>
          </View>
         
        </View>
        <View style={{flex:1 ,justifyContent:'center'}}>
        <Text style={[styles.swipeGuideText,{color: connectionStatus ?'white':'rgba(255, 255,255, 0.9)'}]}>{connectionStatus?'Swipe To Unlock' : 'Please Connect To Continue'}</Text>
        </View>
      </View>
      <Text style={styles.TopText2}>Actions</Text>
      <View style={styles.ActionsContainer}>
        <TouchableOpacity style={connectionStatus?styles.ActionContainer:styles.disabledButton} onPress={()=>{navigation.navigate('Enrolling')}} >
        {/* disabled={connectionStatus ?false:true} */}
          <Image source={enroll} />
          <View style={styles.enrollContainer}>
            <Text style={connectionStatus?styles.ActionsText:styles.disabledText}>Enroll</Text>
            <Image source={chev2} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity  onPress={() => navigation.navigate('Users')} style={connectionStatus?styles.ActionContainer:styles.disabledButton} disabled={connectionStatus ?false:true}>
          <Image source={usersIcon} />
          <View style={styles.enrollContainer}>
            <Text style={connectionStatus?styles.ActionsText:styles.disabledText}>users</Text>
            <Image source={chev2} />
          </View>
        </TouchableOpacity>

        <TouchableOpacity style={connectionStatus?styles.ActionContainer:styles.disabledButton} onPress={()=>{navigation.navigate('Settings')}} disabled={connectionStatus ?false:true}>
          <Image source={settingsIcon} />
          <View style={styles.enrollContainer}>
            <Text style={connectionStatus?styles.ActionsText:styles.disabledText}>Settings</Text>
            <Image source={chev2} />
          </View>
        </TouchableOpacity>
      </View>
      </View>

    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121418',
    width: '100%',
  },
  Topcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
    marginLeft: '5%',
    paddingTop:hp(6),
  },
  TopText1: {
    fontFamily: 'SpaceGrotesk_600SemiBold',
    color: 'white',
    fontSize: wp(6),
  },
  TopText2: {
    fontFamily: 'SpaceGrotesk_400Regular',
    fontWeight:'700z',
    color: 'white',
    fontSize: wp(5),
    marginLeft: '5%',
  },
  connectionContainer: {
    marginTop: height>800?hp(4):hp(2),
    marginBottom: height>800?hp(7):0,
    borderRadius: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    width:height<800?wp(75):wp(85),
    height:height>800?hp(45):hp(43),
    alignSelf:'center',
    marginBottom: 15,
    
  },
  connectionBtContainer: {
    alignItems: 'center',
    width: '100%',
  },
  swipe: {
    flexDirection: 'row',
    alignItems: 'center',
    
    
  },
  SwipeCon: {
    alignItems: 'center',
    justifyContent: 'center',
    
    backgroundColor: '#2E3233',
    padding:wp(2),
    borderRadius: 50,
    marginTop: hp(2),
    marginBottom: hp(1),
    flexDirection: 'row',
  },
  swipeGuideText: {
    alignSelf:'center',
    fontSize: wp(5),
    marginTop:-hp(1.5),
    color: 'white',
    fontFamily: 'SpaceGrotesk_300Light',
    
   
  },
  ActionsText: {
    fontSize: wp(4),
    color: 'white',
    fontFamily: 'SpaceGrotesk_300Light',
  },
  button: {
    display:'flex',
    flexDirection:'row',
    marginTop: 20,
    zIndex:2,
    marginLeft: 20,
    paddingVertical: hp(0.7),
    paddingHorizontal: hp(1.2),
    marginBottom:hp(1.5),
    backgroundColor: 'white',
    borderRadius: 50,
    alignSelf: 'flex-start',
  },
  buttonText: {
    fontSize: wp(4),
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_400Regular',
    letterSpacing:1,
  },
  ActionsContainer: {
    flexDirection: 'row',
    width: '90%',
    marginTop: '2%',
    gap:wp(4),
    alignSelf:'center',
    justifyContent:'center',

    

    
  },
  ActionContainer: {
    gap: 10,
   width:wp(26),
   height:hp(12),
  paddingLeft:wp(2),
  paddingRight:wp(2),
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    borderRadius: 20,
    
  },
  disabledButton: {
    gap: 10,
    width:wp(26),
    height:hp(12),
    paddingLeft:wp(2),
    paddingRight:wp(2),
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.02)',
    borderRadius: 20,
  },
  disabledText:{
    fontSize: wp(4),
    color: 'rgba(255, 255, 255, 0.2)',
    fontFamily: 'SpaceGrotesk_300Light',
  },
  disabledText:{
    fontSize: wp(4),
    color: 'rgba(255, 255, 255, 0.2)',
    fontFamily: 'SpaceGrotesk_300Light',
  },
  enrollContainer: {
    gap:wp(2),
    flexDirection: 'row',
    alignItems: 'center',
    
  },
  chevronContainer: {
    flexDirection: 'row',
    
    
  },
  gestureContainer: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  circle: {
    height: height<800?40:50,
    width: height<800?40:50,
    borderRadius: 25,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  DisconnectCover:{
    width:'100%',
    height:'100%',
    position:'absolute',
    backgroundColor: 'rgba(10, 10, 10, 0)',
    zIndex:1,
    borderRadius: 30,}
});

export default HomeScreen;
