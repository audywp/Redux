export const LOGIN = 'LOGIN';
export const SET_TOKEN = 'SET_TOKEN';
export const REMOVE_PASSWORD = 'REMOVE_PASSWORD';

export const ActionLogin = (payload) => {
  return {
    type: LOGIN,
    email: payload.email,
    password: payload.password,
  };
};

export const SetToken = (token) => {
  return {
    type: SET_TOKEN,
    token,
  };
};

export const RemoveCredentials = () => {
  return {
    type: REMOVE_PASSWORD,
  };
};
