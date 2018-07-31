import React from 'react';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/icomoon/heart';

const WishListButton = () => {
  return (
    <div className="has-background-primary product-card__wishlist-add has-text-white">
      <Icon className="product-card__wishlist-icon" size={24} icon={heart} />
    </div>
  );
};

export default WishListButton;
