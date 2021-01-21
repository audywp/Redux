import React, {useState} from 'react';
import {View, Text} from 'react-native';
import Store from '../../Store/Store';

export default function Login() {
  const [Token, setToken] = useState(Store.getState().LoginReducer.token);

  return (
    <View>
      <Text>{Token}</Text>
    </View>
  );
}
