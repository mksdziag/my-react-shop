import { combineReducers } from 'redux';
import cart from './cartReducer';
import wishList from './wishlistReducer';
import orders from './ordersReducer';

const rootReducer = combineReducers({
  cart,
  wishList,
  orders,
});

export default rootReducer;
