import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  inCartItems: [],
};

const cartReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ITEM_TO_CART:
      return {
        ...state,
        inCartItems: [
          ...state.inCartItems,
          { ...action.payload.item, quantity: action.payload.quantity },
        ],
      };
    case actionTypes.CHANGE_IN_CART_ITEM_QUANTITY:
      const itemWithChangedQty = state.inCartItems.find(
        product => product.id === action.payload.itemId
      );
      itemWithChangedQty.quantity = action.payload.quantity;
      return {
        ...state,
        inCartItems: [
          ...state.inCartItems.filter(product => product.id !== action.payload.itemId),
          itemWithChangedQty,
        ],
      };
    case actionTypes.CHANGE_IN_CART_ITEM_SIZE:
      const itemWithChangedSize = state.inCartItems.find(
        product => product.id === action.payload.itemId
      );
      itemWithChangedSize.size = action.payload.size;
      return {
        ...state,
        inCartItems: [
          ...state.inCartItems.filter(product => product.id !== action.payload.itemId),
          itemWithChangedSize,
        ],
      };
    case actionTypes.REMOVE_ITEM_FROM_CART:
      return {
        ...state,
        inCartItems: [...state.inCartItems].filter(product => product.id !== action.payload.id),
      };
    case actionTypes.EMPTY_CART:
      return {
        ...state,
        inCartItems: [],
      };
    default:
      return state;
  }
};

export default cartReducer;
