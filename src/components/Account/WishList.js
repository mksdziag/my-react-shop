import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './WishList.css';
import productsDB from '../../database/products';

import AddToCartButton from '../UI/Buttons/AddToCartButton';
import { addItemToCart } from '../../store/actions';

const WishList = props => {
  const { wishListIds, onAddItemToCart, inCartItems } = props;

  const wishListItems = [];
  for (let wishListItemId of wishListIds) {
    wishListItems.push(productsDB.find(item => item.id === wishListItemId));
  }

  let wishListItemsOutput = (
    <div className="content">
      <h4>No items on your list Yet</h4>
      <p>add them to youyr list by clicking in heart icon on product.</p>
    </div>
  );

  if (wishListItems.length > 0) {
    wishListItemsOutput = wishListItems.map(item => {
      const { id, picture, name, price } = item;
      const isInCart = inCartItems.some(itemInCart => itemInCart.id === id);

      return (
        <li className="wish-list__item" key={id}>
          <div className="wish-list__item-cell">
            <Link to={`/product/${id}`}>
              <img src={picture} alt="" className="wish-list__item-image" />
            </Link>
          </div>
          <div className="wish-list__item-cell">
            <Link
              to={`/product/${id}`}
              className="has-text-grey has-text-weight-semibold is-uppercase wish-list__item-name"
            >
              {name}
            </Link>
          </div>
          <div className="wish-list__item-cell">
            <p className="wish-list__price">{price}</p>
          </div>
          <div className="wish-list__item-cell">
            <AddToCartButton
              iconOnly
              onClickHandler={() => onAddItemToCart(item)}
              isInCart={isInCart}
            />
          </div>
        </li>
      );
    });
  }

  return <ul className="wish-list">{wishListItemsOutput}</ul>;
};

const mapStateToProps = state => {
  return {
    wishListIds: state.wishList.wishListItems,
    inCartItems: state.cart.inCartItems,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItemToCart: item => dispatch(addItemToCart(item)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(WishList);
