import {all, call, put, takeLatest} from 'redux-saga/effects';

// url
import {loginUrl, endpointBarengan} from '../endPoint';
import * as Navigation from '../../../../Shared/Nav';

// action
import {SetToken, RemoveCredentials, setListMenu} from './Action';
import {getListMenu} from '../../../MainScreens/Home/Redux/Action';

// type
import {GET_MENU} from './Action';
import {Alert} from 'react-native';
import {request} from '../../../../Helpers/Api';
import {setLoading} from '../../../../Store/GlobalAction';

function* Login({email, password}) {
  try {
    yield put(setLoading(true));
    const response = yield call(request, `${loginUrl}`, 'POST', {
      body: {
        email,
        password,
      },
    });
    if (response.status) {
      yield put(SetToken(response.data.data.api_token));
      yield put(RemoveCredentials());
      yield put(getListMenu());
      yield Navigation.navigate({
        name: 'Main',
        params: {},
      });
    } else {
      Alert.alert('error', 'Wrong Credentials');
    }
  } catch (error) {
    console.log(error);
  } finally {
    yield put(setLoading(false));
  }
}

export function* LoginSaga() {
  yield all([takeLatest('LOGIN', Login)]);
}
