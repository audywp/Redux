import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Chat from './Chat/Chat';
import ContactList from './ContactList/Contact';
import Profile from './Profile/Profile';

const MainStack = createStackNavigator();

export default function MainRouter() {
  return (
    <MainStack.Navigator initialRouteName="Chat">
      <MainStack.Screen
        component={Chat}
        name="Chat"
        options={{headerShown: false}}
      />
      <MainStack.Screen
        component={ContactList}
        name="Contact"
        options={{headerShown: false}}
      />
      <MainStack.Screen
        component={Profile}
        name="Profile"
        options={{headerShown: false}}
      />
    </MainStack.Navigator>
  );
}
