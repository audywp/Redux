const intialState = {
  username: '',
  password: '',
  isLogged: false,
};

export const LoginReducer = function (state = intialState, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.username,
        password: action.password,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        isLogged: true,
      };

    case 'LOG_OUT':
      return {
        ...state,
        isLogged: false,
      };

    default:
      return state;
  }
};
