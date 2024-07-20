import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Dimensions } from 'react-native';
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

const { width, height } = Dimensions.get('window');

const NavBar = () => {



  return (
    <View style={styles.navMenu}>
      <TouchableOpacity
        style={{ display: 'flex', alignItems: 'center' }}
        onPress={() => navigation.navigate('Home')}
      >
        <Entypo name="home" size={hp(3.5)} color='white' />
        <Text style={[styles.swipeGuideTextT,styles.focusedText]}>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ display: 'flex', alignItems: 'center' }}
        onPress={() => navigation.navigate('Users')}
      >
        <FontAwesome name="users" size={hp(3.5)} color='white' />
        <Text style={[styles.swipeGuideTextT, styles.focusedText]}>Users</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{ display: 'flex', alignItems: 'center' }}
        onPress={() => navigation.navigate('Settings')}
      >
        <MaterialIcons name="settings" size={hp(3.5)} color='white' />
        <Text style={[styles.swipeGuideTextT,styles.focusedText]}>Settings</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  swipeGuideTextT: {
    marginTop: 2,
    fontSize: hp(1.5),
    color: 'grey',
    fontFamily: 'SpaceGrotesk_400Regular',
  },
  focusedText: {
    color: 'white',
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    marginLeft: '5%',
    backgroundColor: 'rgba(255, 255, 255, 0.04)',
    position: 'absolute',
    bottom: '2%',
    justifyContent: 'space-around',
    height: hp(8),
    borderRadius: 30,
    alignItems: 'center',
  },
});

export default NavBar;
