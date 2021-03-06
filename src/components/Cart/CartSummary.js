import React from 'react';

import './CartSummary.css';

const CartSummary = props => {
  const { pricesSum, onConfirmOrder, shippingCost, orderingDisabled } = props;
  return (
    <div className="column is-4 cart-summary">
      <div className="box">
        <header className="header has-text-uppercase cart-summary__header">
          <h3 className="title is-size-4 cart-summary__title">Cart Summary</h3>
        </header>
        <br />
        <p className="cart-summary__price ">Total: {pricesSum.toFixed(2)}$</p>
        <p className="cart-summary__shipping">Shipping: {shippingCost.toFixed(2)}$</p>
        <p className="cart-summary__to-pay has-text-weight-semibold">{`To pay: ${(
          pricesSum + shippingCost
        ).toFixed(2)}$`}</p>
        <br />
        <button
          onClick={onConfirmOrder}
          disabled={orderingDisabled}
          className="button is-success is-medium is-fullwidth"
        >
          {orderingDisabled
            ? pricesSum === 0
              ? 'your cart is empty'
              : 'log in to place order'
            : 'confirm order'}
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
