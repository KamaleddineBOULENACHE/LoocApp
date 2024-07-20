import React,{useState} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,Dimensions} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import axios from 'axios'; // Add axios for making HTTP requests
import { WebSocketContext } from '../../Controllers/WebSocketContextt';

const CredentialsScreen= ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);


  const handleLogin = async () => {
    console.log('pressed')
    try {
      const response = await axios.post('http://192.168.4.1/login', {
        username,
        password,
      });

      if (response.data.success) {
        // Handle successful login, e.g., open WebSocket connection
        console.log('Login successful');
        navigation.navigate('Home')

      } else {
        console.log('Invalid credentials');
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <View style={styles.container}>
    <View>
      <View style={styles.TopTextContainer}>
        <Text style={{ fontSize: hp(3), color: 'white', fontFamily: 'SpaceGrotesk_700Bold' }}>Connect To Device</Text>
        <Text style={{ fontSize: 20, color: 'white', fontFamily: 'SpaceGrotesk_300Light' }}>Enter Device's Credentials</Text>
      </View>
      <View style={styles.FormContainer}>
        <Text style={styles.inputTitle}>Device</Text>
        <View style={styles.FormInputCon}>
          <TextInput
            style={styles.FormInput}
            value={username}
            onChangeText={setUsername}
          />
        </View>
        <Text style={styles.inputTitle}>Password</Text>
        <View style={styles.FormInputCon}>
          <TextInput
            style={styles.FormInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign name={showPassword ? "eyeo" : "eye"} size={32} color="#2E3233" />
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={styles.FormSubmitBtn} onPress={handleLogin}>
          <Text style={styles.FormSubmitBtnText}>Continue</Text>
        </TouchableOpacity>
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
  logoContainer: {
    
    
  },
  
  TopTextContainer:{
    paddingHorizontal:20,
    marginBottom:50

    
    
  },
  FormContainer:{
    display:'flex',
    paddingHorizontal:20,
    alignItems:'center'
    
    

  },
  inputTitle:{
    alignSelf:'flex-start',
    fontSize: 18,
    color:'white',
    fontFamily:'SpaceGrotesk_400Regular'
  },
  FormInput:{
    color:'white',
    fontSize:24,
    

  },
  FormInputCon:{
    display:'flex',
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    borderWidth:2,
    borderRadius:5,
    marginTop:15,
    height:65,
    marginBottom:10,
    width:'100%',
    borderColor:'#2E3233',
    
    
    paddingHorizontal:15,
    paddingRight:20

  },
  FormSubmitBtn:{
    display:'flex',
    backgroundColor:'white',
    alignItems:'center',
    justifyContent:'center',
    borderRadius:30,
    width:'100%',
    height:65,
    marginTop:25
  },
  FormSubmitBtnText:{
    fontSize:20,
    fontFamily:'SpaceGrotesk_500Medium'
  }
})
export default CredentialsScreen;
