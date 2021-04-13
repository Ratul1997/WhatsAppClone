import React from 'react';
import {View, Text, Dimensions} from 'react-native';
import color from '../../../constant/color';
import normalization from '../../../constant/normalize';

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;

function OtpView(props) {
  const {height} = props;

  const newWidth = WIDTH * 3;
  const newHeight = newWidth;
  const newBorderRadius = newWidth / 2;
  return (
    <View
      style={{
        backgroundColor: color.background_color,
        position: 'absolute',
        width: newWidth,
        height: newHeight,
        left: -WIDTH / 1.05,
        borderRadius: newBorderRadius,
        top: height / 5,
      }}></View>
  );
}
export default OtpView;
