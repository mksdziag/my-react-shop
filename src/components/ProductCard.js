import React from 'react';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { link } from 'react-icons-kit/icomoon/link';
import { cart } from 'react-icons-kit/icomoon/cart';
import { eye } from 'react-icons-kit/icomoon/eye';

import './ProductCard.css';

import WishListButton from './UiElements/Buttons/WishListButton';

const ProductCard = ({ id, name, picture, category, manufacturer, onQuickViewOpenHandler }) => {
  const addToCartClickHandler = e => {
    e.preventDefault();
    console.log('to cart');
  };
  const onQuickViewClickHandler = e => {
    e.preventDefault();
    onQuickViewOpenHandler();
  };

  return (
    <div className="card product-card">
      <div className="card-image product-card__image-holder">
        <figure className="image product-card__figure ">
          <img className="product-card__image" src={picture} alt="product" />
        </figure>
        <Link to={`/product/${id}`}>
          <div className="product-card__figure-overlay">
            <button
              className="button is-primary product-card__figure-overlay-button"
              onClick={e => addToCartClickHandler(e)}
            >
              <Icon icon={cart} />
            </button>
            <button
              className="button is-primary is-outlined product-card__figure-overlay-button"
              onClick={e => onQuickViewClickHandler(e)}
            >
              <Icon icon={eye} />
            </button>
          </div>
          <WishListButton />
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
        <button className="button is-primary">
          <Icon className="button-icon" icon={cart} />Add To Cart
        </button>
        <Link to={`/product/${id}`} target="_blank" className="button is-primary is-outlined">
          <Icon className="button-icon" icon={link} />
          New card
        </Link>
      </footer>
    </div>
  );
};

export default ProductCard;
