import React from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { ic_shopping_cart as inCartIcon } from "react-icons-kit/md/ic_shopping_cart";
import { shopping_cart_ok as addToCartIcon } from "react-icons-kit/ikons/shopping_cart_ok";
import "./AddToCartButton.css";
import { addItemToCart } from "../../../store/actions";

const AddToCartButton = props => {
  const {
    isFullWidth,
    itemId,
    iconOnly,
    additionalClasses,
    product,
    onAddItemToCart
  } = props;
  const isInCart = props.inCartItems.some(item => item._id === itemId);

  const buttonClassList = isInCart
    ? isFullWidth
      ? `button is-fullwidth is-warning add-to-cart-button ${additionalClasses} ${isInCart &&
          "tooltip"}`
      : `button is-warning add-to-cart-button ${additionalClasses} ${isInCart &&
          "tooltip"}`
    : isFullWidth
    ? `button is-fullwidth is-primary add-to-cart-button ${additionalClasses} ${isInCart &&
        "tooltip"}`
    : `button is-primary add-to-cart-button ${additionalClasses} ${isInCart &&
        "tooltip"}`;
  const buttonText = isInCart ? "in cart" : "Add To Cart";

  const addToCartClickHandler = e => {
    e.preventDefault();
    product.size = "S";
    onAddItemToCart(product);
  };

  return (
    <button
      onClick={addToCartClickHandler}
      className={buttonClassList}
      disabled={isInCart}
      data-tooltip={isInCart && "change quantity in cart"}
    >
      <Icon
        size={18}
        className="button-icon"
        icon={isInCart ? inCartIcon : addToCartIcon}
      />
      {iconOnly || <span>{buttonText}</span>}
    </button>
  );
};

const mapStateToProps = state => {
  return {
    inCartItems: state.cart.inCartItems
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItemToCart: item => dispatch(addItemToCart(item))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AddToCartButton);
