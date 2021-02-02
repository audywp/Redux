import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Roboto from './Roboto/Roboto';

export default function Button({
  color = 'black',
  title,
  fontSize = 18,
  onPress,
  width = 120,
}) {
  const ButtonStyle = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      width: moderateScale(width),
      height: moderateScale(32),
      borderRadius: moderateScale(32),
      justifyContent: 'center',
      alignItems: 'center',
    },
    textStyle: {
      color: 'white',
    },
  });

  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyle.container}>
      <Roboto color={color} title={title} size={fontSize} />
    </TouchableOpacity>
  );
}
