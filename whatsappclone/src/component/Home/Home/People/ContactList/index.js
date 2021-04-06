import React from 'react';
import {View, Text} from 'react-native';
import PeopleListItem from '../../../../../common/PeopleListItem';
function ContactList(props) {
  const {item, index, navigation} = props;
  return (
    <>
      <PeopleListItem item={item} title="People" navigation={navigation} />
    </>
  );
}
export default ContactList;
