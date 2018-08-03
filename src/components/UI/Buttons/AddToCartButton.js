import React from 'react';
import { Icon } from 'react-icons-kit';
import { ic_shopping_cart as inCartIcon } from 'react-icons-kit/md/ic_shopping_cart';
import { ic_add_shopping_cart as addToCartIcon } from 'react-icons-kit/md/ic_add_shopping_cart';

import './AddToCartButton.css';

const AddToCartButton = props => {
  const { onClickHandler, isInCart, iconOnly } = props;

  const buttonClassList = isInCart
    ? 'button is-warning add-to-cart-button'
    : 'button is-primary add-to-cart-button';
  const buttonText = isInCart ? 'in cart' : 'Add To Cart';

  return (
    <button onClick={onClickHandler} className={buttonClassList}>
      <Icon size={18} className="button-icon" icon={isInCart ? inCartIcon : addToCartIcon} />
      {iconOnly || <span>{buttonText}</span>}
    </button>
  );
};

export default AddToCartButton;
