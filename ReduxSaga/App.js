import React from 'react';
import {View, Text} from 'react-native';

// redux
import {Provider} from 'react-redux';
import {Store, Persistor} from './src/Store/Store';
import {PersistGate} from 'redux-persist/integration/react';
// component
import Home from './src/Features/Home/Home';
import Login from './src/Features/Login/Login';

export default function App() {
  return (
    <Provider store={Store}>
      <PersistGate persistor={Persistor}>
        <Home />
        <Login />
      </PersistGate>
    </Provider>
  );
}
