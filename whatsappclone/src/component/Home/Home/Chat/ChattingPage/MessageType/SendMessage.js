import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../../../../constant/color';
import normalization from '../../../../../../constant/normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {calculation} from '../../../../../../helpers/calculation';
function SendMessage({data}) {
  ///type 0 = unsent
  ///type 1 = sent
  /// type 2 = seen
  const initializeStatus = 0;
  const [messageStatus, setMessageStatus] = useState(initializeStatus);

  const selectIconColor = type => {
    return type === 2 ? color.seen_icon_color : 'gray';
  };
  const selectIcon = type => {
    return type === 2 ? 'ios-checkmark-done' : 'checkmark';
  };
  return (
    <>
      <TouchableOpacity
        style={{
          alignItems: 'flex-end',
        }}>
        <View
          style={{
            backgroundColor: color.chat_send_background_color,
            maxWidth: '80%',
            marginTop: normalization(5),
            marginRight: normalization(13),
            paddingRight: normalization(5),
            minWidth: '20%',
            borderRadius: 5,
          }}>
          <Text
            style={{
              fontSize: normalization(13),
              paddingTop: normalization(3),
              paddingBottom: normalization(10),
              paddingHorizontal: normalization(10),
              //   backgroundColor: 'red',
            }}>
            {data.msg}
          </Text>
          <Text
            style={{
              fontSize: normalization(10),
              position: 'absolute',
              right: normalization(18),
              bottom: 0,
              color: 'gray',
            }}>
            {calculation.convertTimeToDate(data.time)}
          </Text>
          {messageStatus === 0 ? (
            <AntDesign
              name="clockcircleo"
              style={{position: 'absolute', right: normalization(3), bottom: 0}}
              size={normalization(11)}
              color={selectIconColor(2)}
            />
          ) : (
            <Ionicons
              name={selectIcon(2)}
              style={{position: 'absolute', right: normalization(3), bottom: 0}}
              size={normalization(15)}
              color={selectIconColor(messageStatus)}
            />
          )}
        </View>
      </TouchableOpacity>
    </>
  );
}
export default SendMessage;
