import React from 'react';
import {View, ImageBackground, Text} from 'react-native';
import BackGroundContainer from '../../../../../common/BackGroundContainer';
import ChatHeader from './ChatHeader';
import TypeMessageContainer from './TypeMessageContainer';
import MessagingContainer from './MessagingContainer';
function ChattingPage(props) {
  const {navigation, route} = props;
  const {item, title} = route.params;
  console.log(item);
  return (
    <BackGroundContainer>
      <ChatHeader
        userActivity="Online"
        userName={item.name}
        avatar={item.avatar_link}
        navigation={navigation}
      />
      <MessagingContainer />
      <TypeMessageContainer />
    </BackGroundContainer>
  );
}
export default ChattingPage;
