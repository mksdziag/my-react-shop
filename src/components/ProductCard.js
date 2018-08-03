import React from 'react';
import { connect } from 'react-redux';
import { addItemToCart, addItemToWishList, removeItemFromWishList } from '../store/actions';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { link } from 'react-icons-kit/icomoon/link';
import { eye } from 'react-icons-kit/icomoon/eye';

import './ProductCard.css';

import WishListButton from './UI/Buttons/WishListButton';
import AddToCartButton from './UI/Buttons/AddToCartButton';

const ProductCard = props => {
  const {
    product: {
      id,
      name,
      picture,
      // category,
      manufacturer,
    },
    onQuickViewOpenHandler,
    onAddItemToCart,
    wishListItems,
    onAddItemToWishList,
    onRemoveItemFromWishList,
    inCartItems,
  } = props;

  const addToCartClickHandler = e => {
    e.preventDefault();
    onAddItemToCart(props.product);
  };
  const onQuickViewClickHandler = e => {
    e.preventDefault();
    onQuickViewOpenHandler();
  };

  const isOnWishList = wishListItems.includes(id);
  const changeProductWishListStatus = () => {
    if (isOnWishList) {
      onRemoveItemFromWishList(id);
    } else {
      onAddItemToWishList(id);
    }
  };
  const isInCart = inCartItems.some(item => item.id === id);

  return (
    <div className="card product-card">
      <div className="card-image product-card__image-holder">
        <figure className="image product-card__figure ">
          <img className="product-card__image" src={picture} alt="product" />
        </figure>
        <Link to={`/product/${id}`}>
          <div className="product-card__figure-overlay">
            <AddToCartButton
              onClickHandler={e => addToCartClickHandler(e)}
              isInCart={isInCart}
              iconOnly={true}
            />
            <button
              className="button is-primary is-outlined product-card__figure-overlay-button"
              onClick={e => onQuickViewClickHandler(e)}
            >
              <Icon icon={eye} />
            </button>
          </div>
          <WishListButton
            isOnWishList={isOnWishList}
            wishListChange={changeProductWishListStatus}
          />
        </Link>
      </div>
      <div className="card-content product-card__info">
        <Link to={`/product/${id}`}>
          <p className="title is-4 product-card__name">{name}</p>
        </Link>
        <Link to={`/manufacturer/${manufacturer}`}>
          <p className="subtitle is-6 product-card__manufacturer">{manufacturer}</p>
        </Link>
      </div>
      <footer className="product-card__actions">
        <AddToCartButton onClickHandler={e => addToCartClickHandler(e)} isInCart={isInCart} />
        <Link to={`/product/${id}`} target="_blank" className="button is-primary is-outlined">
          <Icon className="button-icon" icon={link} />
          New card
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    wishListItems: state.wishList.wishListItems,
    inCartItems: state.cart.inCartItems,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onAddItemToCart: item => dispatch(addItemToCart(item)),
    onAddItemToWishList: id => dispatch(addItemToWishList(id)),
    onRemoveItemFromWishList: id => dispatch(removeItemFromWishList(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductCard);
