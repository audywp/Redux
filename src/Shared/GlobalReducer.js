const intialState = {
  theme: false, // <-- jika false theme light, else theme dark,
  language: 'indonesia',
};

export const GlobalReducer = (state = intialState, action) => {
  switch (action.type) {
    case 'CHANGE_THEME':
      return {
        ...state,
        theme: !state.theme,
      };

    case 'CHANGE_LANGUAGE':
      return {
        ...state,
        language: action.language,
      };

    default:
      return state;
  }
};
