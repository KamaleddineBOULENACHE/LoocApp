import React, { useEffect } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import logo from './assets/LoocLogo.png';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'

const IntroScreen = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Tabs'); // Navigate to the Home screen after 5 seconds
    }, 5000);

    // Clean up the timer when the component is unmounted
    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%'
  },
  logo: {
    width: hp(22),
    height: hp(28), // Adjust logo size as needed
  },
});

export default IntroScreen;
