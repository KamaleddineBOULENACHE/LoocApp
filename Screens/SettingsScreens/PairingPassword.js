import React,{useState,useContext,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,Dimensions,ActivityIndicator ,KeyboardAvoidingView, Platform} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import axios from 'axios'; // Add axios for making HTTP requests
import { WebSocketContext } from '../../Controllers/WebSocketContextt';

const PairingPassword= ({navigation}) => {
  const [username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const {connectionStatus } = useContext(WebSocketContext);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false); 


  useEffect(() => {
    if (connectionStatus && loading) {
      navigation.navigate('Home');
      setLoading(false); 
    }
  }, [connectionStatus, loading, navigation]);


  const handleChangePairingPassword = async () => {
    console.log('pressed')
    setLoading(true);
    try {
      const response = await axios.post('http://192.168.4.1/ChangePairingCredentials', {
        username,
        Password,
        ConfirmPassword,
      });

      if (response.data.success ) {
        console.log('Pairing Credentials Changed Succesfully');
       
    
        
        

      } else {
        
        console.log('Invalid credentials');
        console.log(
          'Password: '+{Password}
        )
        console.log(
          'ConfirmPassword: '+{ConfirmPassword}
        )
        setError(true);
        setLoading(false);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      setError(true);
      setLoading(false);

    }
  };

  const [Input1Focus,setInput1Focus]=useState(false)
  const [Input2Focus,setInput2Focus]=useState(false)
  const [Input3Focus,setInput3Focus]=useState(false)
  return (
    <View
      style={styles.container}
    >
    <View>
      <View style={styles.TopLabel}>
        <Text style={styles.TopText}>Pairing Password</Text>
      </View>
      <View style={styles.FormContainer}>
      <Text style={styles.inputTitle}>New Username</Text>
        <View style={[styles.FormInputCon,{backgroundColor:Input1Focus?'#2E3233':'#121418',borderColor:error?'red':'#2E3233'}]}>
          <TextInput
            style={styles.FormInput}
            value={username}
            onChangeText={setUsername}
            onFocus={() => {
              setInput1Focus(true);
              setError(false)

            }}
            onBlur={() => setInput1Focus(false)}
          />
        </View>
        <Text style={styles.inputTitle}>New Pairing Password</Text>
        <View style={[styles.FormInputCon,{backgroundColor:Input2Focus?'#2E3233':'#121418',borderColor:error?'red':'#2E3233'}]}>
          <TextInput
            style={styles.FormInput}
            secureTextEntry={!showPassword}
            value={ConfirmPassword}
            onChangeText={setConfirmPassword}
            onFocus={() => {
              setInput2Focus(true);
              setError(false)

            }}
            onBlur={() => setInput2Focus(false)}
          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign name={showPassword ? "eyeo" : "eye"} size={32} color={Input2Focus?'white':'#2E3233'} />
          </TouchableOpacity>
          
        </View>
        <Text style={styles.inputTitle}>Old Pairing Password</Text>
        <View style={[styles.FormInputCon,{backgroundColor:Input3Focus?'#2E3233':'#121418',borderColor:error?'red':'#2E3233'}]}>
          <TextInput
            style={styles.FormInput}
            secureTextEntry={!showPassword}
            value={Password}
            onChangeText={setPassword}
            onFocus={() => {
              setError(false)
              setInput3Focus(true)}}
            onBlur={() => setInput3Focus(false)}

          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign name={showPassword ? "eyeo" : "eye"} size={32} color={Input3Focus?'white':'#2E3233'} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: hp(1.5), color: 'white', fontFamily: 'SpaceGrotesk_300Light',textAlign:'left',alignSelf:'flex-start' }}>Default Credential are written in the back of the package</Text>
        <TouchableOpacity style={styles.FormSubmitBtn} onPress={handleChangePairingPassword}>
        {loading ? (
            <ActivityIndicator size="small" color="#121418" />
          ) : (
            <Text style={styles.FormSubmitBtnText}>Continue</Text>
          )}
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
    alignItems:'center',
    marginTop:hp(13)
    
    

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
    width:'90%'
    

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
    height:hp(6),
    marginTop:hp(4)
  },
  FormSubmitBtnText:{
    fontSize:20,
    fontFamily:'SpaceGrotesk_500Medium'
  },
  TopLabel:{
    width:'100%',
    height:'15%',
    backgroundColor:'#191B1F',
    position:'absolute',
    top:0,
    paddingLeft:wp(4),
    
    
  },
  TopText:{
    color:'white',
    fontSize:hp(3.2),
    fontFamily:'SpaceGrotesk_700Bold',
    marginTop:'2%'

  },
})
export default PairingPassword;
