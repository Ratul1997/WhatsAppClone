/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import Header from './src/common/Header';
import color from './src/constant/color';
import Search from './src/common/Search';
import PeopleListItem from './src/common/PeopleListItem';
import Chat from './src/component/Home/Home/Chat';
import People from './src/component/Home/Home/People';
import ChattingPage from './src/component/Home/Home/Chat/ChattingPage';

const App = () => {
  return (
    <View style={{backgroundColor: color.background_color}}>
      <ChattingPage />
    </View>
  );
};

export default App;
