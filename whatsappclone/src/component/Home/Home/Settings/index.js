import React from 'react';
import {
  Text,
  View,
  TouchableHighlight,
  Image,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Header from '../../../../common/Header';
import normalization from '../../../../constant/normalize';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import color from '../../../../constant/color';
import SettingsData from '../../../../helpers/Data/SettingsData';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IonIcons from 'react-native-vector-icons/Ionicons';

const image_path = require('../../../../Images/pr1.jpg');

function Settings(props) {
  const {navigation} = props;

  const renderItem = ({item, index}) => {
    return (
      <TouchableHighlight
        style={{
          flexDirection: 'row',
          paddingHorizontal: normalization(10),
          paddingVertical: normalization(10),
        }}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => console.log('Pressed')}>
        <>
          <View
            style={{
              width: '18%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {item.key != 2 ? (
              <IonIcons
                name={item.icon_name}
                size={normalization(20)}
                color={color.primary_color}
              />
            ) : (
              <FontAwesome5
                name={item.icon_name}
                size={normalization(20)}
                color={color.primary_color}
              />
            )}
          </View>
          <View style={{width: '82%'}}>
            <Text style={{fontSize: normalization(16)}}>{item.type}</Text>
            <Text style={{color: 'gray'}}>{item.details}</Text>
          </View>
        </>
      </TouchableHighlight>
    );
  };
  return (
    <>
      <Header title="Settings" />
      <TouchableHighlight
        style={{flexDirection: 'row', padding: normalization(10)}}
        activeOpacity={0.6}
        underlayColor="#DDDDDD"
        onPress={() => navigation.navigate('Profile')}>
        <>
          <TouchableOpacity style={{width: '20%'}}>
            <Image
              source={image_path}
              style={{
                height: normalization(50),
                width: normalization(50),
                borderRadius: 50,
              }}
            />
          </TouchableOpacity>
          <View
            style={{
              flexDirection: 'column',
              width: '70%',
              justifyContent: 'center',
            }}>
            <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
              Ratul Bhowmick
            </Text>
            <Text>Busy</Text>
          </View>
          <TouchableOpacity
            style={{
              width: '10%',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <FontAwesome
              name="qrcode"
              size={normalization(20)}
              color={color.primary_color}
            />
          </TouchableOpacity>
        </>
      </TouchableHighlight>
      <FlatList
        style={{backgroundColor: 'transparent'}}
        data={SettingsData}
        keyExtractor={item => item.key}
        renderItem={renderItem}
      />
    </>
  );
}
export default Settings;
