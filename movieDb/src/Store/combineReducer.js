import {combineReducers} from 'redux';
import {GlobalReducer} from './GlobalReducer';
import {LoginReducer} from '../Features/Auth/Login/Redux/LoginReducer';
import {HomeReducer} from '../Features/MainScreens/Home/Redux/HomeReducer';

export const AllReducer = combineReducers({
  GlobalReducer,
  LoginReducer,
  HomeReducer,
});
