import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

const medium = 80;

export const LoginStyles = StyleSheet.create({
  topContainer: {
    backgroundColor: 'red',
    flex: 1,
  },

  image: {
    height: moderateScale(medium),
    width: moderateScale(medium),
  },
  textInput: {
    width: widthPercentageToDP(90),
    color: 'white',
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: moderateScale(10),
  },
  Margin: {
    marginTop: moderateScale(10),
  },
});
