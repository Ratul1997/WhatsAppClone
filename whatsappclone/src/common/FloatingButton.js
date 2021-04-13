import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import color from '../constant/color';
import normalization from '../constant/normalize';
function FloatingButton(props) {
  const {name, onClick} = props;
  return (
    <TouchableOpacity
      style={{
        backgroundColor: color.primary_color,
        position: 'absolute',
        bottom: 10,
        right: 10,
        height: normalization(40),
        width: normalization(40),
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      onPress={onClick}>
      <AntDesign
        name={name}
        color={color.background_color}
        size={normalization(20)}
      />
    </TouchableOpacity>
  );
}

export default FloatingButton;
