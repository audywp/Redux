const intialState = {
  theme: false, //jika false light, jika true dark
  language: 'indonesia',
  loading: false,
};

export const GlobalReducer = (state = intialState, action) => {
  console.log(action);
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: !state.theme,
      };
    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload,
      };
    case 'LOADING':
      return {
        ...state,
        loading: true,
      };
    case 'STOP_LOADING':
      return {
        ...state,
        loading: false,
      };

    default:
      return {
        ...state,
      };
  }
};
