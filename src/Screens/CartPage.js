import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import { removeItemFromCart, createNewOrder, removeAllItemsFromCart } from '../store/actions';

import SubPageHeader from '../components/SubPageHeader';
import CartListItem from '../components/Cart/CartListItem';
import CartSummary from '../components/Cart/CartSummary';

class CartPage extends Component {
  state = {
    orderStatus: 'active',
    shippingCost: 5,
    pricesSum: this.props.inCartItems.reduce((acc, currItem) => acc + currItem.price, 0),
  };

  handleNewOrder = () => {
    const {
      inCartItems,
      createNewOrder,
      removeAllItemsFromCart,
      user: { userEmail },
    } = this.props;
    const { pricesSum, shippingCost } = this.state;

    const orderedItems = inCartItems.map(item => {
      return {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: 1,
        size: 'S',
      };
    });

    const order = {
      id: v4(),
      placed: Date.now(),
      user: userEmail,
      total: pricesSum + shippingCost,
      items: orderedItems,
    };

    createNewOrder(order);
    removeAllItemsFromCart();
    this.setState({ orderStatus: 'finished' });
  };

  render() {
    const { inCartItems, removeItemFromCart } = this.props;
    const { pricesSum, shippingCost } = this.state;

    let cartItemsOutput = inCartItems.map((product, index) => (
      <CartListItem
        key={product.id}
        idx={index}
        {...product}
        onItemRemove={() => removeItemFromCart(product.id)}
      />
    ));

    if (this.state.orderStatus === 'finished') {
      cartItemsOutput = (
        <div className="has-text-centered">
          <h3 className="title is-size-5">Your order has been send sucessfully.</h3>
        </div>
      );
    }

    return (
      <div className="container">
        <SubPageHeader title="My cart" subtitle="Finish Your order" />
        <div className="columns">
          <ul className="column is-8 cart-list">{cartItemsOutput}</ul>
          <CartSummary
            pricesSum={pricesSum}
            shippingCost={shippingCost}
            onConfirmOrder={this.handleNewOrder}
            orderingDisabled={this.props.user.useEmail === null || inCartItems.length < 1}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    inCartItems: state.cart.inCartItems,
    user: state.user,
  };
};
const mapDispatchToProps = dispatch => {
  return {
    removeItemFromCart: id => dispatch(removeItemFromCart(id)),
    createNewOrder: order => dispatch(createNewOrder(order)),
    removeAllItemsFromCart: () => dispatch(removeAllItemsFromCart()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
