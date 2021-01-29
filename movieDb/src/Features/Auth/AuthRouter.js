import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from './Login/Login';
import Register from './Register/Register';

const AuthStack = createStackNavigator();

export const AuthRouter = ({navigation, route}) => {
  return (
    <AuthStack.Navigator initialRouteName="Login">
      <AuthStack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
};
