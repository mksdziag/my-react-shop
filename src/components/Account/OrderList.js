import React, { Component } from "react";
import { connect } from "react-redux";
import { Icon } from "react-icons-kit";
import { eye } from "react-icons-kit/icomoon/eye";

import "./OrderList.css";
import ModalBlank from "../UI/Modals/ModalBlank";
import OrderDetails from "./OrderDetails";
import Loader from "../UI/Loaders/Loader";

class OrderList extends Component {
  state = {
    isOrderModalActive: false,
    activeOrder: ""
  };

  modalCloseHandler = () => {
    this.setState({ isOrderModalActive: false });
  };

  modalOpenHandler = _id => {
    const activeOrder = this.props.orders.find(order => order._id === _id);
    this.setState({ activeOrder, isOrderModalActive: true });
  };

  render() {
    const { orders, loading } = this.props;
    const ordersOutput = orders
      .sort((orderA, orderB) => (orderA.placed > orderB.placed ? -1 : 1))
      .map((order, index) => (
        <tr className="orders__item is-size-6" key={order.id}>
          <td className="is-hidden-mobile">{index + 1}.</td>
          <td className="has-text-primary">{order.total.toFixed(2)}$</td>
          <td>{new Date(order.placed).toLocaleString()}</td>
          <td>
            {order.items.reduce((acc, currItem) => acc + currItem.quantity, 0)}
          </td>
          <td>
            <button
              onClick={() => this.modalOpenHandler(order._id)}
              className="button is-small is-primary is-outlined"
            >
              <Icon icon={eye} />
            </button>
          </td>
        </tr>
      ));

    return (
      <div className="orders is-relative">
        {loading ? (
          <Loader />
        ) : (
          <table className="table is-striped is-hoverable sizes-table is-fullwidth">
            <thead>
              <tr className="orders__header is-capitalized is-7">
                <th
                  className="is-hidden-mobile	
                  has-text-grey has-text-weight-light"
                >
                  no.
                </th>
                <th className="has-text-grey has-text-weight-light">amount</th>
                <th className="has-text-grey has-text-weight-light">date</th>
                <th className="has-text-grey has-text-weight-light ">items</th>
                <th className="has-text-grey has-text-weight-light ">link</th>
              </tr>
            </thead>
            <tbody>{ordersOutput}</tbody>
          </table>
        )}
        <ModalBlank
          isModalActive={this.state.isOrderModalActive}
          onCloseClick={this.modalCloseHandler}
        >
          {this.state.activeOrder && (
            <OrderDetails order={this.state.activeOrder} />
          )}
        </ModalBlank>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
    loading: state.orders.loading
  };
};

export default connect(mapStateToProps)(OrderList);
