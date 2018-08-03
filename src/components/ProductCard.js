import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { link } from 'react-icons-kit/icomoon/link';
import { eye } from 'react-icons-kit/icomoon/eye';

import './ProductCard.css';
import { addItemToCart } from '../store/actions';

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
    inCartItems,
    onAddItemToCart,
    onQuickViewOpenHandler,
  } = props;

  const addToCartClickHandler = e => {
    e.preventDefault();
    onAddItemToCart(props.product);
  };
  const onQuickViewClickHandler = e => {
    e.preventDefault();
    onQuickViewOpenHandler();
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
              iconOnly
            />
            <button
              className="button is-primary is-outlined product-card__figure-overlay-button"
              onClick={e => onQuickViewClickHandler(e)}
            >
              <Icon icon={eye} />
            </button>
          </div>
          <WishListButton itemId={id} />
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
        <AddToCartButton onClickHandler={addToCartClickHandler} isInCart={isInCart} />
        <Link to={`/product/${id}`} target="_blank" className="button is-primary is-outlined">
          <Icon className="button-icon" icon={link} />
          <span>New card</span>
        </Link>
      </footer>
    </div>
  );
};

const mapStateToProps = state => {
  return {
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
)(ProductCard);
