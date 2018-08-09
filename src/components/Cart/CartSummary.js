import React from 'react';

import './CartSummary.css';

const CartSummary = props => {
  const { total, onConfirmOrder, shippingCost, orderingisabled } = props;
  return (
    <div className="column is-4 cart-summary">
      <div className="box">
        <header className="header has-text-uppercase cart-summary__header">
          <h3 className="title is-size-4 cart-summary__title">Cart Summary</h3>
        </header>
        <br />
        <p className="cart-summary__price ">Total: {total.toFixed(2)}$</p>
        <p className="cart-summary__shipping">Shipping: {shippingCost.toFixed(2)}$</p>
        <p className="cart-summary__to-pay has-text-weight-semibold">{`To pay: ${(
          total + shippingCost
        ).toFixed(2)}$`}</p>
        <br />
        <button
          onClick={onConfirmOrder}
          disabled={orderingisabled}
          className="button is-success is-medium is-fullwidth"
        >
          {orderingisabled ? 'regiser or log in first' : 'Confirm Your Order'}
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
