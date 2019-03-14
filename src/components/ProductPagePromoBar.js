import React from "react";
import { Link } from "react-router-dom";

import "./ProductPagePromoBar.css";

const ProductPagePromoBar = props => {
  const { products } = props;

  const productsListItems = products.map(product => {
    const { pictures, name, price, _id } = product;
    return (
      <li
        key={_id}
        className="column is-6-mobile is-3-desktop product-page-promo__item"
      >
        <figure className=" is-rounded product-page-promo__figure">
          <img
            src={pictures[0]}
            alt="product thumbnail"
            className="is-block product-page-promo__item-image"
          />
          <Link to={`/product/${_id}`}>
            <figcaption className="is-overlay product-page-promo__item-caption">
              <p className="is-size-4 has-text-primary has-text-weight-semibold product-page-promo__item-price">
                {price}$
              </p>
              <h5 className="title is-size-4 has-text-white product-page-promo__item-name">
                {name}
              </h5>
            </figcaption>
          </Link>
        </figure>
      </li>
    );
  });

  return (
    <div className="product-page-promo">
      <h4 className="title">You may also like:</h4>
      <ul className="columns is-mobile is-multiline has-text-centered product-page-promo__list">
        {productsListItems}
      </ul>
    </div>
  );
};

export default ProductPagePromoBar;
