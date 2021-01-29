import {combineReducers} from 'redux';

// Reducer - Reducer
import {GlobalReducer} from './GlobalReducer';
import {Home} from './HomeReducer';
import {Login} from './LoginReducer';

export const AllReducer = combineReducers({GlobalReducer, Home, Login});
