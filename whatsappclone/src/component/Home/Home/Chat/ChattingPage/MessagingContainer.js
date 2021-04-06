import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../../../constant/color';
import normalization from '../../../../../constant/normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import SendMessage from './MessageType/SendMessage';
import ReceivedMessage from './MessageType/ReceivedMessage';
function MessagingContainer() {
  return (
    <View style={{backgroundColor: 'transparent'}}>
      <ReceivedMessage />
      <SendMessage />
    </View>
  );
}
export default MessagingContainer;
