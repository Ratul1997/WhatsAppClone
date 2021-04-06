import React from 'react';
import {View, Text} from 'react-native';
import PeopleListItem from '../../../../../common/PeopleListItem';
function ChatList(props) {
  const {item, index, navigation} = props;
  return (
    <>
      <PeopleListItem item={item} title="Chat" navigation={navigation} />
    </>
  );
}
export default ChatList;
