import * as actionTypes from '../actionTypes/actionTypes';
import db from '../../db/db';

export const createNewOrder = order => dispatch => {
  console.log(order);
  db.collection('orders')
    .add(order)
    .catch(error => console.log(error));
  dispatch(orderCreated(order));
};

const orderCreated = order => ({
  type: actionTypes.CREATE_NEW_ORDER,
  payload: {
    order,
  },
});

export const removeOrder = id => ({
  type: actionTypes.REMOVE_ORDER,
  payload: {
    id,
  },
});

export const fetchOrders = userEmail => dispatch => {
  dispatch(ordersFetchingActive());
  db.collection('orders')
    .where('user', '==', userEmail)
    .get()
    .then(querySnapshot => {
      const orders = [];
      querySnapshot.forEach(doc => orders.push(doc.data()));
      return orders;
    })
    .then(orders => dispatch(ordersFetched(orders)))
    .catch(error => console.log(error));
};

const ordersFetched = orders => ({
  type: actionTypes.FETCH_ORDERS_SUCCESS,
  payload: {
    orders,
  },
});

const ordersFetchingActive = () => ({
  type: actionTypes.FETCH_ORDERS_ACTIVE,
});
