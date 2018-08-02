import React from 'react';

import './CartSummary.css';

const CartSummary = props => {
  const { total } = props;
  return (
    <div className="column is-4 cart-summary">
      <div className="box">
        <header className="cart-summary__header">
          <h3 className="title cart-summary__title">Cart Summary</h3>
        </header>
        <p className="cart-summary__price">Total: {total.toFixed(2)}$</p>
        <p className="cart-summary__shipping">Shipping: 5$</p>
        <p className="cart-summary__to-pay">{`To pay: ${(total + 5).toFixed(2)}$`}</p>
        <button className="button is-success is-medium is-fullwidth">Confirm Your Order</button>
      </div>
    </div>
  );
};

export default CartSummary;
