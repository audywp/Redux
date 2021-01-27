import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Store} from '../Store/Store';

export default function Login() {
  console.log(Store.getState());

  const onpress = () => {
    Store.dispatch({
      type: 'LOGIN_SUCCESS',
    });

    console.log(Store.getState());
  };

  return (
    <TouchableOpacity onPress={onpress}>
      <Text>Login</Text>
    </TouchableOpacity>
  );
}
