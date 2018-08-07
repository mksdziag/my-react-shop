import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eye } from 'react-icons-kit/icomoon/eye';

import './OrderList.css';

const OrderList = props => {
  const { orders } = props;
  const ordersOutput = orders.map((order, index) => (
    <tr className="orders__item is-size-6" key={order.id}>
      <td
        className="is-hidden-mobile	
"
      >
        {index + 1}.
      </td>
      <td className="has-text-primary">{order.total.toFixed(2)}$</td>
      <td>{order.placed.toLocaleString()}</td>
      <td>{order.items.length}</td>
      <td>
        <Link to={`/account/orders/${order.id}`}>
          <button className="button is-small is-primary is-outlined">
            <Icon icon={eye} />
          </button>
        </Link>
      </td>
    </tr>
  ));

  return (
    <div className="orders">
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
    </div>
  );
};

const mapStateToProps = state => {
  return {
    orders: state.orders.orders,
  };
};

export default connect(mapStateToProps)(OrderList);
