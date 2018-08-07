import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  orders: [],
};

const ordersReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload.order],
      };
    case actionTypes.REMOVE_ORDER:
      return {
        ...state,
        orders: [...state.orders].filter(order => order.id !== action.payload.id),
      };
    default:
      return state;
  }
};

export default ordersReducer;
