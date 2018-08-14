import React from 'react';

import './OrderDetails.css';

const OrderDetails = props => {
  const { order } = props;
  return (
    <div className="order-details">
      <header className="heading has-text-centered order-details__heading">
        <h5 className="title is-size-7">
          <span className="is-size-7 has-text-grey has-text-weight-light is-lowercase">
            order:{' '}
          </span>
          {order.id}
        </h5>
      </header>
      <div className="columns has-text-centered order-details__meta">
        <div className="column is-size-7 has-text-grey">
          <span className="is-size-7 has-text-grey has-text-weight-light is-lowercase">
            placed:{' '}
          </span>
          {new Date(order.placed).toLocaleString()}
        </div>

        <div className="column is-size-6 has-text-weight-semibold has-text-danger">
          <span className="is-size-7 has-text-grey has-text-weight-light is-lowercase">
            total paid:{' '}
          </span>
          {order.total.toFixed(2)}$
        </div>
      </div>
      <ul className="order-details__items-list">
        {order.items.map((item, index) => (
          <li key={item.name} className="columns level is-mobile order-details__item">
            <div className="column order-details__item-column has-text-centered is-1">
              {index + 1}
            </div>
            <div className="column order-details__item-column has-text-centered  is-hidden-mobile is-3-touch is-1">
              <img src={item.picture} alt="product" className="order-details__item-picture" />
            </div>
            <div className="column order-details__item-column ">{item.name}</div>
            <div className="column order-details__item-column has-text-centered is-1">
              {item.size}
            </div>
            <div className="column order-details__item-column has-text-centered is-1">
              {item.quantity}
            </div>
            <div className="column order-details__item-column is-2 has-text-primary has-text-weight-semibold">
              {item.price.toFixed(2)}$
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
