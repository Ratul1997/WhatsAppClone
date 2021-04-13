import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import color from '../../../constant/color';
import OtpView from './OtpView';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import normalization from '../../../constant/normalize';
import FloatingButton from '../../../common/FloatingButton';

const HEIGHT = Dimensions.get('window').height;
function Signup(props) {
  const {navigation} = props;
  const [height, setHeight] = useState(HEIGHT);
  const [phoneNumber, setPhoneNumber] = useState('');
  const [countryCode, setCountryCode] = useState('+880')
  const onClick = () => {
    navigation.replace('UserInformation', {phoneNumber, countryCode});
  };
  return (
    <View
      style={{backgroundColor: color.primary_color, flex: 1}}
      onLayout={event => {
        setHeight(event.nativeEvent.layout.height);
      }}>
      <OtpView height={height} />
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'transparent',
          height: '25%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <FontAwesome
          name="whatsapp"
          size={normalization(30)}
          color={color.background_color}
        />
        <Text
          style={{
            fontSize: normalization(23),
            color: color.background_color,
            paddingHorizontal: normalization(10),
          }}>
          WhatsApp
        </Text>
      </View>
      <View
        style={{
          height: '75%',
          marginHorizontal: normalization(15),
          marginTop: normalization(25),
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: normalization(15),
            fontWeight: 'bold',
          }}>
          Enter your mobile number to login or register.
        </Text>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: normalization(15),
            alignItems: 'center',
          }}>
          <TouchableOpacity
            style={{
              backgroundColor: 'transparent',
              width: '10%',
              borderBottomColor: color.primary_color,
              borderBottomWidth: 1,
              height: normalization(35),
              justifyContent: 'center',
              marginRight: normalization(5),
            }}>
            <Text style={{fontSize: normalization(13)}}>{countryCode}</Text>
          </TouchableOpacity>
          <TextInput
            placeholder="Type Here"
            style={{
              width: '80%',
              height: normalization(35),
              borderBottomColor: color.primary_color,
              borderBottomWidth: 1,
            }}
            keyboardType="numeric"
            value={phoneNumber}
            onChangeText={text => setPhoneNumber(text)}
          />
        </View>
      </View>
      <FloatingButton name="arrowright" onClick={onClick} />
    </View>
  );
}
export default Signup;
