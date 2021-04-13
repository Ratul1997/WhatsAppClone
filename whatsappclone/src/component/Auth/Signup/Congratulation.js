import React from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import color from '../../../constant/color';
import normalization from '../../../constant/normalize';
import Feather from 'react-native-vector-icons/Feather';
function Congratulation(props) {
  const {navigation} = props;
  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Feather
        name="check-circle"
        size={normalization(60)}
        color={color.primary_color}
      />
      <Text
        style={{
          fontSize: normalization(20),
          fontWeight: 'bold',
          marginVertical: normalization(10),
        }}>
        Congratulation
      </Text>
      <Text>Your account has been successfully created.</Text>
      <TouchableOpacity
        style={{
          backgroundColor: color.primary_color,
          height: normalization(25),
          width: normalization(100),
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
          marginVertical: normalization(10),
        }}
        onPress={() =>
          navigation.replace('LoginScreen', {
            screen: 'TabNavigation',
          })
        }>
        <Text
          style={{color: color.text_color_white, fontSize: normalization(15)}}>
          Done
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default Congratulation;
