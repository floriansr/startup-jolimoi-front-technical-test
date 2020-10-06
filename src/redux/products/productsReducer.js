import { SET_PRODUCTS } from 'redux/products/productsTypes';

const initialState = {
  data: [],
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PRODUCTS:
      return {
        ...state,
        data: action.details,
      };
    default:
      return state;
  }
};

export default productsReducer;
