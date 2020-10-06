import { SET_PRODUCTS } from 'redux/products/productsTypes';

export const setProducts = (data) => {
  return {
    type: SET_PRODUCTS,
    details: data,
  };
};
