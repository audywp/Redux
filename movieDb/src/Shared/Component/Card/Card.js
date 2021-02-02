import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Roboto from '../Roboto/Roboto';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {moderateScale} from 'react-native-size-matters';
import FastImage from 'react-native-fast-image';
import {Color} from '../../Style/Color';
import Entypo from 'react-native-vector-icons/Entypo';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {GlobalStyles} from '../../Style/GlobalStyle';
import {widthPercentageToDP} from 'react-native-responsive-screen';

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

export function BigCard({
  image,
  desc,
  totalMessage,
  title,
  year,
  genre,
  rating,
  poster,
  active = false,
  onPress,
}) {
  return (
    // header
    <View style={styles.BigCardContainer}>
      <FastImage
        source={{uri: image}}
        style={styles.imageContainer}
        resizeMode="contain"
      />
      {active ? (
        <View style={[styles.title, GlobalStyles('space-between').container]}>
          <Roboto title={title} size={16} type="Bold" color="black" />
          <View>
            <Roboto title={`${year} | ${genre}`} color="black" />
          </View>
        </View>
      ) : null}
      {/* body */}
      {active ? (
        <View
          style={[
            styles.centerContainer,
            GlobalStyles('space-between').container,
          ]}>
          <FastImage
            source={{uri: poster}}
            style={styles.poster}
            resizeMode="contain"
          />
          <View style={[styles.descContainer]}>
            <View
              style={[
                styles.starRating,
                GlobalStyles('space-between').container,
              ]}>
              <Entypo name="star" color="rgba(255, 194, 0, 0.98)" size={20} />
              <EvilIcons name="star" color="black" size={20} />
            </View>
            <Roboto title={desc} color="black" />
          </View>
        </View>
      ) : (
        <Roboto title={desc} color="black" />
      )}
      {/* footer */}
      <View
        style={[
          styles.footerContainer,
          GlobalStyles('space-between', 'center').container,
        ]}>
        <Ionicons
          name="chatbubble-outline"
          size={moderateScale(25)}
          color="black"
        />
        <TouchableOpacity onPress={onPress}>
          <Entypo
            name={active ? 'chevron-up' : 'chevron-down'}
            size={moderateScale(25)}
            color="black"
          />
        </TouchableOpacity>
        <Ionicons name="share-social" size={moderateScale(25)} color="black" />
      </View>
    </View>
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
  imageContainer: {
    width: moderateScale(300),
    height: moderateScale(170),
    borderRadius: moderateScale(8),
    alignSelf: 'center',
    marginTop: moderateScale(10),
    marginBottom: moderateScale(20),
    elevation: 10,
  },
  title: {
    borderBottomWidth: moderateScale(1),
    borderBottomColor: Color.grey,
    paddingBottom: moderateScale(10),
    flexDirection: 'row',
  },
  poster: {
    width: moderateScale(90),
    height: moderateScale(135),
  },

  BigCardContainer: {
    backgroundColor: 'white',
    marginVertical: moderateScale(20),
    borderRadius: moderateScale(12),
    paddingHorizontal: widthPercentageToDP(4),
  },
  centerContainer: {
    flexDirection: 'row',
  },
  descContainer: {
    width: moderateScale(200),
    marginLeft: moderateScale(10),
  },
  starRating: {
    alignSelf: 'flex-end',
    flexDirection: 'row',
    width: moderateScale(60),
    marginBottom: moderateScale(10),
  },
  footerContainer: {
    flexDirection: 'row',
    paddingVertical: moderateScale(20),
    paddingHorizontal: moderateScale(8),
  },
});
