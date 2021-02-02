import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {Color} from '../../../Shared/Style/Color';

const medium = 80;

export const RegisterStyles = StyleSheet.create({
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
    borderBottomWidth: moderateScale(1),
    borderBottomColor: 'white',
    color: 'white',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: moderateScale(10),
  },
  Margin: {
    marginTop: moderateScale(10),
  },
  BadgeStyle: {
    width: moderateScale(20),
    height: moderateScale(20),
    borderRadius: moderateScale(20),
    backgroundColor: Color.orange,
  },
});
