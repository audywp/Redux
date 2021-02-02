import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
// router
import {Navigator} from './src/Shared/Navigator';

import {navigationRef} from './src/Shared/Nav';
import {Color} from './src/Shared/Style/Color';

export default function Root() {
  const MyTheme = {
    dark: false,
    colors: {
      primary: Color.darkBlue,
      background: '#000',
      card: 'rgb(255, 255, 255)',
      text: '#fff',
      border: 'rgb(199, 199, 204)',
      notification: 'rgb(255, 69, 58)',
    },
  };
  return (
    <NavigationContainer theme={MyTheme} ref={navigationRef}>
      <Navigator />
    </NavigationContainer>
  );
}
