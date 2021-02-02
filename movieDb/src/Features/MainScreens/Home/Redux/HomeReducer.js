import {SET_MENU, SET_EMAIL, SET_GENRES} from './Action';

const intialState = {
  listMenu: [],
  listGenres: [],
  loading: false,
};

export const HomeReducer = (state = intialState, action) => {
  console.log(action, 'ini reducer Home');
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        listMenu: action.payload,
      };
    case SET_GENRES:
      return {
        ...state,
        listGenres: action.payload,
      };

    default:
      return state;
  }
};
