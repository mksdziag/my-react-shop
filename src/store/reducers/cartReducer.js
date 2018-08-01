import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  inCartItems: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      console.log('adding');
      return {
        ...state,
        inCartItems: [...state.inCartItems, action.payload.id],
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      console.log('removing');
      return {
        ...state,
        inCartItems: [...state.inCartItems].filter(item => item.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default cartReducer;
