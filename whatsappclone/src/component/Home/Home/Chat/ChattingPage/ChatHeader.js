import React from 'react';
import {
  View,
  ImageBackground,
  Text,
  Image,
  TouchableOpacity,
} from 'react-native';
import normalization from '../../../../../constant/normalize';
import color from '../../../../../constant/color';
import IonIcons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';

const imagepath = require('../../../../../Images/profile_image.png');
function ChatHeader(props) {
  const {userActivity, userName, navigation, avatar} = props;
  // console.log(props);
  return (
    <View
      style={{
        height: normalization(50),
        flexDirection: 'row',
        backgroundColor: color.primary_color,
        alignItems: 'center',
      }}>
      <TouchableOpacity
        style={{width: '7%', marginLeft: normalization(5)}}
        onPress={() => navigation.goBack()}>
        <IonIcons
          name="chevron-back-outline"
          size={normalization(20)}
          color={color.background_color}
        />
      </TouchableOpacity>
      <TouchableOpacity style={{width: '14%'}}>
        <Image
          source={avatar ? avatar : imagepath}
          style={{
            height: normalization(40),
            width: normalization(40),
            borderRadius: 50,
          }}
        />
      </TouchableOpacity>
      <View style={{width: '47%'}}>
        <Text
          style={{
            color: 'white',
            fontWeight: 'bold',
            fontSize: normalization(15),
          }}>
          {userName}
        </Text>
        <Text style={{color: '#DBDFDB', fontSize: normalization(10)}}>
          {userActivity}
        </Text>
      </View>
      <View
        style={{
          width: '30%',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
        }}>
        <IonIcons
          name="videocam-outline"
          size={normalization(20)}
          color={color.background_color}
        />
        <IonIcons
          name="call-outline"
          size={normalization(17)}
          color={color.background_color}
        />
        <Entypo
          name="dots-three-vertical"
          size={normalization(15)}
          color={color.background_color}
        />
      </View>
    </View>
  );
}
export default ChatHeader;
