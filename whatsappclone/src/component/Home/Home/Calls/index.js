import React from 'react';
import {Text, View} from 'react-native';
import Header from '../../../../common/Header';
import CallList from './CallList';

function Calls(props) {

  const {navigation} = props
  return (
    <>
      <Header title="Calls" />
      <CallList navigation={navigation}/>
    </>
  );
}
export default Calls;
