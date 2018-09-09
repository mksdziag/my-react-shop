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
      return {
        ...state,
        inCartItems: [
          ...state.inCartItems.filter(product => product.id !== action.payload.itemId),
          {
            ...state.inCartItems.find(product => product.id === action.payload.itemId),
            quantity: action.payload.quantity,
          },
        ],
      };
    case actionTypes.CHANGE_IN_CART_ITEM_SIZE:
      return {
        ...state,
        inCartItems: [
          ...state.inCartItems.filter(product => product.id !== action.payload.itemId),
          {
            ...state.inCartItems.find(product => product.id === action.payload.itemId),
            size: action.payload.size,
          },
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
