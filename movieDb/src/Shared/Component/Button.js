import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

export default function Button({title, style, onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={ButtonStyle.container}>
      <Text style={ButtonStyle.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
}

const ButtonStyle = StyleSheet.create({
  container: {},
  textStyle: {},
});
