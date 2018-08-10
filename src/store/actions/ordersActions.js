import * as actionTypes from '../actionTypes/actionTypes';
import db from '../../db/db';

const orderCreated = order => {
  return {
    type: actionTypes.CREATE_NEW_ORDER,
    payload: {
      order,
    },
  };
};

export const createNewOrder = order => dispatch => {
  db.collection('orders').add(order);
  dispatch(orderCreated(order));
};

export const removeOrder = id => {
  return {
    type: actionTypes.REMOVE_ORDER,
    payload: {
      id,
    },
  };
};

const ordersFetched = orders => {
  return {
    type: actionTypes.FETCH_ORDERS,
    payload: {
      orders,
    },
  };
};

export const fetchOrders = userEmail => dispatch => {
  db.collection('orders')
    .where('user', '==', userEmail)
    .get()
    .then(querySnapshot => {
      const orders = [];
      querySnapshot.forEach(doc => orders.push(doc.data()));
      return orders;
    })
    .then(orders => dispatch(ordersFetched(orders)));
};
