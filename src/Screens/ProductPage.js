import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Lightbox from "lightbox-react";
import { CSSTransition } from "react-transition-group";
import { Icon } from "react-icons-kit";
import { table } from "react-icons-kit/icomoon/table";

import "./ProductPage.css";

import AddToCartButton from "../components/UI/Buttons/AddToCartButton";
import SubPageHeader from "../components/SubPageHeader";
import SizesTable from "../components/SizesTable";
import ProductPagePromoBar from "../components/ProductPagePromoBar";
import WishListButton from "../components/UI/Buttons/WishListButton";
import Loader from "../components/UI/Loaders/Loader";
import http from "../utils/http";

class ProductPage extends Component {
  state = {
    productId: "",
    product: null,
    loading: true,
    lightboxOpen: false,
    sizeTableOpen: false,
    photoIndex: 0,
    productsToCatBar: []
  };

  async componentDidMount() {
    const { productId } = this.props.match.params;
    const { data: product } = await http.get(`/products/${productId}`);
    this.setState({ loading: false, product, productId });
    this.fetchProductsToCatBar();
  }

  componentWillUnmount(){
	  this.setState({productId: '', product: null, loading: true , photoIndex: 0, productsToCatBar: []})
  }

  fetchProductsToCatBar = async () => {
    const { category } = this.state.product;
    const { productId } = this.state;

    const { data: productsToCatBar } = await http.get(
      `/products/category/${category}`
    );
    this.setState({
      productsToCatBar: [
        ...productsToCatBar.filter(
          product => product.isActive === true && product._id !== productId
        )
      ]
    });
  };

  async componentDidUpdate(prevProps) {
    const currentProductId = this.props.match.params.productId;
    const previousProductId = prevProps.match.params.productId;

    if (currentProductId !== previousProductId) {
      const { data: product } = await http.get(`/products/${currentProductId}`);

      this.setState({ loading: false, product });
    }
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

  displayProductView = () => {
    const { product } = this.state;

    if (product !== null) {
      const {
        _id,
        name,
        price,
        pictures,
        category,
        brand,
        description,
        sizes,
        discount
      } = product;
      const { photoIndex } = this.state;
      const productsToCatBar = this.state.productsToCatBar.slice(0, 4);
      return (
        <Fragment>
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
                {this.state.lightboxOpen ? (
                  <Lightbox
                    mainSrc={pictures[photoIndex]}
                    nextSrc={pictures[(photoIndex + 1) % pictures.length]}
                    prevSrc={
                      pictures[
                        (photoIndex + pictures.length - 1) % pictures.length
                      ]
                    }
                    onCloseRequest={this.handleLightboxClose}
                    onMovePrevRequest={() =>
                      this.setState({
                        photoIndex:
                          (photoIndex + pictures.length - 1) % pictures.length
                      })
                    }
                    onMoveNextRequest={() =>
                      this.setState({
                        photoIndex: (photoIndex + 1) % pictures.length
                      })
                    }
                  />
                ) : null}
                <WishListButton
                  additionalClasses="product-card__wishlist-add "
                  itemId={_id}
                />
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
                  {discount !== 0 ? (
                    <span className="is-size-6 has-text-link is-italic has-text-weight-semibold product-page__discount">
                      {"-" + discount + "%"}
                    </span>
                  ) : null}
                </div>
                <div className="columns">
                  <div className="product-page__actions  column is-6-tablet">
                    <AddToCartButton
                      itemId={_id}
                      product={{ ...product }}
                      additionalClasses={"is-medium is-fullwidth"}
                    />
                  </div>
                </div>
                <button
                  onClick={this.handleSizeTableOpenClose}
                  className="button is-inverted "
                >
                  <Icon icon={table} style={{ marginRight: ".5rem" }} /> Table
                  of sizes
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
            {productsToCatBar.length > 0 ? (
              <ProductPagePromoBar products={productsToCatBar} />
            ) : null}
          </section>
        </Fragment>
      );
    }
  };

  render() {
    const { loading } = this.state;
    return (
      <div className="container product-page">
        {loading ? (
          <div className="loader-wrapper">
            <Loader />
          </div>
        ) : (
          this.displayProductView()
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    wishListItems: state.wishList.wishListItems,
    user: state.user
  };
};

export default connect(mapStateToProps)(ProductPage);
