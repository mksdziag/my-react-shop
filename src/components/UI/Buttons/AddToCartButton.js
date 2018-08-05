import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_shopping_cart as inCartIcon } from 'react-icons-kit/md/ic_shopping_cart';
import { ic_add_shopping_cart as addToCartIcon } from 'react-icons-kit/md/ic_add_shopping_cart';

import './AddToCartButton.css';

const AddToCartButton = props => {
  const { isFullWidth, onClickHandler, isInCart, iconOnly, additionalClasses } = props;

  const buttonClassList = isInCart
    ? isFullWidth
      ? `button is-fullwidth is-warning add-to-cart-button ${additionalClasses}`
      : `button is-warning add-to-cart-button ${additionalClasses}`
    : isFullWidth
      ? `button is-fullwidth is-primary add-to-cart-button ${additionalClasses}`
      : `button is-primary add-to-cart-button ${additionalClasses}`;
  const buttonText = isInCart ? 'in cart' : 'Add To Cart';

  return (
    <button onClick={onClickHandler} className={buttonClassList}>
      <Icon size={18} className="button-icon" icon={isInCart ? inCartIcon : addToCartIcon} />
      {iconOnly || <span>{buttonText}</span>}
    </button>
  );
};

export default AddToCartButton;
