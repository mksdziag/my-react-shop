import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './WishList.css';
import products from '../../database/products';

import AddToCartButton from '../UI/Buttons/AddToCartButton';
import Loader from '../UI/Loaders/Loader';
import WishListButton from '../UI/Buttons/WishListButton';

const WishList = props => {
  const { wishListIds, loading } = props;
  const wishListItems = [];

  for (let wishListItemId of wishListIds) {
    wishListItems.push(products.find(item => item.id === wishListItemId));
  }

  let wishListItemsOutput = (
    <div className="content">
      <h4 className="is-size-6 has-text-weight-light has-text-grey ">
        No items on your list yet...
      </h4>
    </div>
  );

  if (wishListItems.length > 0) {
    wishListItemsOutput = wishListItems.map(item => {
      const { id, pictures, name, price } = item;

      return (
        <li className="wish-list__item level columns is-mobile" key={id}>
          <div className="column is-relative is-hidden-mobile">
            <WishListButton itemId={id} />
          </div>
          <div className="column  is-paddingless  wish-list__item-cell">
            <Link to={`/product/${id}`}>
              <img src={pictures[0]} alt="" className="wish-list__item-image" />
            </Link>
          </div>
          <div className="column is-5 wish-list__item-cell">
            <Link
              to={`/product/${id}`}
              className="has-text-grey is-size-7 is-size-6-widescreen has-text-weight-semibold is-uppercase wish-list__item-name"
            >
              {name}
            </Link>
          </div>
          <div className="column wish-list__item-cell">
            <p className="has-text-danger has-text-weight-semibold wish-list__price">
              {price.toFixed(2)}$
            </p>
          </div>
          <div className="column wish-list__item-cell">
            <AddToCartButton
              iconOnly
              itemId={id}
              product={{ ...item }}
              additionalClasses={'is-small '}
            />
          </div>
        </li>
      );
    });
  }

  return <ul className="wish-list is-relative">{loading ? <Loader /> : wishListItemsOutput}</ul>;
};

const mapStateToProps = state => {
  return {
    wishListIds: state.wishList.wishListItems,
    loading: state.wishList.loading,
  };
};

export default connect(mapStateToProps)(WishList);
