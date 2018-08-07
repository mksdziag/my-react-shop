import React from 'react';

import SubPageHeader from '../components/SubPageHeader';
import WishList from '../components/Account/WishList';
import OrderList from '../components/Account/OrderList';

const MyAccount = () => {
  return (
    <div className="container">
      <SubPageHeader title="My Account" />
      <div className="columns">
        <div className="column is-7">
          <h3 className="title is-size-4">My orders</h3>
          <OrderList />
        </div>
        <div className="column is-5 is-offset-1-widescreen is-4-widescreen">
          <h3 className="title is-size-4">My wish list</h3>
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
