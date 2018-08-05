import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './ProductPage.css';
import products from '../database/products';
import { addItemToCart } from '../store/actions';

import AddToCartButton from '../components/UI/Buttons/AddToCartButton';
import SubPageHeader from '../components/SubPageHeader';

class ProductPage extends Component {
  state = {
    productId: '',
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.productId !== prevState.productId) {
      return { productId: nextProps.match.params.productId };
    } else return null;
  }

  render() {
    const product = products.find(product => product.id === this.state.productId);
    const {
      // id,
      name,
      // index,
      // isActive,
      price,
      picture,
      category,
      // color,
      manufacturer,
      description,
      // added,
      // sizes,
      // tags,
    } = product;
    const { onAddItemToCart, inCartItems } = this.props;
    const isInCart = inCartItems.some(item => item.id === this.state.productId);

    return (
      <div className="container product-page">
        <SubPageHeader title={name} subtitle={category} />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <img src={picture} alt="" />
              </div>
              <div className="column is-7">
                <header className="product-page__name-header">
                  <h2 className="title product-page__name is-4">{name}</h2>
                  <h4 className="subtitle is-6 is-uppercase">
                    <Link className="has-text-black-ter	" to={`/manufacturer/${manufacturer}`}>
                      {manufacturer}
                    </Link>
                  </h4>
                </header>
                <div className="product-page__description">
                  <p>{description}</p>
                </div>
                <div className="product-page__price-wrapper">
                  <div className="product-page__price has-text-danger has-text-weight-semibold is-size-5 is-inline-block">
                    {price.toFixed(2)}$
                  </div>
                </div>
                <div className="columns">
                  <div className="product-page__actions  column is-6-tablet">
                    <AddToCartButton
                      onClickHandler={() => onAddItemToCart(product)}
                      isInCart={isInCart}
                      size={'is-medium is-fullwidth'}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishListItems: state.wishList.wishListItems,
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
)(ProductPage);
