// listContent array, loading boolean, profile object
const initialState = {
  listContent: [],
  profile: {},
};

export const Home = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_LIST':
      return {
        ...state,
        listContent: action.payload,
      };

    case 'GET_PROFILE':
      return {
        ...state,
        profile: action.payload,
      };

    default:
      return {
        ...state,
      };
  }
};
