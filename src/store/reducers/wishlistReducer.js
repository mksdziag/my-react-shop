import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  wishListItems: [],
};

const wishListReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_WISHLIST:
      console.log('adding TO WISHLIST');
      return {
        ...state,
        wishListItems: [...state.wishListItems, action.payload.id],
      };
    case actionTypes.REMOVE_ITEM_FROM_WISHLIST:
      console.log('removing FROM WISHLIST');
      return {
        ...state,
        wishListItems: [...state.wishListItems].filter(itemId => itemId !== action.payload.id),
      };
    default:
      return state;
  }
};

export default wishListReducer;
