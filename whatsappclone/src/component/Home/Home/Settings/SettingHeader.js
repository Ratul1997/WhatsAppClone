import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import color from '../../../../constant/color';
import normalization from '../../../../constant/normalize';
import AntDesign from 'react-native-vector-icons/AntDesign';

function SettingHeader(props) {
  const {title} = props;
  return (
    <>
      <View
        style={{
          backgroundColor: color.primary_color,
          height: normalization(40),
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          style={{width: '10%', marginLeft: normalization(10)}}
          onPress={() => props.goBack()}>
          <AntDesign
            name="arrowleft"
            size={normalization(20)}
            color={color.text_color_white}
          />
        </TouchableOpacity>
        <Text
          style={{color: color.text_color_white, fontSize: normalization(18)}}>
          {title}
        </Text>
      </View>
    </>
  );
}
export default SettingHeader;
