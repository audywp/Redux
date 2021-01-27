import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

import createSagaMiddleware from 'redux-saga';

import {AllSaga} from './WatcherSaga/WatcherSaga';

import logger from 'redux-logger';

import AsyncStorage from '@react-native-async-storage/async-storage';

import {AllReducers} from './Reducer/CombineReducer';

const SagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'chatapps',
  storage: AsyncStorage,
};

const PersistedReducer = persistReducer(persistConfig, AllReducers);

export const Store = createStore(
  PersistedReducer,
  applyMiddleware(SagaMiddleware, logger),
);
export const Persistor = persistStore(Store);

SagaMiddleware.run(AllSaga);

// wait yaa lagi gak jelas ini connection, or im gonna use other method, ok . lets continue
