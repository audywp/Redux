import {LOGIN, SET_TOKEN, REMOVE_PASSWORD, SET_MENU} from './Action';

const intialState = {
  email: '',
  password: '',
  token: '',
  isLogged: false,
};

export const LoginReducer = (state = intialState, action) => {
  console.log(action, 'ini reducer Login');
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        email: action.email,
        password: action.password,
      };

    case 'SET_EMAIL':
      return {
        ...state,
        email: action.email,
      };

    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
        isLogged: true,
      };
    case REMOVE_PASSWORD:
      return {
        ...state,
        password: null,
      };

    default:
      return state;
  }
};
