import React from 'react';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/icomoon/heart';

import './WishListButton.css';

const WishListButton = props => {
  const { wishListChange, isOnWishList } = props;

  const onClichHandler = e => {
    e.preventDefault();
    wishListChange();
  };
  return (
    <div
      onClick={e => onClichHandler(e)}
      className="has-background-primary product-card__wishlist-add has-text-white"
    >
      <Icon
        className="product-card__wishlist-icon"
        style={{ color: isOnWishList && '#ff6666' }}
        size={24}
        icon={heart}
      />
    </div>
  );
};

export default WishListButton;
