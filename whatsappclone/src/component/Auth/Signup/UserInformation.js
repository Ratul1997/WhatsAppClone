import React, {useState} from 'react';
import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import ImagePlaceHolder from '../../../common/ImagePlaceHolder';
import normalization from '../../../constant/normalize';
import color from '../../../constant/color';
import FloatingButton from '../../../common/FloatingButton';
function UserInformation(props) {
  const {route, navigation} = props;
  const {phoneNumber, countryCode} = route.params;
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const onClick = e => {
    navigation.replace('Congratulation');
  };
  return (
    <>
      <View>
        <ImagePlaceHolder />
        <TextInput
          placeholder="Type your name"
          style={{
            marginHorizontal: normalization(10),
            backgroundColor: color.searchbar_color,
            borderRadius: 10,
            padding: 10,
            textAlign: 'center',
            marginVertical: normalization(15),
          }}
          onChangeText={text => setName(text)}
        />

        <TextInput
          placeholder="About yourself"
          style={{
            marginHorizontal: normalization(10),
            backgroundColor: color.searchbar_color,
            borderRadius: 10,
            padding: 10,
            textAlign: 'center',
            textAlignVertical: 'top',
          }}
          numberOfLines={5}
          onChangeText={text => setAbout(text)}
        />
      </View>

      <FloatingButton name="arrowright" onClick={onClick} />
    </>
  );
}

export default UserInformation;
