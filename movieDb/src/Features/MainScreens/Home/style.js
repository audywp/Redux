import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';

export const HomeStyles = StyleSheet.create({
  inputStyle: {
    backgroundColor: 'white',
    borderRadius: moderateScale(16),
  },
  inputContainer: {
    backgroundColor: '#000',
    marginTop: moderateScale(10),
    paddingHorizontal: 0,
  },
  GenreListDesc: {
    flexDirection: 'row',
    marginVertical: moderateScale(10),
    alignItems: 'center',
  },
});
