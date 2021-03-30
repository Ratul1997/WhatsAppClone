/* eslint-disable react-native/no-inline-styles */
/* eslint-disable react/self-closing-comp */
import React from 'react';
import {Image, View, Text} from 'react-native';
import normalization from '../constant/normalize';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import color from '../constant/color';    
function PeopleListItem(props) {
  const {item, title} = props;
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        marginVertical: normalization(5),
      }}>
      <View style={{width: '18%'}}>
        <Image
          source={item.avatar_link}
          style={{
            height: normalization(45),
            width: normalization(45),
            borderRadius: 50,
          }}></Image>
      </View>
      <View
        style={{
          width: title === 'People' ? '82%' : '52%',
          justifyContent: 'center',
        }}>
        <Text style={{fontSize: normalization(15), fontWeight: 'bold'}}>
          {item.name}
        </Text>
        <Text style={{color: 'gray'}}>{item.last_massage}</Text>
      </View>

      {title != 'People' && (
        <View
          style={{
            width: '30%',
            flexDirection: 'row',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: '80%',
              backgroundColor: 'transparent',
              marginRight: normalization(5),
            }}>
            <Text
              style={{
                textAlign: 'right',
                marginVertical: normalization(5),
                color: color.primary_color,
              }}>
              14:16
            </Text>

            <View
              style={{
                backgroundColor: color.primary_color,
                height: normalization(18),
                borderRadius: 50,
                width: '20%',
                alignItems: 'center',
                marginLeft: '80%',
              }}>
              <Text
                style={{
                  color: color.text_color_white,
                  textAlign: 'right',
                  fontSize: normalization(12),
                }}>
                4
              </Text>
            </View>
          </View>
          <MaterialIcons
            name="keyboard-arrow-right"
            size={normalization(18)}
            style={{width: '20%'}}
          />
        </View>
      )}
    </View>
  );
}
export default PeopleListItem;
