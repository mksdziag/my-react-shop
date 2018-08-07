import React from 'react';
import { connect } from 'react-redux';

import './NavigationCartIndicator.css';

const NavigationCartIndicator = props => {
  const { inCartItems } = props;
  const qty = inCartItems.length;

  return (
    <div
      className={`has-background-white nav-cart-indicator ${qty && 'nav-cart-indicator__visible'}`}
    >
      <span className="is-size-7 has-text-weight-semibold has-text-grey nav-cart-indicator__qty">
        {qty}
      </span>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    inCartItems: state.cart.inCartItems,
  };
};

export default connect(mapStateToProps)(NavigationCartIndicator);
