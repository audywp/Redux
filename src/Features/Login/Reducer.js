const initialState = {
  token: '',
  refreshToken: '',
  isLogged: false,
};

export const LoginReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        token: action.payload.token,
        refreshToken: action.payload.refreshToken,
      };
    default:
      return state;
  }
};
