import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  inCartItems: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        inCartItems: [...state.inCartItems, action.payload.item],
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        inCartItems: [...state.inCartItems].filter(product => product.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
