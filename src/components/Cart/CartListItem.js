import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_remove_shopping_cart as cartRemove } from 'react-icons-kit/md/ic_remove_shopping_cart';

import './CartListItem.css';

const CartListItem = props => {
  const { idx, name, price, onItemRemove, pieces } = props;

  const onQtyChange = () => {
    console.log('zmiana');
  };

  return (
    <li className="cart-item box">
      <div className="cart-item__cell">
        <p className="cart-item__lp">{idx + 1}</p>
      </div>
      <div className="cart-item__cell">
        <div className="field">
          <div className="control">
            <input
              className="input is-primary"
              type="number"
              value={pieces}
              placeholder="quantity"
              onChange={onQtyChange}
            />
          </div>
        </div>
      </div>
      <div className="cart-item__cell">
        <p className="cart-item__size">size: S</p>
      </div>
      <div className="cart-item__cell">
        <p className="cart-item__name">product: {name}</p>
      </div>
      <div className="cart-item__cell">
        <p className="has-text-weight-semibold cart-item__price">price: {price}</p>
      </div>
      <div className="cart-item__cell">
        <div className="cart-item_a_ctions">
          <button onClick={onItemRemove} className="button is-small is-danger is-uppercase">
            <Icon size={18} icon={cartRemove} />
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
