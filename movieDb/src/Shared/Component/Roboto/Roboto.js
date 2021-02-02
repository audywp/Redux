import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {connect} from 'react-redux';

const mapStateToProps = (state) => ({
  theme: state.GlobalReducer.theme,
});

const mapDispatchToProps = {};

function Roboto({
  title,
  size = 14,
  type = 'Regular',
  color = 'white',
  style,
  theme,
}) {
  const styles = StyleSheet.create({
    textStyle: {
      fontFamily: `Roboto-${type}`,
      fontSize: moderateScale(size),
      color: color,
      ...style,
    },
  });

  return <Text style={styles.textStyle}>{title}</Text>;
}

export default connect(mapStateToProps, mapDispatchToProps)(Roboto);
