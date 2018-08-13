import React from 'react';
import { connect } from 'react-redux';
import { Icon } from 'react-icons-kit';
import { heart } from 'react-icons-kit/icomoon/heart';

import './WishListButton.css';
import { addItemToWishList, removeItemFromWishList } from '../../../store/actions';

const WishListButton = props => {
  const { userEmail, itemId, wishListItems, onAddItemToWishList, onRemoveItemFromWishList } = props;

  const isOnWishList = wishListItems.includes(itemId);
  const onClichHandler = e => {
    e.preventDefault();
    e.stopPropagation();
    if (isOnWishList) {
      onRemoveItemFromWishList(userEmail, itemId);
    } else {
      onAddItemToWishList(userEmail, itemId);
    }
  };

  const iconClasses = isOnWishList
    ? 'wishlist-button__icon has-text-danger'
    : 'wishlist-button__icon has-text-grey-lighter';

  return (
    <button
      onClick={e => onClichHandler(e)}
      className={`has-background-white product-card__wishlist-add has-text-white wishlist-button ${!userEmail &&
        'tooltip is-tooltip-left'}`}
      data-tooltip="Sign Up to add"
      disabled={userEmail === null}
    >
      <Icon className={iconClasses} size={24} icon={heart} />
    </button>
  );
};

const mapStateToProps = state => {
  return {
    wishListItems: state.wishList.wishListItems,
    userEmail: state.user.userEmail,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItemToWishList: (userEmail, id) => dispatch(addItemToWishList(userEmail, id)),
    onRemoveItemFromWishList: (userEmail, id) => dispatch(removeItemFromWishList(userEmail, id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishListButton);
