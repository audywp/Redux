import React from 'react';
import {Provider} from 'react-redux';
import {LogBox, View} from 'react-native';
import Home from './src/Features/Home/Home';
import Store from './src/Store/Store';
import Login from './src/Features/Login/Login';

export default function App() {
  return (
    <Provider store={Store}>
      <Home />
      <Login />
    </Provider>
  );
}
