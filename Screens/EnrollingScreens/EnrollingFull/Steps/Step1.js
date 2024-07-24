import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WebSocketContext } from '../../../../Controllers/WebSocketContextt';

const Step1 = (props) => {
  const { connectionStatus, message, sendMessage } = useContext(WebSocketContext);
  const [ownerName, setOwnerName] = useState('');

  const EnrollName = () => {
    
    sendMessage(`ENROLL${ownerName}`);
    console.log('finished Step 1')
    
    props.progressFunction();
    
  };

  return (
    <View style={styles.container}>
      <View style={{ width: '90%', alignItems: 'center', marginLeft: '5%' }}>
        <View style={{ width: '100%' }}>
          <Text style={styles.Title}>
            What's the name of the fingerprint's owner? 
          </Text>
        </View>
        
        <View style={styles.FormInputCon}>
          <TextInput
            style={styles.FormInput}
            value={ownerName}
            onChangeText={(text) => setOwnerName(text)}
            placeholder="Enter owner's name"
            placeholderTextColor="gray"
          />
        </View>
        
        <View style={{ width: '100%', paddingLeft: 10 }}>
          <Text style={{ color: 'white', fontFamily: 'SpaceGrotesk_400Regular', fontSize: 18 }}>
            You can still modify the name later
          </Text>
        </View>
        
        <TouchableOpacity style={styles.FormSubmitBtn} onPress={EnrollName}>
          <Text style={styles.FormSubmitBtnText}>Continue</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121418',
    width: '100%',
  },
  Title: {
    marginTop: hp(10),
    marginBottom: hp(2),
    fontSize: wp(7),
    color: 'white',
    fontFamily: 'SpaceGrotesk_400Regular',
    textAlign: 'center',
  },
  FormInput: {
    color: 'white',
    fontSize: 24,
  },
  FormInputCon: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 2,
    borderRadius: 5,
    marginTop: 15,
    height: hp(7),
    marginBottom: 12,
    width: '95%',
    borderColor: '#2E3233',
    paddingHorizontal: 15,
    paddingRight: 20,
  },
  FormSubmitBtn: {
    display: 'flex',
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 30,
    width: '95%',
    height: hp(6.5),
    marginTop: hp(3),
  },
  FormSubmitBtnText: {
    fontSize: 20,
    fontFamily: 'SpaceGrotesk_500Medium',
  },
});

export default Step1;
