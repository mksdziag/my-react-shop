import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Lightbox from 'lightbox-react';
import { CSSTransition } from 'react-transition-group';
import { Icon } from 'react-icons-kit';
import { table } from 'react-icons-kit/icomoon/table';

import './ProductPage.css';
import products from '../database/products';

import AddToCartButton from '../components/UI/Buttons/AddToCartButton';
import SubPageHeader from '../components/SubPageHeader';
import SizesTable from '../components/SizesTable';
import ProductPagePromoBar from '../components/ProductPagePromoBar';
import WishListButton from '../components/UI/Buttons/WishListButton';

class ProductPage extends Component {
  state = {
    productId: '',
    lightboxOpen: false,
    sizeTableOpen: false,
    photoIndex: 0,
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
      return { sizeTableOpen: !prevState.sizeTableOpen };
    });
  };

  render() {
    const product = products.find(product => product.id === this.state.productId);
    const {
      id,
      name,
      // index,
      // isActive,
      price,
      pictures,
      category,
      // color,
      brand,
      description,
      // added,
      sizes,
      discount,
      // tags,
    } = product;
    const { photoIndex } = this.state;
    const productsToCatBar = products
      .filter(item => item.category === product.category)
      .filter(item => item.id !== this.state.productId)
      .slice(0, 4);

    return (
      <div className="container product-page">
        <section className="section is-small-mobile">
          <SubPageHeader title={name} subtitle={category} />
          <div className="columns">
            <div className="column is-5 is-relative">
              <img
                src={pictures[photoIndex]}
                alt=""
                className="product-page__picture"
                onClick={this.handleLightboxOpen}
              />
              {this.state.lightboxOpen && (
                <Lightbox
                  mainSrc={pictures[photoIndex]}
                  nextSrc={pictures[(photoIndex + 1) % pictures.length]}
                  prevSrc={pictures[(photoIndex + pictures.length - 1) % pictures.length]}
                  onCloseRequest={this.handleLightboxClose}
                  onMovePrevRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + pictures.length - 1) % pictures.length,
                    })
                  }
                  onMoveNextRequest={() =>
                    this.setState({
                      photoIndex: (photoIndex + 1) % pictures.length,
                    })
                  }
                />
              )}
              <WishListButton additionalClasses="product-card__wishlist-add " itemId={id} />
            </div>
            <div className="column is-7">
              <header className="product-page__name-header">
                <h2 className="title product-page__name is-4">{name}</h2>
                <h4 className="subtitle is-6 is-uppercase">
                  <Link className="has-text-black-ter	" to={`/brand/${brand}`}>
                    {brand}
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
                {discount !== 0 && (
                  <span className="is-size-6 has-text-link is-italic has-text-weight-semibold product-page__discount">
                    {'-' + discount + '%'}
                  </span>
                )}
              </div>
              <div className="columns">
                <div className="product-page__actions  column is-6-tablet">
                  <AddToCartButton
                    itemId={id}
                    product={{ ...product }}
                    additionalClasses={'is-medium is-fullwidth'}
                  />
                </div>
              </div>
              <button onClick={this.handleSizeTableOpenClose} className="button is-inverted ">
                <Icon icon={table} style={{ marginRight: '.5rem' }} /> Table of sizes
              </button>
              <CSSTransition
                in={this.state.sizeTableOpen}
                timeout={300}
                classNames="table-reveal"
                mountOnEnter
                unmountOnExit
              >
                <SizesTable sizes={sizes} />
              </CSSTransition>
            </div>
          </div>
        </section>
        <section className="section">
          <ProductPagePromoBar products={productsToCatBar} />
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishListItems: state.wishList.wishListItems,
  };
};

export default connect(mapStateToProps)(ProductPage);
