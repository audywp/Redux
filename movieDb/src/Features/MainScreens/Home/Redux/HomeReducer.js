import {SET_MENU} from './Action';

const intialState = {
  listMenu: [],
};

export const HomeReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_MENU:
      return {
        ...state,
        listMenu: action.payload,
      };

    default:
      return state;
  }
};
