import React, {useState} from 'react';
import {TextInput} from 'react-native';
import normalization from '../../../../../constant/normalize';
export default function AutoExpandingTextInput(props) {
  const [text, setText] = useState('');
  const [height, setHeight] = useState(normalization(30));

  return (
    <TextInput
      {...props}
      multiline={true}
      onContentSizeChange={event => {
        setHeight(event.nativeEvent.contentSize.height);
      }}
      style={{
        width: '57%',
        backgroundColor: 'transparent',
        marginRight: normalization(3),
        height: normalization(Math.max(40, height)),
        maxHeight: normalization(85),
      }}
    />
  );
}
