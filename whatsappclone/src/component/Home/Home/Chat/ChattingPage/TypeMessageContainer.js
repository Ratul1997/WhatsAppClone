/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import color from '../../../../../constant/color';
import normalization from '../../../../../constant/normalize';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AutoExpandingTextInput from './AutonExpandingTextInput';
import IonIcons from 'react-native-vector-icons/Ionicons';
function TypeMessageContainer() {
  const [text, setText] = useState('');
  const trimWhiteSpace = str => {
    return str.trim();
  };
  return (
    <View
      style={{
        position: 'absolute',
        bottom: 5,
        flexDirection: 'row',
        marginHorizontal: normalization(10),
      }}>
      <View
        style={{
          width: '86%',
          backgroundColor: color.background_color,
          borderRadius: 20,
          flexDirection: 'row',
          marginRight: normalization(5),
        }}>
        <MaterialIcon
          name="insert-emoticon"
          color="gray"
          size={normalization(23)}
          style={{
            paddingLeft: normalization(8),
            paddingTop: normalization(8),
            paddingBottom: normalization(8),
            paddingRight: normalization(5),
            width: '12%',
            backgroundColor: 'transparent',
            alignSelf: 'flex-end',
          }}
        />
        <AutoExpandingTextInput
          placeholder="Type A Message"
          multiline
          numberOfLines={4}
          onChangeText={text => setText(text)}
          value={text}
        />
        <View
          style={{
            width: '25%',
            backgroundColor: 'transparent',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'flex-end',
            paddingBottom: normalization(9),
          }}>
          <Entypo
            name="attachment"
            size={normalization(18)}
            color="gray"
            style={{transform: [{rotateY: '180deg'}]}}
          />
          {trimWhiteSpace(text) === '' && (
            <Fontisto
              name="camera"
              size={normalization(18)}
              color="gray"
              style={{marginLeft: normalization(10)}}
            />
          )}
        </View>
      </View>
      <View
        style={{
          width: '14%',
          marginight: normalization(3),
          alignItems: 'flex-end',
          flexDirection: 'row',
          justifyContent: 'center',
        }}>
        <TouchableOpacity
          style={{
            width: normalization(35),
            backgroundColor: color.primary_color,
            height: normalization(35),
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
          }}>
          {trimWhiteSpace(text) != '' ? (
            <IonIcons
              name="ios-send-sharp"
              color={color.background_color}
              size={normalization(15)}
            />
          ) : (
            <FontAwesome
              name="microphone"
              size={normalization(20)}
              color={color.background_color}
            />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default TypeMessageContainer;
