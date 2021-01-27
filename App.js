import 'react-native-gesture-handler';
import React from 'react';
import {Provider} from 'react-redux';

//  redux
import {Store, Persistor} from './src/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';

// navigation
import {Navigator} from './src/Shared/Navigator';
import {NavigationContainer} from '@react-navigation/native';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <NavigationContainer>
          <Navigator />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
