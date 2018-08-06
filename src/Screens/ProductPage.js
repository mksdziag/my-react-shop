import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Lightbox from 'lightbox-react';
import { Icon } from 'react-icons-kit';
import { table } from 'react-icons-kit/icomoon/table';
import { CSSTransition } from 'react-transition-group';

import './ProductPage.css';
import products from '../database/products';
import { addItemToCart } from '../store/actions';

import AddToCartButton from '../components/UI/Buttons/AddToCartButton';
import SubPageHeader from '../components/SubPageHeader';
import SizesTable from '../components/SizesTable';

class ProductPage extends Component {
  state = {
    productId: '',
    lightboxOpen: false,
    sizetableOpen: false,
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.productId !== prevState.productId) {
      return { productId: nextProps.match.params.productId };
    } else return null;
  }

  handleLightboxOpen = () => {
    this.setState({ lightboxOpen: true });
  };
  handleLightboxClose = () => {
    this.setState({ lightboxOpen: false });
  };

  handleSizeTableOpenClose = () => {
    this.setState(prevState => {
      return { sizetableOpen: !prevState.sizetableOpen };
    });
  };

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
      sizes,
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
                <img
                  src={picture}
                  alt=""
                  className="product-page__picture"
                  onClick={this.handleLightboxOpen}
                />
                {this.state.lightboxOpen && (
                  <Lightbox mainSrc={picture} onCloseRequest={this.handleLightboxClose} />
                )}
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
                      in={this.state.sizetableOpen}
                      onClickHandler={() => onAddItemToCart(product)}
                      isInCart={isInCart}
                      additionalClasses={'is-medium is-fullwidth'}
                    />
                  </div>
                </div>
                <button onClick={this.handleSizeTableOpenClose} className="button is-inverted">
                  <Icon icon={table} /> Table of sizes
                </button>
                <CSSTransition
                  in={this.state.sizetableOpen}
                  timeout={300}
                  classNames="table-reveal"
                  mountOnEnter
                  unmountOnExit
                >
                  <SizesTable sizes={sizes} />
                </CSSTransition>
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
