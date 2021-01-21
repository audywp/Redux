import {createStore} from 'redux';
import {AllReducer} from './reducer';

const Store = createStore(AllReducer);

export default Store;
