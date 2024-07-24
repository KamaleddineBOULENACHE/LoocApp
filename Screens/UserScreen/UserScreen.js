import React, { useContext, useEffect, useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList, Dimensions, ActivityIndicator } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { WebSocketContext } from './../../Controllers/WebSocketContextt';
import { useFocusEffect } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

const User = ({ id, name, onDelete }) => (
  <View style={styles.UserContainer}>
    <View style={styles.TopCon}>
      <MaterialIcons name="key" size={hp(3)} color="white" />
    </View>
    <FontAwesome name="user-circle-o" size={hp(5.5)} color="white" />
    <Text style={{ color: 'white', fontSize: hp(2), marginTop: hp(1.5), marginBottom: hp(1.5), fontFamily: 'SpaceGrotesk_400Regular' }}>{name}{id}</Text>
    <TouchableOpacity style={styles.EditBtn} onPress={() => onDelete(id)}>
      <Text style={{ fontSize: hp(1.5), textAlign: 'center', fontFamily: 'SpaceGrotesk_600SemiBold' }}>Delete</Text>
    </TouchableOpacity>
  </View>
);

const UserScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [noFingerprintsMessage, setNoFingerprintsMessage] = useState('');
  const { connectionStatus, message, sendMessage,modifyMessage } = useContext(WebSocketContext);

  useFocusEffect(
    React.useCallback(() => {
      sendMessage(`LIST`);
      if(users.length===0 && connectionStatus){
        setLoading(true)
      }

      console.log('Sent List');
      console.log(message);

      return () => {
        
        console.log('unmounted');
        setUsers([]);
        modifyMessage('')
      };
    }, [])
  );

  useEffect(() => {
    if (message) {
      try {
        const jsonMessage = JSON.parse(message);
        if (jsonMessage.fingerprints) {
          const userList = jsonMessage.fingerprints.map((item, index) => ({
            id: `${index + 1}`,
            idd: item.id,
            name: item.name,
          }));
          setUsers(userList);
          setLoading(false);
        } else if (jsonMessage.message) {
          if (jsonMessage.message === "No fingerprints enrolled") {
            setNoFingerprintsMessage("No fingerprints enrolled");
            setUsers([]);
            setLoading(false);
          } else {
            console.log(message);
          }
        }
      } catch (error) {
        console.error('Failed to parse message as JSON:', error);
      }
    }
  }, [message]);

  const handleDelete = (id) => {
    sendMessage(`DELETE ${id}`);
  };

  // useEffect(()=>{
  //   // return () => {
  //   //   setUsers([]);
  //   //   modifyMessage('')
  //   //   console.log('unmounted');
  //   // };

  // },[message])
  return (
    <View style={styles.container}>
      <View>
        <View style={styles.TopTextContainer}>
          <Text style={{ fontSize: hp(3), color: 'white', fontFamily: 'SpaceGrotesk_600SemiBold', marginLeft: 5 }}>Users</Text>
          {loading&& connectionStatus && <ActivityIndicator size="small" color="#ffffff" style={{ marginLeft: 10, marginTop: 10 }} />}

        </View>

        {!connectionStatus&&
        <View style={{display:'flex', justifyContent:'center',alignItems:'center',marginTop:hp(28)}}>
          <Text style={{ fontSize: hp(4), color: 'white', fontFamily: 'SpaceGrotesk_300Light', marginLeft: 5 }}>Not connected</Text>
          <TouchableOpacity style={styles.button} onPress={()=>{navigation.navigate('Pairing')}}>
          <Text style={styles.buttonText}>Connect</Text>
          </TouchableOpacity>
        </View>
        }
        {noFingerprintsMessage && connectionStatus ? (
          <View style={styles.NoFingerprintsContainer}>
            <Text style={{ fontSize: hp(2.5), color: 'white', textAlign: 'center' }}>{noFingerprintsMessage}</Text>
          </View>
        ) : (
          connectionStatus?
          <FlatList
            style={styles.UsersContainer}
            data={users}
            renderItem={({ item }) => <User id={item.idd} name={item.name} onDelete={handleDelete} />}
            keyExtractor={(item) => item.id}
            numColumns={2}
            showsHorizontalScrollIndicator={true}
            contentContainerStyle={{
              justifyContent: 'center',
            }}
          />:<View></View>
        )}
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
  TopTextContainer: {
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  UserContainer: {
    display: 'flex',
    width: wp(35),
    height: hp(21),
    backgroundColor: '#1E1F21',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal: '5%',
    marginVertical: '2%',
  },
  TopCon: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    marginBottom: 5,
    width: '85%',
    alignItems: 'center',
  },
  EditBtn: {
    width: wp(20),
    display: 'flex',
    height: hp(2.5),
    justifyContent: 'center',
    backgroundColor: 'white',
    borderRadius: 20,
    alignContent: 'center',
  },
  UsersContainer: {
    alignSelf: 'center',
    width: '90%',
    height: hp(70),
  },
  NoFingerprintsContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: hp(70),
  },
  button: {
    display:'flex',
    flexDirection:'row',
    marginTop: 20,
    zIndex:2,
    marginLeft: 20,
    paddingVertical: hp(0.7),
    paddingHorizontal: hp(1.2),
    marginBottom:hp(1.5),
    backgroundColor: 'white',
    borderRadius: 50,
  },
  buttonText: {
    fontSize: wp(4),
    color: 'black',
    fontWeight: 'bold',
    fontFamily: 'SpaceGrotesk_400Regular',
    letterSpacing:1,
  },
});

export default UserScreen;
