import * as actionTypes from '../actionTypes/actionTypes';

export const addItemToCart = item => {
  return {
    type: actionTypes.ADD_ITEM_TO_CART,
    payload: {
      item,
    },
  };
};

export const removeItemFromCart = id => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_CART,
    payload: {
      id,
    },
  };
};
