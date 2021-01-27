const intialState = {
  theme: 'light',
  language: 'indonesia',
  isLoading: false,
};

export const GlobalReducer = function (state = intialState, action) {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.theme,
      };

    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};
