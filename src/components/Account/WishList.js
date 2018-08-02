import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import products from '../../database/products';
import { addItemToCart } from '../../store/actions';
import './WishList.css';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/icomoon/cart';

const WishList = props => {
  const { wishListIds, onAddItemToCart } = props;
  const wishListItems = [];

  for (let id of wishListIds) {
    wishListItems.push(products.find(product => product.id === id));
  }

  return (
    <ul className="wish-list">
      {wishListItems.map(item => (
        <li className="wish-list__item" key={item.id}>
          <div className="wish-list__item-cell">
            <Link to={`/product/${item.id}`}>
              <img src={item.picture} alt="" className="wish-list__image" />
            </Link>
          </div>
          <div className="wish-list__item-cell">
            <Link
              to={`/product/${item.id}`}
              className="wish-list__name has-text-grey has-text-weight-semibold is-uppercase "
            >
              {item.name}
            </Link>
          </div>
          <div className="wish-list__item-cell">
            <p className="wish-list__price">{item.price}</p>
          </div>
          <div className="wish-list__item-cell">
            <button onClick={() => onAddItemToCart(item.id)} className="button is-primary is-small">
              <Icon className="button-icon" icon={cart} />Add To Cart
            </button>
          </div>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    wishListIds: state.wishList.wishListItems,
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
