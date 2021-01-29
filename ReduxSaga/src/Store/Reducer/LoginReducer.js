// token string, refreshToken string, isLogged boolean

const stateke2 = {
  clearData: 'asdkjaskldj',
  sjgksdj: 'fgkjfkdjg',
};

const initialState = {
  token: '',
  refreshToken: '',
  isLogged: false,
  username: '',
  password: '',
  ...stateke2,
};

export const Login = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        username: action.payload.username,
        password: action.payload.password,
      };

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
        isLogged: true,
      };

    case 'LOG_OUT':
      return {
        ...state,
        token: '',
        refreshToken: '',
        isLogged: false,
        username: '',
        password: '',
      };

    default:
      return {
        ...state,
      };
  }
};
