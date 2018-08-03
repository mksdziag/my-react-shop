import React from 'react';

import SubPageHeader from '../components/SubPageHeader';
import WishList from '../components/Account/WishList';

const MyAccount = () => {
  return (
    <div className="container">
      <SubPageHeader title="My Account" />
      <div className="columns">
        <div className="column is-8">
          <h3 className="title">My orders</h3>
          <p>Here will be list of my orders</p>
        </div>
        <div className="column is-4">
          <h3 className="title">My wish list</h3>
          <WishList />
        </div>
      </div>
    </div>
  );
};

export default MyAccount;
