import React,{useState,useContext,useEffect} from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, TextInput ,Dimensions,ActivityIndicator} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import axios from 'axios'; // Add axios for making HTTP requests
import { WebSocketContext } from '../../Controllers/WebSocketContextt';

const CredentialsScreen= ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { connectionStatus,modifyWebsockets,ActivateWebsockets  } = useContext(WebSocketContext);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(false); 


  useEffect(() => {
    if (connectionStatus && loading) {
      navigation.navigate('Home');
      setLoading(false); 
    }
  }, [connectionStatus, loading, navigation]);


  const handleLogin = async () => {
    console.log('pressed')
    setLoading(true);
    try {
      const response = await axios.post('http://192.168.4.1/login', {
        username,
        password,
      });

      if (response.data.success ) {
        console.log('Login successful');
        modifyWebsockets('true');
        console.log(ActivateWebsockets)

       
    
        
        

      } else {
        
        console.log('Invalid credentials');
        console.log(
          'userName: '+{username}
        )
        console.log(
          'password: '+{password}
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
  return (
    <View style={styles.container}>
    <View>
      <View style={styles.TopTextContainer}>
        <Text style={{ fontSize: hp(3), color: 'white', fontFamily: 'SpaceGrotesk_700Bold' }}>Connect To Device</Text>
        <Text style={{ fontSize: 20, color: 'white', fontFamily: 'SpaceGrotesk_300Light' }}>Enter Device's Credentials</Text>
      </View>
      <View style={styles.FormContainer}>
        <Text style={styles.inputTitle}>Device</Text>
        <View style={[styles.FormInputCon,{backgroundColor:Input1Focus?'#2E3233':'#121418',borderColor:error?'red':'#2E3233',borderWidth:error?1:2}]}>
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
        <Text style={styles.inputTitle}>Password</Text>
        <View style={[styles.FormInputCon,{backgroundColor:Input2Focus?'#2E3233':'#121418',borderColor:error?'red':'#2E3233',borderWidth:error?1:2}]}>
          <TextInput
            style={styles.FormInput}
            secureTextEntry={!showPassword}
            value={password}
            onChangeText={setPassword}
            onFocus={() => {
              setError(false)
              setInput2Focus(true)}}
            onBlur={() => setInput2Focus(false)}

          />
          <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
            <AntDesign name={showPassword ? "eyeo" : "eye"} size={32} color={Input2Focus?'white':'#2E3233'} />
          </TouchableOpacity>
        </View>
        <Text style={{ fontSize: hp(1.5), color: 'white', fontFamily: 'SpaceGrotesk_300Light',textAlign:'left',alignSelf:'flex-start' }}>Default Credential are written in the back of the package</Text>
        <TouchableOpacity style={styles.FormSubmitBtn} onPress={handleLogin}>
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
  }
})
export default CredentialsScreen;
