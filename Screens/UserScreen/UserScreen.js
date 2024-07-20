import React,{useContext,useEffect,useState} from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList ,Dimensions} from 'react-native';
import { FontAwesome, MaterialIcons, Entypo } from '@expo/vector-icons';
import {widthPercentageToDP as wp,heightPercentageToDP as hp }from 'react-native-responsive-screen'
import { WebSocketContext } from './../../Controllers/WebSocketContextt';
import { useFocusEffect } from '@react-navigation/native';



const { width, height } = Dimensions.get('window');

const User = ({ name }) => (
  <View style={styles.UserContainer}>
    <View style={styles.TopCon}>
      <MaterialIcons name="key" size={hp(3)} color="white" />
      <TouchableOpacity>
        <Entypo name="dots-three-vertical" size={hp(2)} color="white" />
      </TouchableOpacity>
    </View>
    <FontAwesome name="user-circle-o" size={hp(5.5)} color="white" />
    <Text style={{ color: 'white', fontSize: hp(2), marginTop: hp(1.5), marginBottom: hp(1.5), fontFamily: 'SpaceGrotesk_400Regular' }}>{name}</Text>
    <TouchableOpacity style={styles.EditBtn}>
      <Text style={{ fontSize: hp(1.5), textAlign: 'center', fontFamily: 'SpaceGrotesk_600SemiBold' }}>Edit</Text>
    </TouchableOpacity>
  </View>
);

const UserScreen = ({ navigation }) => {
  const [users, setUsers] = useState([]);
  const { connectionStatus, message, sendMessage } = useContext(WebSocketContext);

  useFocusEffect(
    React.useCallback(() => {
      sendMessage(`LIST`);
      console.log('Sent List');
      console.log(message);

      return () => {
        console.log('unmounted');
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
            name: item.name,
          }));
          setUsers(userList);
        } else if (jsonMessage.message) {
          console.log(jsonMessage.message);
        }
      } catch (error) {
        console.error('Failed to parse message as JSON:', error);
      }
    }
  }, [message]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.TopTextContainer}>
          <Text style={{ fontSize: hp(3), color: 'white', fontFamily: 'SpaceGrotesk_600SemiBold', marginLeft: 5 }}>Users</Text>
        </View>
        <FlatList
          style={styles.UsersContainer}
          data={users}
          renderItem={({ item }) => <User name={item.name} />}
          keyExtractor={(item) => item.id}
          numColumns={2}
          showsHorizontalScrollIndicator={true}
          contentContainerStyle={{
           
            justifyContent: 'center',
          }}
        />
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
   
  },
  UserContainer: {
    display: 'flex',
    width: wp(35),
    height: hp(21),
    backgroundColor: '#1E1F21',
    alignItems: 'center',
    borderRadius: 20,
    marginHorizontal:'5%',
    marginVertical:'2%'
    
    // Adjust spacing between items
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
    alignSelf:'center',
    width: '90%',
    height:hp(70),
    
  },
  
});

export default UserScreen;
