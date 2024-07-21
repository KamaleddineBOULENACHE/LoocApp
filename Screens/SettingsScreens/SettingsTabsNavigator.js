import { StyleSheet,TouchableOpacity} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen';
import WifiPassword from './WifiPassword';
import PairingPassword from './PairingPassword';

export default function SettingsTabsNavigator() {

const Stack = createNativeStackNavigator();



 

  return (



          <Stack.Navigator initialRouteName='SettingsScreen' >
            <Stack.Screen name="SettingsScreen" component={SettingsScreen}  options={{ 
              headerShown: true, 
          
              headerStyle: {
                backgroundColor: '#191B1F',
                
                borderBottomWidth: 0,
                elevation:0,
    
              },
              headerTitle:'',
               
    
              
              headerTitleStyle: {
                fontFamily: 'SpaceGrotesk_600SemiBold',
             
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.navigate('Home')} >
                  <Ionicons name="arrow-back" size={hp(2)} color="#fff" />
                </TouchableOpacity>
              )
             }} />
            <Stack.Screen name="WifiPassword" component={WifiPassword}  options={{ 
              headerShown: true, 
          
              headerStyle: {
                backgroundColor: '#191B1F',
                
                borderBottomWidth: 0,
                elevation:0,
    
              },
              headerTitle:'',
               
    
              
              headerTitleStyle: {
                fontFamily: 'SpaceGrotesk_600SemiBold',
             
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} >
                  <Ionicons name="arrow-back" size={hp(2)} color="#fff" />
                </TouchableOpacity>
              ),
             }} />
            <Stack.Screen name="PairingPassword" component={PairingPassword}  options={{
              
              headerShown: true, 
          
              headerStyle: {
                backgroundColor: '#191B1F',
                
                borderBottomWidth: 0,
                elevation:0,
    
              },
              headerTitle:'',
               
    
              
              headerTitleStyle: {
                fontFamily: 'SpaceGrotesk_600SemiBold',
             
              },
              headerLeft: () => (
                <TouchableOpacity onPress={() => navigation.goBack()} >
                  <Ionicons name="arrow-back" size={hp(2)} color="#fff" />
                </TouchableOpacity>
              ),
             }} />
            
          </Stack.Navigator>
        

 
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
