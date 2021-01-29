import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

// router
import {AuthRouter} from '../Features/Auth/AuthRouter';
import {MainRouter} from '../Features/MainScreens/MainNavigator';
import {Store} from '../Store/Store';

const Stack = createStackNavigator();

export const Navigator = ({navigation, route}) => {
  const {isLogged} = Store.getState().LoginReducer;
  return (
    <Stack.Navigator initialRouteName={isLogged ? 'Main' : 'Auth'}>
      <Stack.Screen
        component={AuthRouter}
        name="Auth"
        options={{headerShown: false}}
      />

      <Stack.Screen
        component={MainRouter}
        name="Main"
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};
