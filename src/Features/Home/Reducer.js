const initialState = {
  listFood: [],
  listHarga: [],
  loading: false,
  profile: {},
};

export const HomeReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'FETCH_DATA_FOOD':
      return {
        ...state,
        listFood: action.payload,
      };
    case 'FETCH_DATA_HARGA':
      return {
        ...state,
        listFood: action.payload,
      };
    case 'REMOVE_FOOD_LIST':
      return {
        ...state,
        listFood: [],
      };

    case 'SET_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'REMOVE_LOADING':
      return {
        ...state,
        loading: action.payload,
      };
    case 'REMOVE_DATA_COSTUMER':
      return {
        state,
      };

    default:
      return state;
  }
};
