import * as actionTypes from '../actionTypes/actionTypes';
import db, { auth } from '../../db/db';

const userRegistered = email => ({
  type: actionTypes.REGISTER_NEW_USER,
  payload: { email },
});

export const registerNewUser = user => dispatch => {
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch(userRegistered(user.email)))
    .catch(error => console.log(error));

  db.collection('users')
    .doc(user.email)
    .set({
      userEmail: user.email,
      name: 'edit your details',
      secondName: 'edit your details',
      street: 'edit your details',
      propNum: 'edit your details',
      city: 'edit your details',
      zip: 'edit your details',
      wishlist: [],
    });
};

export const userLoggedIn = email => ({
  type: actionTypes.LOGIN_USER,
  payload: {
    email,
  },
});

export const logInUser = user => dispatch => {
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then(() => dispatch(userLoggedIn(user.email)))
    .catch(error => console.log(error));
};

const userLoggedOut = () => ({
  type: actionTypes.LOG_OUT_USER,
});

export const logOutUser = () => dispatch => {
  auth
    .signOut()
    .then(() => dispatch(userLoggedOut()))
    .catch(error => console.log(error));
};

export const updateUserDetails = user => dispatch => {
  db.collection('users')
    .doc(user.userEmail)
    .update(user)
    .then(() => dispatch(updatedUserDetails(user)));
};

export const updatedUserDetails = userDetails => ({
  type: actionTypes.UPDATE_USER_DETAILS,
  payload: {
    userDetails,
  },
});
