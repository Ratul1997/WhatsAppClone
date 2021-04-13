import React from 'react';
import {View, Text, TouchableHighlight, FlatList} from 'react-native';
import normalization from '../../../../../constant/normalize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import color from '../../../../../constant/color';
function ProfileInformation() {
  return (
    <>
      <View
        style={{
          backgroundColor: 'transparent',
          flex: 1,
        }}>
        <TouchableHighlight
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: normalization(15),
            paddingVertical: normalization(15),
          }}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log('ok')}>
          <>
            <FontAwesome
              name="user"
              style={{width: '10%'}}
              size={normalization(20)}
              color={color.primary_color}
            />
            <View style={{width: '80%'}}>
              <Text style={{color: 'gray', fontSize: normalization(12)}}>
                Name
              </Text>
              <Text style={{fontSize: normalization(14)}}>Ratul</Text>
              <Text style={{fontSize: normalization(10), color: 'gray'}}>
                This is not your username or pin. This name will be visible to
                yours whatsApp contacts.
              </Text>
            </View>
            <Feather
              name="edit-2"
              style={{width: '10%'}}
              size={normalization(18)}
              color={color.primary_color}
            />
          </>
        </TouchableHighlight>

        <TouchableHighlight
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: normalization(15),
            paddingVertical: normalization(15),
          }}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log('ok')}>
          <>
            <Feather
              name="info"
              style={{width: '10%'}}
              size={normalization(20)}
              color={color.primary_color}
            />
            <View style={{width: '80%'}}>
              <Text style={{color: 'gray', fontSize: normalization(12)}}>
                About
              </Text>
              <Text style={{fontSize: normalization(14)}}>I am Busy</Text>
            </View>
            <Feather
              name="edit-2"
              style={{width: '10%'}}
              size={normalization(18)}
              color={color.primary_color}
            />
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: normalization(15),
            paddingVertical: normalization(15),
          }}
          activeOpacity={0.6}
          underlayColor="#DDDDDD"
          onPress={() => console.log('ok')}>
          <>
            <Feather
              name="phone-call"
              style={{width: '10%'}}
              size={normalization(20)}
              color={color.primary_color}
            />
            <View style={{width: '80%'}}>
              <Text style={{color: 'gray', fontSize: normalization(12)}}>
                Phone
              </Text>
              <Text style={{fontSize: normalization(14)}}>+8801515279018</Text>
            </View>
          </>
        </TouchableHighlight>
      </View>
    </>
  );
}
export default ProfileInformation;
