import React, { Component } from 'react';

import './CartListItem.css';

const CartListItem = props => {
  const { idx, name, price } = props;

  return (
    <li className="cart-item box">
      <div className="cart-item__cell">
        <p className="cart-item__lp">{idx + 1}</p>
      </div>
      <div className="cart-item__cell">
        <p className="cart-item__qty">ilosc: 1</p>
      </div>
      <div className="cart-item__cell">
        <p className="cart-item__name">{name}</p>
      </div>
      <div className="cart-item__cell">
        <p className="cart-item__price">{price}</p>
      </div>
      <div className="cart-item__cell">
        <div className="cart-item_a_ctions">
          <button className="button is-danger is-uppercase">remove item</button>
        </div>
      </div>
    </li>
  );
};

export default CartListItem;
