import {applyMiddleware, createStore} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AllReducer} from './combineReducer';
import {SagaWatcher} from './SagaWatcher';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const SagaMiddleware = createSagaMiddleware();

const allMiddleware = applyMiddleware(SagaMiddleware, logger);

const persistedReducer = persistReducer(persistConfig, AllReducer);

export const Store = createStore(persistedReducer, allMiddleware);

export const Persistor = persistStore(Store);

SagaMiddleware.run(SagaWatcher);

// React native init
// Create Your Structure Folder
// Create a reducer
// combine reducer
// Crate Store config
