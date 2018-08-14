import React, { Component } from 'react';
import { connect } from 'react-redux';
import { v4 } from 'uuid';

import {
  changeItemQuantity,
  changeItemSize,
  removeItemFromCart,
  createNewOrder,
  removeAllItemsFromCart,
} from '../store/actions';

import SubPageHeader from '../components/SubPageHeader';
import CartListItem from '../components/Cart/CartListItem';
import CartSummary from '../components/Cart/CartSummary';

class CartPage extends Component {
  state = {
    orderStatus: 'active',
    shippingCost: 5,
    pricesSum: this.props.inCartItems.reduce(
      (acc, currItem) => acc + currItem.price * currItem.quantity,
      0
    ),
  };

  static getDerivedStateFromProps(nextProps, prevState) {
    const prevPricesSum = prevState.pricesSum;
    const nextPricesSum = nextProps.inCartItems.reduce(
      (acc, currItem) => acc + currItem.price * currItem.quantity,
      0
    );
    if (prevPricesSum !== nextPricesSum) {
      return { pricesSum: nextPricesSum };
    } else return null;
  }

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
        brand: item.brand,
        price: item.price,
        picture: item.pictures[0],
        size: item.size,
        quantity: item.quantity,
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
    const { inCartItems, removeItemFromCart, changeItemQuantity, changeItemSize } = this.props;
    const { pricesSum, shippingCost } = this.state;

    let cartItemsOutput = inCartItems
      .sort((productA, productB) => (productA.name < productB.name ? -1 : 1))
      .map((product, index) => (
        <CartListItem
          key={product.id}
          idx={index}
          {...product}
          onChangeItemQuantity={(itemId, quantity) => changeItemQuantity(itemId, quantity)}
          onChangeItemSize={(itemId, size) => changeItemSize(itemId, size)}
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
    changeItemQuantity: (itemId, quantity) => dispatch(changeItemQuantity(itemId, quantity)),
    changeItemSize: (itemId, size) => dispatch(changeItemSize(itemId, size)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartPage);
