import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Roboto from '../Roboto/Roboto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';

export function SmallCard({title = 'title', onPress}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={styles.container}
      activeOpacity={0.8}>
      <MaterialCommunityIcons
        name="movie-outline"
        color="black"
        size={moderateScale(20)}
      />
      <Roboto style={styles.TextStyle} title={title} color="black" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    backgroundColor: 'white',
    marginRight: moderateScale(20),
    paddingHorizontal: moderateScale(8),
    height: moderateScale(28),
    alignItems: 'center',
    borderRadius: moderateScale(4),
  },
  TextStyle: {
    marginLeft: moderateScale(8),
  },
});
