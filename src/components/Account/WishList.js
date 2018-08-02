import React from 'react';
import { connect } from 'react-redux';
import products from '../../database/products';

const WishList = props => {
  const { wishListIds } = props;
  const wishListItems = [];

  for (let id of wishListIds) {
    wishListItems.push(products.find(product => product.id === id));
  }
  console.log({ wishListIds, wishListItems });

  return (
    <ul className="wish-list">
      {wishListItems.map(item => (
        <li key={item.id}>
          <p className="name">{item.name}</p>
          <p className="price">{item.price}</p>
        </li>
      ))}
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    wishListIds: state.wishList.wishListItems,
  };
};

export default connect(mapStateToProps)(WishList);
