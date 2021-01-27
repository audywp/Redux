import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AuthRouter from '../Features/Auth/router';
import MainRouter from '../Features/MainRouter';

const Stack = createStackNavigator();

export const Navigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main">
      <Stack.Screen
        options={{headerShown: false}}
        component={AuthRouter}
        name="Auth"
      />
      <Stack.Screen
        options={{headerShown: false}}
        component={MainRouter}
        name="Main"
      />
    </Stack.Navigator>
  );
};
