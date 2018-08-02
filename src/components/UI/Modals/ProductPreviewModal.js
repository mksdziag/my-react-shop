import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { cart } from 'react-icons-kit/icomoon/cart';

import './ProductPreviewModal.css';
import { addItemToCart, addItemToWishList, removeItemFromWishList } from '../../../store/actions';

const ProductPreviewModal = props => {
  const {
    product: {
      // id,
      name,
      // price,
      picture,
      // category,
      manufacturer,
      // added,
      // sizes,
    },
    isModalActive,
    onQuickViewCloseHandler,
    onAddItemToCart,
  } = props;

  return (
    <CSSTransition in={isModalActive} timeout={300} classNames="fade" unmountOnExit mountOnEnter>
      <div className="product-preview-modal__backdrop">
        <div className="product-preview-modal">
          <div className="columns">
            <div className="column is-5">
              <div className="product-preview-modal__image-holder">
                <img className="" src={picture} alt="" />
              </div>
            </div>
            <div className="column is-7">
              <div className="product-name">
                <h2 className="title">{name}</h2>
                <Link to={`/manufacturer/${manufacturer}`}>
                  <h4 className="subtitle">{manufacturer}</h4>
                </Link>
              </div>
              <div className="product-preview-modal__actions">
                <button
                  onClick={() => onAddItemToCart(props.product)}
                  className="button is-primary is-large"
                >
                  <Icon className="button-icon" icon={cart} />Buy Now
                </button>
              </div>
            </div>
          </div>
          <button
            className="delete is-large product-preview-modal__close"
            aria-label="close"
            onClick={() => onQuickViewCloseHandler()}
          />
        </div>
      </div>
    </CSSTransition>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    onAddItemToCart: item => dispatch(addItemToCart(item)),
    onAddItemToWishList: id => dispatch(addItemToWishList(id)),
    onRemoveItemFromWishList: id => dispatch(removeItemFromWishList(id)),
  };
};

export default connect(
  null,
  mapDispatchToProps
)(ProductPreviewModal);
