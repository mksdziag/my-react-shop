import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { circleRight } from 'react-icons-kit/icomoon/circleRight';
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
      pictures,
      // category,
      manufacturer,
      price,
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
        <Link to={`/product/${id}`}>
          <figure className="image product-card__figure ">
            <img className="product-card__image" src={pictures[0]} alt="product" />
            <div className=" is-overlay product-card__figure-overlay">
              <div className="product-card__overlay-actions">
                <AddToCartButton
                  onClickHandler={e => addToCartClickHandler(e)}
                  isInCart={isInCart}
                  iconOnly
                />
                <button
                  className="button is-primary product-card__figure-overlay-button"
                  onClick={e => onQuickViewClickHandler(e)}
                >
                  <Icon icon={eye} />
                </button>
              </div>
            </div>
            <WishListButton itemId={id} />
          </figure>
        </Link>
      </div>
      <div className="card-content product-card__info">
        <Link to={`/product/${id}`}>
          <p className="title is-5 product-card__name ">{name}</p>
        </Link>
        <Link to={`/manufacturer/${manufacturer}`}>
          <p className="subtitle is-7 has-text-dark-grey product-card__manufacturer has-text-right is-italic">
            {manufacturer}
          </p>
        </Link>
        <div className="columns is-centered">
          <div className="column is-4-touch is-4 has-text-centered has-text-danger has-text-weight-semibold product-card__price">
            {price.toFixed(2)}$
          </div>
        </div>
      </div>
      <footer className="product-card__actions">
        <AddToCartButton isFullWidth onClickHandler={addToCartClickHandler} isInCart={isInCart} />
        <Link to={`/product/${id}`} className="button is-fullwidth is-primary is-outlined">
          <Icon className="button-icon" icon={circleRight} />
          <span>open</span>
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
