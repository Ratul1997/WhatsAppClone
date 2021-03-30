import React from 'react';
import {View, ImageBackground, Text, Image} from 'react-native';
function BackGroundContainer(props) {
  return (
    <ImageBackground
      style={{height: '100%', width: '100%'}}
      source={require('../Images/background.png')}>
      {props.children}
    </ImageBackground>
  );
}
export default BackGroundContainer;
