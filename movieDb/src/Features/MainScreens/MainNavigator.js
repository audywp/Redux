import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './Home/Home';

const MainStack = createStackNavigator();

export const MainRouter = ({navigation, route}) => {
  return (
    <MainStack.Navigator initialRouteName="Home">
      <MainStack.Screen
        component={Home}
        name="Home"
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
};
