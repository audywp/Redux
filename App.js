import React from 'react';
import {View, Text} from 'react-native';
import Home from './src/Home/Home';
import Login from './src/Login/Login';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {Store, Persistor} from './src/Store/Store';
import {connect} from 'react-redux';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <View
          style={{
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
          }}>
          <Home />
        </View>
      </PersistGate>
    </Provider>
  );
}
