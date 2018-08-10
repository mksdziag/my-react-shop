import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  wishListItems: [],
};

const wishListReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_WISHLIST:
      return {
        ...state,
        wishListItems: [...state.wishListItems, action.payload.id],
      };
    case actionTypes.REMOVE_ITEM_FROM_WISHLIST:
      return {
        ...state,
        wishListItems: [...state.wishListItems].filter(itemId => itemId !== action.payload.id),
      };
    case actionTypes.FETCH_WISHLIST:
      return {
        ...state,
        wishListItems: [...action.payload.wishList],
      };
    default:
      return state;
  }
};

export default wishListReducer;
