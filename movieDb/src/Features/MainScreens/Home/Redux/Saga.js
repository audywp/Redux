import {Alert} from 'react-native';
import {all, takeLatest, put, call} from 'redux-saga/effects';
import {GET_MENU, setListMenu} from './Action';

import {request} from '../../../../Helpers/Api';
import {endpointBarengan} from '../../../Auth/Login/endPoint';

function* getMenu() {
  const response = yield call(request, `${endpointBarengan}`, 'GET');
  console.log(response);
  if (response.status) {
    yield put(setListMenu(response.data.data));
  } else {
    Alert.alert('error', 'Wrong Credentials');
  }
}

export function* HomeSaga() {
  yield all([takeLatest(GET_MENU, getMenu)]);
}
