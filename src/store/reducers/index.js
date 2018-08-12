import { combineReducers } from 'redux';
import cart from './cartReducer';
import wishList from './wishlistReducer';
import orders from './ordersReducer';
import user from './userReducer';
import info from './infoReducer';

const rootReducer = combineReducers({
  user,
  cart,
  wishList,
  orders,
  info,
});

export default rootReducer;
