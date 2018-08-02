import React from 'react';

import './CartListItem.css';

const CartListItem = props => {
  const { idx, name, price, onItemRemove, pieces } = props;

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
              onChange={() => console.log('zmiana')}
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
        <p className="cart-item__price">price: {price}</p>
      </div>
      <div className="cart-item__cell">
        <div className="cart-item_a_ctions">
          <button onClick={onItemRemove} className="button is-small is-danger is-uppercase">
            remove item
          </button>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
