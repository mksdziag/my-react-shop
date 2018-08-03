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
    product: {},
  };

  componentWillMount() {
    const { productId } = this.props.match.params;
    this.setState({ productId });
  }

  componentDidMount() {
    const product = products.find(product => product.id === this.state.productId);
    this.setState({ product: { ...product } });
  }

  render() {
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
    } = this.state.product;
    const { onAddItemToCart, inCartItems } = this.props;

    const isInCart = inCartItems.some(item => item.id === this.state.productId);

    return (
      // ! nowy tyo headeru dodac trzeba
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
                    onClickHandler={() => onAddItemToCart(this.state.product)}
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
