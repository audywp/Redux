import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import Roboto from './Roboto/Roboto';
import {Color} from '../../Shared/Style/Color';

export default function Button({
  color = 'black',
  title,
  fontSize = 18,
  onPress,
  width = 120,
  disabled,
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
    disabled: {
      backgroundColor: Color.grey,
      width: moderateScale(width),
      height: moderateScale(32),
      borderRadius: moderateScale(32),
      justifyContent: 'center',
      alignItems: 'center',
    },
  });

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={disabled ? ButtonStyle.disabled : ButtonStyle.container}>
      <Roboto color={color} title={title} size={fontSize} />
    </TouchableOpacity>
  );
}
