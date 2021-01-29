import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
// router
import {Navigator} from './src/Shared/Navigator';

// redux
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Persistor, Store} from './src/Store/Store';
import {navigationRef} from './src/Shared/Nav';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer ref={navigationRef}>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
