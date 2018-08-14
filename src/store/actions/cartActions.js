import * as actionTypes from '../actionTypes/actionTypes';

export const addItemToCart = item => ({
  type: actionTypes.ADD_ITEM_TO_CART,
  payload: {
    item,
    quantity: 1,
  },
});

export const removeItemFromCart = id => ({
  type: actionTypes.REMOVE_ITEM_FROM_CART,
  payload: {
    id,
  },
});

export const changeInCartItemQuantity = (itemId, quantity) => ({
  type: actionTypes.CHANGE_IN_CART_ITEM_QUANTITY,
  payload: {
    itemId,
    quantity,
  },
});

export const removeAllItemsFromCart = () => ({
  type: actionTypes.EMPTY_CART,
});
