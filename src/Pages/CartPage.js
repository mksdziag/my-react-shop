import React, { Component } from 'react';
import { connect } from 'react-redux';
import SubPageHeader from '../components/SubPageHeader';
import products from '../database/products';
import CartListItem from '../components/CartListItem';

class CartPage extends Component {
  state = {
    itemsInCart: [],
  };

  componentDidMount() {
    const { inCartItemsIds } = this.props;
    const itemsInCart = [];
    for (const id of inCartItemsIds) {
      itemsInCart.push(products.find(product => product.id === id));
    }
    this.setState({ itemsInCart });
  }

  render() {
    const cartItems = this.state.itemsInCart.map((product, index) => (
      <CartListItem key={product.id} {...product} idx={index} />
    ));
    return (
      <div className="container">
        <SubPageHeader title="My cart" subtitle="Finish Your order" />
        <ul className="cart-list">{cartItems}</ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inCartItemsIds: state.cart.inCartItems,
  };
};

export default connect(
  mapStateToProps,
  null
)(CartPage);
