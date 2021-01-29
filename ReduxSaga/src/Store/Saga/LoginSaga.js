import axios from 'axios';
import {Alert} from 'react-native';
import {takeLatest, put, all} from 'redux-saga/effects';
import {LoginSuccess} from '../Action/ActionLogin';

function* Login(payload) {
  try {
    console.log('is work ?', payload);
    const res = yield axios.post('https://resep-mau.herokuapp.com/api/login', {
      email: payload.payload.username,
      password: payload.payload.password,
    });
    console.log(res);
    if (res.data.message === 'login successful') {
      yield put(
        LoginSuccess({
          token: res.data.data.api_token,
          refreshToken: 'ashdjkahgsjdhasjkd',
        }),
      );
    } else {
      Alert.alert('Credential salah');
    }
  } catch (error) {
    console.log(error);
  }
}

function* LogOut() {
  yield put({
    type: 'LOG_OUT',
  });
}

export function* sagaLogin() {
  yield all([takeLatest('LOGIN', Login), takeLatest('LOG_OUT', LogOut)]);
}
