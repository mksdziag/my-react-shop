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
    if (isOnWishList) {
      onRemoveItemFromWishList(userEmail, itemId);
    } else {
      onAddItemToWishList(userEmail, itemId);
    }
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
