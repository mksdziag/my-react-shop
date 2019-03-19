import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { shopping_cart } from "react-icons-kit/ikons/shopping_cart";

import "./FloatingCart.css";

const FloatingCart = props => {
  const { inCartItems } = props;
  const qty = inCartItems.length;

  return (
    <Link to="/cart">
      <div className="has-background-primary floating-cart">
        <Icon
          className="has-text-white floating-cart__icon"
          icon={shopping_cart}
          size={32}
        />
        <div className="has-background-white  floating-cart__quantity-indicator">
          <span className="has-text-grey has-text-weight-semibold floating-cart__quantity">
            {qty}
          </span>
        </div>
      </div>
    </Link>
  );
};

const mapStateToProps = state => {
  return {
    inCartItems: state.cart.inCartItems
  };
};

export default connect(mapStateToProps)(FloatingCart);
