import React from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {GlobalStyles} from '../../Style/GlobalStyle';

export default function Loading() {
  return (
    <View
      style={[GlobalStyles('center', 'center').container, GlobalStyles().flex]}>
      <ActivityIndicator size={moderateScale(30)} color="blue" />
    </View>
  );
}
