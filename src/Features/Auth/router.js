import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
// component
import Login from './Login/Login';
import Register from './Register/Register';
import LandingPages from './LandingPage/LandingPages';

const AuthStack = createStackNavigator();

export default function AuthRouter() {
  return (
    <AuthStack.Navigator initialRouteName="LandingPages">
      <AuthStack.Screen
        component={Login}
        name="Login"
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        component={LandingPages}
        name="LandingPages"
        options={{headerShown: false}}
      />
      <AuthStack.Screen
        component={Register}
        name="Register"
        options={{headerShown: false}}
      />
    </AuthStack.Navigator>
  );
}
