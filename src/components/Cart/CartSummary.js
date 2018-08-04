import React from 'react';

import './CartSummary.css';

const CartSummary = props => {
  const { total } = props;
  return (
    <div className="column is-4 cart-summary">
      <div className="box">
        <header className="header has-text-uppercase cart-summary__header">
          <h3 className="title is-size-4 cart-summary__title">Cart Summary</h3>
        </header>
        <br />
        <p className="cart-summary__price ">Total: {total.toFixed(2)}$</p>
        <p className="cart-summary__shipping">Shipping: 5$</p>
        <p className="cart-summary__to-pay has-text-weight-semibold">{`To pay: ${(
          total + 5
        ).toFixed(2)}$`}</p>
        <br />
        <button className="button is-success is-medium is-fullwidth">Confirm Your Order</button>
      </div>
    </div>
  );
};

export default CartSummary;
