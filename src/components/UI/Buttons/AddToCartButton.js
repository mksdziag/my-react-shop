import React from 'react';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/icomoon/cart';
import { checkmark } from 'react-icons-kit/icomoon/checkmark';

import './AddToCartButton.css';

const AddToCartButton = props => {
  const { onClickHandler, isInCart, iconOnly } = props;
  return (
    <button
      onClick={e => onClickHandler(e)}
      className={`button ${isInCart ? 'is-warning' : 'is-primary'}`}
    >
      <Icon className="button-icon" icon={isInCart ? checkmark : cart} />
      {iconOnly ? null : <span>{isInCart ? 'in cart' : 'Add To Cart'}</span>}
    </button>
  );
};

export default AddToCartButton;
