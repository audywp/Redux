import {all} from 'redux-saga/effects';
import {sagaLogin} from './LoginSaga';

export default function* AllSaga() {
  yield all([sagaLogin()]);
}
