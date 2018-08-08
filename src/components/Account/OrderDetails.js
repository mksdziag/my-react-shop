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
          {order.placed.toLocaleString()}
        </div>

        <div className="column is-size-6 has-text-weight-semibold has-text-danger">
          <span className="is-size-7 has-text-grey has-text-weight-light is-lowercase">
            total paid:{' '}
          </span>
          {order.total.toFixed(2)}$
        </div>
      </div>
      <ul className={'order-details__items-list'}>
        {order.items.map((item, index) => (
          <div key={item.name} className="columns is-mobile has-text-centered order-details__item">
            <div className="column is-1">{index + 1}</div>
            <div className="column is-size-7-mobile">{item.name}</div>
            <div className="column has-text-primary has-text-weight-semibold">
              {item.price.toFixed(2)}$
            </div>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default OrderDetails;
