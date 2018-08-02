import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItemFromCart } from '../store/actions/cartActions';
import SubPageHeader from '../components/SubPageHeader';
import CartListItem from '../components/Cart/CartListItem';
import CartSummary from '../components/Cart/CartSummary';

class CartPage extends Component {
  render() {
    const { inCartItems, removeItemFromCart } = this.props;
    let total = 0;
    if (inCartItems.length > 0) {
      total = inCartItems.reduce((acc, currItem) => acc + currItem.price, 0);
    }

    const cartItems = inCartItems.map((product, index) => (
      <CartListItem
        key={product.id}
        {...product}
        idx={index}
        onItemRemove={() => removeItemFromCart(product.id)}
      />
    ));
    return (
      <div className="container">
        <SubPageHeader title="My cart" subtitle="Finish Your order" />
        <div className="columns">
          <ul className="column is-8 cart-list">{cartItems}</ul>
          <CartSummary total={total} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inCartItems: state.cart.inCartItems,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
