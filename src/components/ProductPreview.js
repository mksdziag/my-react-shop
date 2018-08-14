import React from 'react';
import { Link } from 'react-router-dom';

import './ProductPreview.css';

import AddToCartButton from './UI/Buttons/AddToCartButton';

const ProductPreview = props => {
  const {
    product,
    product: {
      id,
      name,
      price,
      pictures,
      // category,
      brand,
      // added,
      // sizes,
    },
  } = props;

  return (
    <div className="columns level">
      <div className="column is-5">
        <div className="product-preview-modal__image-holder">
          <img className="product-preview-modal__image" src={pictures[0]} alt="" />
        </div>
      </div>
      <div className="column is-7">
        <header className="product-preview-modal__product-header">
          <Link to={`/product/${id}`}>
            <h2 className="title">{name}</h2>
          </Link>
          <h4 className="subtitle has-text-grey">
            <Link className="is-size-6-touch has-text-grey " to={`/brand/${brand}`}>
              {brand}
            </Link>
          </h4>
        </header>
        <span className="is-block has-text-danger is-size-5-touch is-size-4-desktop has-text-weight-semibold product-preview-modal__product-price">
          {price}$
        </span>
        <div className="product-preview-modal__actions">
          <AddToCartButton product={{ ...product }} itemId={id} />
        </div>
      </div>
    </div>
  );
};

export default ProductPreview;
