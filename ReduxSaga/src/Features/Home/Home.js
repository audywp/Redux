import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Store} from '../../Store/Store';

export default function Home() {
  const [SyaratAjah, setThis] = React.useState(false);

  const onPressed = () => {
    Store.dispatch({
      type: 'PURGE',
    });
    console.log(Store.getState());
    setThis(!SyaratAjah);
  };
  return (
    <TouchableOpacity onPress={onPressed}>
      <Text>
        {Store.getState().GlobalReducer.theme ? 'Dark mode' : 'Light Mode'}
      </Text>
    </TouchableOpacity>
  );
}
