export const ActionLogin = (username, password) => {
  return {
    type: 'LOGIN',
    payload: {username, password},
  };
};

export const LoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    payload: data,
  };
};
