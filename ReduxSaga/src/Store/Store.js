import {createStore, applyMiddleware} from 'redux';
import {persistStore, persistReducer} from 'redux-persist';

// middleware
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';

// storage
import AsyncStorage from '@react-native-async-storage/async-storage';

// allReducer
import {AllReducer} from './Reducer/combineReducer';

// saga
import AllSaga from './Saga';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const SagaMiddleware = createSagaMiddleware();

// register saga middleware
const AllMiddleware = applyMiddleware(SagaMiddleware, logger);

// subtitute persist config and reducer
const PersistedReducer = persistReducer(persistConfig, AllReducer);

// creating Store
export const Store = createStore(PersistedReducer, AllMiddleware);

// create Current Store persisted
export const Persistor = persistStore(Store);

// run saga middleware
SagaMiddleware.run(AllSaga);
