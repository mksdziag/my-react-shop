import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import products from '../database/products';
import { addItemToCart } from '../store/actions';
import FloatingCart from '../components/Cart/FloatingCart';
import AddToCartButton from '../components/UI/Buttons/AddToCartButton';
import SubPageHeader from '../components/SubPageHeader';

class ProductPage extends Component {
  state = {
    productId: '',
  };

  // componentDidMount() {
  //   const product = products.find(product => product.id === this.state.productId);
  //   this.setState({ product: { ...product } });
  // }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.match.params.productId !== prevState.productId) {
      return { productId: nextProps.match.params.productId };
    } else return null;
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevProps.match.params.productId !== this.state.productId) {
  //     console.log('from didupdate');
  //     const product = products.find(product => product.id === this.state.productId);
  //     this.setState({ product: { ...product } });
  //   }
  // }

  render() {
    const product = products.find(product => product.id === this.state.productId);
    const {
      // id,
      name,
      // index,
      // isActive,
      // price,
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
      <div className="container">
        <SubPageHeader title={name} subtitle={category} />
        <section className="section">
          <div className="container">
            <div className="columns">
              <div className="column is-5">
                <img src={picture} alt="" />
              </div>
              <div className="column is-7">
                <div className="product-name">
                  <h2 className="title">{name}</h2>
                  <Link to={`/manufacturer/${manufacturer}`}>
                    <h4 className="subtitle">{manufacturer}</h4>
                  </Link>
                </div>
                <div className="product-description">
                  <p>{description}</p>
                </div>
                <div className="product-actions">
                  <AddToCartButton
                    onClickHandler={() => onAddItemToCart(product)}
                    isInCart={isInCart}
                  />
                </div>
              </div>
            </div>
            <FloatingCart />
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
