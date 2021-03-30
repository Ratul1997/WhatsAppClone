import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Header from '../../../../common/Header';
import Search from '../../../../common/Search';
import normalization from '../../../../constant/normalize';
import DummyData from '../../../../demoData/userList';
import PeopleListItem from '../../../../common/PeopleListItem';
import ChatList from './Chatlist';
function Chat() {
  const renderItem = ({item, index}) => {
    return <ChatList item={item} index={index} />;
  };

  console.log(DummyData);
  return (
    <View>
      <Header title="Chat" />
      <Search />
      <FlatList
        style={{marginHorizontal: normalization(10)}}
        data={DummyData}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </View>
  );
}
export default Chat;
