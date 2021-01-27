import {all} from 'redux-saga/effects';
import {LoginSaga} from '../../Features/Auth/Login/SagaLogin';

export function* AllSaga() {
  yield all([LoginSaga()]);
}
