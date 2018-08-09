import { combineReducers } from 'redux';
import cart from './cartReducer';
import wishList from './wishlistReducer';
import orders from './ordersReducer';
import user from './userReducer';

const rootReducer = combineReducers({
  user,
  cart,
  wishList,
  orders,
});

export default rootReducer;
