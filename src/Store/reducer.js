import {combineReducers} from 'redux';
import {HomeReducer} from '../Features/Home/Reducer';
import {LoginReducer} from '../Features/Login/Reducer';

export const AllReducer = combineReducers({
  HomeReducer,
  LoginReducer,
});
