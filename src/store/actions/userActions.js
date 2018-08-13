import * as actionTypes from '../actionTypes/actionTypes';
import db, { auth } from '../../db/db';
import { clearMessage, addMessage } from './infoActions';
import { fetchOrders } from './ordersActions';
import { fetchWishList } from './wishListActions';

export const registerNewUser = user => dispatch => {
  db.collection('users')
    .doc(user.email)
    .set({
      userEmail: user.email,
      name: '',
      secondName: '',
      street: '',
      propNum: '',
      city: '',
      zip: '',
      wishlist: [],
    });
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch(userRegistered(user.email)))
    .catch(error => dispatch(addMessage(error.message)));
};

export const userRegistered = email => ({
  type: actionTypes.REGISTER_NEW_USER,
  payload: { email },
});

export const logInUser = user => dispatch => {
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch(userLoggedIn(user.email)))
    .then(() => dispatch(clearMessage()))
    .catch(error => dispatch(addMessage(error.message)));
};

export const userLoggedIn = email => dispatch => {
  dispatch(fetchOrders(email));
  dispatch(fetchWishList(email));
  dispatch(fetchUserDetails(email));
  dispatch({
    type: actionTypes.LOGIN_USER,
    payload: {
      email,
    },
  });
};

const userLoggedOut = () => ({
  type: actionTypes.LOG_OUT_USER,
});

export const logOutUser = () => dispatch => {
  auth
    .signOut()
    .then(dispatch(userLoggedOut()))
    .catch(error => console.log(error));
};

export const fetchUserDetails = user => dispatch => {
  db.collection('users')
    .doc(user)
    .get()
    .then(doc => {
      if (doc.exists) {
        const userDetails = doc.data();
        dispatch(updatedUserDetails(userDetails));
      } else {
        console.log('No such document!');
      }
    })
    .catch(error => {
      console.log('Error getting document:', error);
    });
};

export const updateUserDetails = user => dispatch => {
  db.collection('users')
    .doc(user.userEmail)
    .update(user)
    .then(dispatch(updatedUserDetails(user)));
};

export const updatedUserDetails = userDetails => ({
  type: actionTypes.UPDATE_USER_DETAILS,
  payload: {
    userDetails,
  },
});
