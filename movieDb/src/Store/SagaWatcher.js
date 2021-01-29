import {all} from 'redux-saga/effects';
import {LoginSaga} from '../Features/Auth/Login/Redux/LoginSaga';
import {HomeSaga} from '../Features/MainScreens/Home/Redux/Saga';

export function* SagaWatcher() {
  yield all([LoginSaga(), HomeSaga()]);
}
