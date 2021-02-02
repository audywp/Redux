export const GET_MENU = 'GET_MENU';
export const SET_MENU = 'SET_MENU';
export const SET_EMAIL = 'SET_EMAIL';
export const GET_GENRES = 'GET_GENRES';
export const SET_GENRES = 'SET_GENRES';

export const getListMenu = () => {
  return {
    type: GET_MENU,
  };
};

export const setListMenu = (payload) => {
  return {
    type: SET_MENU,
    payload,
  };
};

export function changeEmail(email) {
  return {
    type: 'SET_EMAIL',
    email,
  };
}

export const getGenres = (payload) => {
  return {
    type: GET_GENRES,
    payload,
  };
};

export const setListGenres = (payload) => {
  return {
    type: SET_GENRES,
    payload: payload,
  };
};
