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

const App = () => {
  
  return (
    <View style={{backgroundColor: color.background_color}}>
      <Header title="Calls"/>
    </View>
  );
};

export default App;
