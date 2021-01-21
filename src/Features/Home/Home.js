import React, {useState} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {ActionRedux} from '../../Store/action';
import Store from '../../Store/Store';

export default function Home() {
  const [FetchStatus, setFetchStatus] = useState(false);
  console.log(Store.getState());

  const changeReduxAction = () => {
    if (FetchStatus) {
      ActionRedux('REMOVE_FOOD_LIST');
    } else {
      ActionRedux('FETCH_DATA_FOOD', ['Bakmi', 'Somay', 'Batagor']);
      ActionRedux('LOGIN', {
        token: 'askjksfhgkfdjhgfkhjskahda',
        refreshToken: 'gjhfdkljkgfljhlkfgjlkasjdhjaksd',
      });
    }
    setFetchStatus(!FetchStatus);
    console.log(Store.getState());
  };

  return (
    <TouchableOpacity onPress={changeReduxAction}>
      <Text>Home</Text>
      {Store.getState().HomeReducer.listFood.map((value, index) => {
        return <Text key={`${index}`}>{value}</Text>;
      })}
    </TouchableOpacity>
  );
}
