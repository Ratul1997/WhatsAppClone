/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Image, View, Text, TouchableHighlight} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import normalization from '../../../../../constant/normalize';
import color from '../../../../../constant/color';

const imagepath = require('../../../../../Images/profile_image.png');

const isOutGoingCall = false;
const isReceievedCall = true;

function CallListItem(props) {
  const {item, index, navigation} = props;

  return (
    <TouchableHighlight
      style={{
        flexDirection: 'row',
        width: '100%',
        marginVertical: normalization(5),
      }}
      onPress={() => console.log('Presed')}
      activeOpacity={0.6}
      underlayColor="#DDDDDD">
      <>
        <View style={{width: '18%'}}>
          <Image
            source={item.avatar_link ? item.avatar_link : imagepath}
            style={{
              height: normalization(45),
              width: normalization(45),
              borderRadius: 50,
            }}></Image>
        </View>
        <View
          style={{
            width: '52%',
            justifyContent: 'center',
          }}>
          <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
            {item.name}
          </Text>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons
              name={item.isOutGoingCall ? 'call-made' : 'call-received'}
              color={
                item.isOutGoingCall
                  ? 'green'
                  : item.isReceievedCall
                  ? 'green'
                  : 'red'
              }
              size={normalization(13)}
            />
            <Text style={{color: 'gray', marginLeft: normalization(5)}}>
              8 April, 3:19pm{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <MaterialIcons
            name={item.isVideoCall ? 'video-call' : 'call'}
            size={normalization(20)}
            color={color.primary_color}
          />
        </View>
      </>
    </TouchableHighlight>
  );
}
export default CallListItem;
