import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../../../constant/color';
import normalization from '../../../../../constant/normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SendMessage from './MessageType/SendMessage';
import ReceivedMessage from './MessageType/ReceivedMessage';
import firestore from '@react-native-firebase/firestore';
import {userActions} from '../../../../../actions/userActions';
import {calculation} from '../../../../../helpers/calculation';
import {FlatList} from 'react-native-gesture-handler';

const userId = 1;
function MessagingContainer() {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    const subscriber = firestore()
      .collection('Chat')
      .doc('123')
      .collection('Chat')
      .onSnapshot(querySnapshot => {
        const messages = [];
        querySnapshot.forEach(documentSnapshot => {
          messages.push({
            ...documentSnapshot.data(),
            key: documentSnapshot.id,
          });
        });
        setMessages(calculation.sortBydate(messages));
      });

    // Stop listening for updates when no longer required
    return () => subscriber();
  }, []);

  const renderItem = ({item}) => {
    if (item.userId != userId) {
      return <ReceivedMessage data={item} />;
    } else {
      return <SendMessage data={item} />;
    }
  };
  return (
    <View style={{backgroundColor: 'transparent'}}>
      <FlatList
        data={messages}
        renderItem={renderItem}
        keyExtractor={item => item.key}
        inverted
      />
    </View>
  );
}
export default MessagingContainer;

/**
 * user1: VjtaDfg5T4nKXGjpGUsn
 * user2: LY9TQKtAbe7eQXJRgUz7
 * 
 * user1 -> user2/ user2->user1
 * 
 * documentID: VjtaDfg5T4nKXGjpGUsnLY9TQKtAbe7eQXJRgUz7
 * documentID: LY9TQKtAbe7eQXJRgUz7VjtaDfg5T4nKXGjpGUsn
 * primaryKey (document):
 * 
 */
