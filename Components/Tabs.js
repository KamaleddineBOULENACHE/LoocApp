import React from 'react';
import { View, StyleSheet,Text,TouchableOpacity,SafeAreaView } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../Screens/HomeScreen/HomeScreen'
import UserScreen from '../Screens/UserScreen/UserScreen';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import { Entypo, FontAwesome, MaterialIcons, Ionicons } from '@expo/vector-icons';
import SettingsTabsNavigator from '../Screens/SettingsScreens/SettingsTabsNavigator';
const Tab = createBottomTabNavigator();

const Tabs= ({navigation}) => {
  

  return (
    
    <SafeAreaView style={styles.container}>
      <Tab.Navigator 
        screenOptions={{
          
          headerShown:false,
          tabBarShowLabel:false,
          tabBarStyle:{
            position:'absolute',
            bottom:hp(4),
            width:wp(90),
            left:wp(5),
            borderRadius:20,
            backgroundColor: 'rgba(255, 255, 255, 0.04)',
            elevation: 0,
            height:hp(7.5),
            borderTopWidth: 0, // Remove the border
            borderTopColor: 'transparent', // Ensure no color is applied
            shadowOpacity: 0, // Remove shadow if any
            paddingTop:hp(0.5)
            
          }
         
          
        }}>
        <Tab.Screen name="Home" component={HomeScreen} options={
          {
           
            tabBarIcon:({focused})=>(
              <View style={{display:'flex',alignItems:'center'}}>
                <Entypo name="home" size={hp(3.5)} color={focused? 'white':'grey'} />
                <Text style={[styles.swipeGuideTextT,{color:focused? 'white':'grey'}]} >Home</Text>
              </View>
            )

            
          }
        }/>
        
        
        <Tab.Screen name="Users" component={UserScreen}  options={{

          tabBarIcon:({focused})=>(
              <View style={{display:'flex',alignItems:'center'}}>
                <FontAwesome name="users" size={hp(3.5)} color={focused? 'white':'grey'} />
                <Text style={[styles.swipeGuideTextT,{color:focused? 'white':'grey',textAlign:'center'}]}>Users</Text>
              </View>
          ),
          headerShown: true, 
          
          headerStyle: {
            backgroundColor: '#121418',
            backgroundColor: '#121418',
            borderBottomWidth: 0,
            elevation:0

          },
          headerTitle:'',
           

          
          headerTitleStyle: {
            fontFamily: 'SpaceGrotesk_600SemiBold',
          },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ marginLeft: 20 }}>
              <Ionicons name="arrow-back" size={hp(2)} color="#fff" />
            </TouchableOpacity>
          ),
         
        }}/>
        <Tab.Screen name="Settings" component={SettingsTabsNavigator} options={{
          tabBarIcon:({focused})=>(
            <View style={{display:'flex',alignItems:'center'}}>
                  <MaterialIcons name="settings" size={hp(3.5)} color={focused? 'white':'grey'} />
                  <Text style={[styles.swipeGuideTextT,{color:focused? 'white':'grey',textAlign:'center'}]}>Settings</Text>
            </View>

          ),
        
        }} />
      </Tab.Navigator>
      
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  swipeGuideTextT: {
    marginTop: 2,
    fontSize: hp(1.5),
    color: 'grey',
    fontFamily: 'SpaceGrotesk_400Regular',
  },
});

export default Tabs;




