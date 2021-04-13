/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import userList from '../../../../../demoData/userList';
import PeopleListItem from '../../../../../common/PeopleListItem';
import normalization from '../../../../../constant/normalize';
import CallListItem from './CallListItem';
import color from '../../../../../constant/color';
import IonIcons from 'react-native-vector-icons/Ionicons';

function CallList(props) {
  const [isPressed, setPressed] = useState(false);
  const {navigation} = props;
  const renderItem = ({item, index}) => {
    return <CallListItem index={index} item={item} navigation={props} />;
  };
  return (
    <>
      <FlatList
        style={{
          marginHorizontal: normalization(10),
          marginTop: normalization(5),
          flex: 1,
        }}
        data={userList}
        renderItem={renderItem}
        keyExtractor={item => item.username}
      />
      <TouchableOpacity
        style={{
          backgroundColor: color.primary_color,
          position: 'absolute',
          height: normalization(50),
          width: normalization(50),
          borderRadius: 50,
          right: 10,
          bottom: 10,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => setPressed(!isPressed)}>
        <Text style={{color: 'white', fontSize: normalization(30)}}>
          {isPressed ? '-' : '+'}
        </Text>
      </TouchableOpacity>
      {isPressed && (
        <>
          <TouchableOpacity
            style={{
              position: 'absolute',
              height: normalization(40),
              width: normalization(40),
              borderRadius: 50,
              right: 20,
              bottom: 80,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: color.primary_color,
            }}>
            <IonIcons
              name="call"
              color={color.primary_color}
              size={normalization(20)}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={{
              position: 'absolute',
              height: normalization(40),
              width: normalization(40),
              borderRadius: 50,
              right: 20,
              bottom: 150,
              justifyContent: 'center',
              alignItems: 'center',
              borderWidth: 1,
              borderColor: color.primary_color,
            }}>
            <IonIcons
              name="videocam"
              color={color.primary_color}
              size={normalization(20)}
            />
          </TouchableOpacity>
        </>
      )}
    </>
  );
}
export default CallList;
