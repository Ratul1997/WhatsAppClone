import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import BackGroundContainer from '../../../../../common/BackGroundContainer';
import ChatHeader from './ChatHeader';
import TypeMessageContainer from './TypeMessageContainer';
import MessagingContainer from './MessagingContainer';
function ChattingPage() {
  return (
    <BackGroundContainer >
    
      <ChatHeader userActivity="Online" userName="Ratul Bhowmick" />
      <MessagingContainer />
      <TypeMessageContainer />
    </BackGroundContainer>
  );
}
export default ChattingPage;
