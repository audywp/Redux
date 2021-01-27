import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {LoginReducer} from '../Login/reducer';

export const AllReducer = combineReducers({
  GlobalReducer,
  LoginReducer,
});
