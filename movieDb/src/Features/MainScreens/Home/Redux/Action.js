export const GET_MENU = 'GET_MENU';
export const SET_MENU = 'SET_MENU';

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
