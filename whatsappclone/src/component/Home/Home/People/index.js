import React from 'react';
import {Text, View, FlatList} from 'react-native';
import Header from '../../../../common/Header';
import Search from '../../../../common/Search';
import normalization from '../../../../constant/normalize';
import DummyData from '../../../../demoData/userList';
import PeopleListItem from '../../../../common/PeopleListItem';
import ContactList from './ContactList';
import Status from './Status.js';

function People() {
  const renderItem = ({item, index}) => {
    return <ContactList item={item} index={index} />;
  };

  console.log(DummyData);
  return (
    <View>
      <Header title="People" />
      <Search />
      <Status />

      <Text
        style={{
          marginLeft: normalization(10),
          marginBottom: normalization(12),
          fontSize: normalization(15),
          color:'gray'
        }}>
        {' '}
        Contact List
      </Text>
      <FlatList
        style={{marginHorizontal: normalization(10)}}
        data={DummyData}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
    </View>
  );
}
export default People;
