import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';

export const GlobalStyles = (
  JustifyContent = 'center',
  AlignItems = 'center',
) => {
  return StyleSheet.create({
    flex: {
      flex: 1,
    },
    container: {
      justifyContent: JustifyContent,
      alignItems: AlignItems,
    },
    paddingHorizontal: {
      paddingHorizontal: widthPercentageToDP(4),
    },
  });
};
