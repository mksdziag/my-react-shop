import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/icomoon/cart';

import './FloatingCart.css';

const FloatingCart = props => {
  const { inCartItems } = props;
  return (
    <Link to="/cart">
      <div className="floating-cart has-background-primary">
        <Icon className="floating-cart__icon has-text-white" icon={cart} size={32} />
        <div className="floating-cart__quantity-indicator has-background-white ">
          <span className="floating-cart__quantity has-text-grey has-text-weight-semibold ">
            {inCartItems.length}
          </span>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    inCartItems: state.cart.inCartItems,
  };
};

export default connect(
  mapStateToProps,
  null
)(FloatingCart);
