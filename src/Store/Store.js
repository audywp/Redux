import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AllReducer} from './CombineReducer';
import logger from 'redux-logger';

const persistConfig = {
  key: 'rnclass',
  storage: AsyncStorage,
  //   blacklist : ["GlobalReducer", "LoginReducer"]  // <-- jika reducer tidak ingin di persist, masukan kedalam list blacklist
};

const persistedReducer = persistReducer(persistConfig, AllReducer);

export const Store = createStore(persistedReducer, applyMiddleware(logger));
export const Persistor = persistStore(Store);
