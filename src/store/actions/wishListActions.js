import * as actionTypes from '../actionTypes/actionTypes';

export const addItemToWishList = id => {
  return {
    type: actionTypes.ADD_ITEM_TO_WISHLIST,
    payload: {
      id,
    },
  };
};

export const removeItemFromWishList = id => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_WISHLIST,
    payload: {
      id,
    },
  };
};
