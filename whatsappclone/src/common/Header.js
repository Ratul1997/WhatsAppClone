/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View, TouchableOpacity, Dimensions} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import normalization from '../constant/normalize';
import color from '../constant/color';
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

function Header(props) {
  const {title} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: 'transparent',
        height: normalization(60),
        marginHorizontal: normalization(10),
        marginVertical: normalization(10),
        alignItems: 'flex-end',
      }}>
      <Text
        style={{
          fontWeight: 'bold',
          color: color.text_color,
          fontSize: normalization(20),
          width: '80%',
        }}>
        {title}
      </Text>

      {/* right side icons */}
      <View
        style={{
          width: '20%',
          flexDirection: 'row',
          justifyContent: 'flex-end',
        }}>
        {title === 'Chat' && (
          <TouchableOpacity
            style={{
              backgroundColor: color.primary_color,
              justifyContent: 'center',
              alignItems: 'center',
              borderRadius: 50,
              height: normalization(25),
              width: normalization(25),
              marginRight: normalization(8),
            }}>
            <AntDesign name="plus" size={normalization(18)} color="white" />
          </TouchableOpacity>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: color.primary_color,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            height: normalization(25),
            width: normalization(25),
          }}>
          {title === 'Chat' && (
            <Feather name="edit" size={normalization(15)} color="white" />
          )}
          {title === 'Calls' && (
            <Feather name="phone-call" size={normalization(15)} color="white" />
          )}
          {title === 'People' && (
            <Ionicons
              name="md-hand-left-outline"
              size={normalization(18)}
              color="white"
            />
          )}
          {
            title === 'Settings' && (
              <Feather name="settings" size={normalization(15)} color="white" />
            )
          }
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Header;
