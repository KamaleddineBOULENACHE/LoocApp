import React from 'react';
import { StyleSheet, TouchableOpacity, SafeAreaView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SettingsScreen from './SettingsScreen';
import WifiPassword from './WifiPassword';
import PairingPassword from './PairingPassword';

export default function SettingsTabsNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator initialRouteName='SettingsScreen'>
        <Stack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#191B1F',
              borderBottomWidth: 0,
            
              elevation: 0,
            },
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk_600SemiBold',
            },
            headerTransparent:true,
            headerBlurEffect:'light',
            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.navigate('Home')}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="WifiPassword"
          component={WifiPassword}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#191B1F',
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk_600SemiBold',
            },
            headerTransparent:true,

            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
        <Stack.Screen
          name="PairingPassword"
          component={PairingPassword}
          options={({ navigation }) => ({
            headerShown: true,
            headerStyle: {
              backgroundColor: '#191B1F',
              borderBottomWidth: 0,
              elevation: 0,
            },
            headerTitle: '',
            headerTitleStyle: {
              fontFamily: 'SpaceGrotesk_600SemiBold',
            },
            headerTransparent:true,

            headerLeft: () => (
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <Ionicons name="arrow-back" size={24} color="#fff" />
              </TouchableOpacity>
            ),
          })}
        />
      </Stack.Navigator>
    </SafeAreaView>
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
