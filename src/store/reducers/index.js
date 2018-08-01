import { combineReducers } from 'redux';
import cart from './cartReducer';
import wishList from './wishlistReducer';

const rootReducer = combineReducers({
  cart,
  wishList,
});

export default rootReducer;
