import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../../../../constant/color';
import normalization from '../../../../../../constant/normalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
function ReceivedMessage() {
  return (
    <>
      <TouchableOpacity
        style={{
          alignItems: 'flex-start',
        }}>
        <View
          style={{
            backgroundColor: color.background_color,
            maxWidth: '80%',
            marginTop: normalization(5),
            marginLeft: normalization(13),
            paddingRight: normalization(5),
            minWidth: '20%',
            borderRadius: 5
          }}>
          <Text
            style={{
              fontSize: normalization(13),
              paddingTop: normalization(3),
              paddingBottom: normalization(10),
              paddingHorizontal: normalization(10),
              //   backgroundColor: 'red',
            }}>
            Hi I am ashdjksdjkh jkashd kjhkshdjk hjksdh kjsahk hsakjdhjas khdsahjsh akjdhaksj hdsa mndbmnabs d
           </Text>
          <Text
            style={{
              fontSize: normalization(10),
              position: 'absolute',
              right: 4,
              bottom: 0,
              color: 'gray',
            }}>
            10:15
          </Text>
        </View>
      </TouchableOpacity>
    </>
  );
}
export default ReceivedMessage;
