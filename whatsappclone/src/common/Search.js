import React, {useState} from 'react';
import {TextInput, View, Text} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';
import normalization from '../constant/normalize';
import color from '../constant/color';
function Search(props) {
  const [searchText, setSearchText] = useState('');
  const {placeholder} = props;

  return (
    <View
      style={{
        flexDirection: 'row',
        backgroundColor: color.searchbar_color,
        marginHorizontal: normalization(10),
        alignItems: 'center',
        height: normalization(35),
        borderRadius: 10,
      }}>
      <IonIcons
        name="search"
        size={normalization(20)}
        color={color.searcicon_color}
        style={{paddingHorizontal: normalization(8)}}
      />
      <TextInput
        placeholder={placeholder}
        onChangeText={text => setSearchText(text)}
      />
    </View>
  );
}
export default Search;
