import React from 'react';
import {View, Text, Image, TouchableOpacity, Dimensions} from 'react-native';
import normalization from '../constant/normalize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import color from '../constant/color';
const imagePath = require('../Images/pr1.jpg');

const WIDTH = Dimensions.get('screen').width;

function ImagePlaceHolder(props) {
  return (
    <>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginHorizontal: normalization(10),
          marginVertical: normalization(15),
        }}>
        <Image
          source={imagePath}
          style={{
            height: normalization(100),
            width: normalization(100),
            borderRadius: 100,
          }}
        />
        <TouchableOpacity
          style={{
            backgroundColor: color.primary_color,
            height: normalization(30),
            width: normalization(30),
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            right: WIDTH / 2 - normalization(60),
            bottom: 0,
          }}>
          <FontAwesome name="camera" color="white" size={normalization(15)} />
        </TouchableOpacity>
      </View>
    </>
  );
}
export default ImagePlaceHolder;
