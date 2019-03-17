import React from "react";
import { Link } from "react-router-dom";
import { Icon } from "react-icons-kit";
import { circleRight } from "react-icons-kit/icomoon/circleRight";
import { eye } from "react-icons-kit/icomoon/eye";

import "./ProductCard.css";

import WishListButton from "./UI/Buttons/WishListButton";
import AddToCartButton from "./UI/Buttons/AddToCartButton";
import DiscountInfo from "./DiscountInfo";

const ProductCard = props => {
  const {
    additionalClasses,
    product,
    product: {
      _id,
      name,
      pictures,
      // category,
      brand,
      discount,
      price
    },
    onQuickViewOpenHandler
  } = props;

  const onQuickViewClickHandler = e => {
    e.preventDefault();
    onQuickViewOpenHandler();
  };

  return (
    <div className={"card product-card " + additionalClasses}>
      <div className="card-image product-card__image-holder">
        <Link to={`/product/${_id}`}>
          <figure className="image product-card__figure ">
            <img
              className="product-card__image"
              src={pictures[0]}
              alt="product"
            />
            <div className=" is-overlay product-card__figure-overlay">
              <div className="product-card__overlay-actions">
                <AddToCartButton
                  product={{ ...product }}
                  itemId={_id}
                  iconOnly
                  additionalClasses={"is-inverted"}
                />
                <button
                  className="button is-primary is-inverted product-card__figure-overlay-button"
                  onClick={e => onQuickViewClickHandler(e)}
                >
                  <Icon icon={eye} />
                </button>
              </div>
            </div>
            {discount !== 0 ? <DiscountInfo discount={discount} /> : null}
            <WishListButton
              itemId={_id}
              additionalClasses="product-card__wishlist-add "
            />
          </figure>
        </Link>
      </div>
      <div className="card-content product-card__info">
        <header>
          <Link
            to={`/product/${_id}`}
            className="title is-size-5 product-card__name"
          >
            {name}
          </Link>
        </header>
        <div className="has-text-right">
          <Link
            className="subtitle is-size-7 has-text-grey has-text-right is-italic has-text-right product-card__brand"
            to={`/brand/${brand}`}
          >
            {brand}
          </Link>
        </div>
        <div className="columns is-centered">
          <div className="column is-4-touch is-4 has-text-centered has-text-danger has-text-weight-semibold product-card__price">
            {price.toFixed(2)}$
          </div>
        </div>
      </div>
      <footer className="product-card__actions">
        <AddToCartButton product={{ ...product }} isFullWidth itemId={_id} />
        <Link
          to={`/product/${_id}`}
          className="button is-fullwidth is-primary is-outlined"
        >
          <Icon className="button-icon" icon={circleRight} />
          <span>open</span>
        </Link>
      </footer>
    </div>
  );
};

export default ProductCard;
