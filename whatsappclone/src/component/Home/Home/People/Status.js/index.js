/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Image, TouchableOpacity, Text} from 'react-native';
import normalization from '../../../../../constant/normalize';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../../../../constant/color';
function Status() {
  return (
    <View
      style={{
        height: normalization(50),
        marginHorizontal: normalization(10),
        marginVertical: normalization(20),
        flexDirection: 'row',
        borderBottomColor:color.border_color,
        borderBottomWidth:1
      }}>
      <View style={{width: '18%'}}>
        <Image
          source={require('../../../../../Images/pr1.jpg')}
          style={{
            height: normalization(45),
            width: normalization(45),
            borderRadius: 50,
          }}></Image>
        <TouchableOpacity
          style={{
            backgroundColor: color.primary_color,
            position: 'absolute',
            right: normalization(10),
            bottom: normalization(6),
            borderRadius: 50,
          }}>
          <AntDesign name="plus" size={normalization(18)} color="white" />
        </TouchableOpacity>
      </View>

      <View style={{width: '52%', justifyContent: 'center'}}>
        <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
          My Status
        </Text>
        <Text style={{color: 'gray'}}>Update Status</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '30%',
          justifyContent: 'flex-end',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{
            backgroundColor: color.primary_color,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 50,
            height: normalization(25),
            width: normalization(25),
            marginRight: normalization(15),
          }}>
          <Feather name="camera" size={normalization(15)} color="white" />
        </TouchableOpacity>
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
          <Feather name="edit-2" size={normalization(15)} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
export default Status;
