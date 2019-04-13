import { combineReducers } from "redux";
import cart from "./cartReducer";
import wishList from "./wishlistReducer";
import orders from "./ordersReducer";
import user from "./userReducer";
import info from "./infoReducer";

import { LOG_OUT_USER } from "../actionTypes/actionTypes";

const appReducer = combineReducers({
  user,
  cart,
  wishList,
  orders,
  info
});

const rootReducer = (state, action) => {
  if (action.type === LOG_OUT_USER) {
    state = undefined;
  }
  return appReducer(state, action);
};

export default rootReducer;
