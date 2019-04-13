import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  orders: [],
  loading: false
};

const ordersReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.CREATE_NEW_ORDER:
      return {
        ...state,
        orders: [...state.orders, action.payload.order]
      };
    case actionTypes.REMOVE_ORDER:
      return {
        ...state,
        orders: [...state.orders].filter(
          order => order._id !== action.payload._id
        )
      };
    case actionTypes.FETCH_ORDERS_SUCCESS:
      return {
        ...state,
        loading: false,
        orders: [...action.payload.orders]
      };
    case actionTypes.FETCH_ORDERS_ACTIVE:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
};

export default ordersReducer;
