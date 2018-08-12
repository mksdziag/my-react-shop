import * as actionTypes from '../actionTypes/actionTypes';

export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: {
    item,
  },
});

export const removeItemFromCart = id => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: {
    id,
  },
});

export const removeAllItemsFromCart = () => ({
  type: actionTypes.EMPTY_CART,
});
