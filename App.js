import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Image } from 'react-native';
import * as SplashScreen from 'expo-splash-screen';
import { useFonts } from 'expo-font';
import WebSocketProvider from './Controllers/WebSocketContextt';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Tabs from './Components/Tabs';
import Enrolling from './Screens/EnrollingScreens/EnrollingFull/Enrolling';
import PairingScreen from './Screens/PairingScreen/PairingScreen';
import CredentialsScreen from './Screens/CredentialsScreen/CredentialsScreen';
import IntroScreen from './Screens/IntroScreen/IntroScreen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);
  const Stack = createNativeStackNavigator();

  const [fontsLoaded] = useFonts({
    'SpaceGrotesk_600SemiBold': require('./assets/fonts/SpaceGrotesk-SemiBold.ttf'),
    'SpaceGrotesk_400Regular': require('./assets/fonts/SpaceGrotesk-Regular.ttf'),
    'SpaceGrotesk_500Medium': require('./assets/fonts/SpaceGrotesk-Medium.ttf'),
    'SpaceGrotesk_300Light': require('./assets/fonts/SpaceGrotesk-Light.ttf'),
    'SpaceGrotesk_700Bold': require('./assets/fonts/SpaceGrotesk-Bold.ttf'),
  });

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load any assets here if needed, e.g., images or additional fonts
        await new Promise(resolve => setTimeout(resolve, 2000)); // Simulate a delay
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
        SplashScreen.hideAsync();
      }
    }

    prepare();
  }, []);

  if (!appIsReady || !fontsLoaded) {
    return (
      <View style={styles.container}>
        <Image source={require('./assets/splash.png')} style={styles.splashImage} />
      </View>
    );
  }

  return (
    <WebSocketProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Tabs'>
          <Stack.Screen name="Tabs" component={Tabs} options={{ headerShown: false }} />
          <Stack.Screen
            name="Enrolling"
            component={Enrolling}
            options={{
              headerShown: true,
              headerTitle: '',
              headerStyle: { backgroundColor: '#121418' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontFamily: 'SpaceGrotesk_600SemiBold' },
            }}
          />
          <Stack.Screen
            name="Pairing"
            component={PairingScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerStyle: { backgroundColor: '#121418' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontFamily: 'SpaceGrotesk_600SemiBold' },
            }}
          />
          <Stack.Screen
            name="Credentials"
            component={CredentialsScreen}
            options={{
              headerShown: true,
              headerTitle: '',
              headerStyle: { backgroundColor: '#121418' },
              headerTintColor: '#fff',
              headerTitleStyle: { fontFamily: 'SpaceGrotesk_600SemiBold' },
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </WebSocketProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black', // Match your splash screen background color
    alignItems: 'center',
    justifyContent: 'center',
  },
  splashImage: {
    width: '60%',
    height: '30%',
    resizeMode: 'contain',
  },
});
