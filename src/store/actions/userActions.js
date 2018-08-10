import * as actionTypes from '../actionTypes/actionTypes';
import db, { auth } from '../../db/db';

const userRegistered = email => {
  return {
    type: actionTypes.REGISTER_NEW_USER,
    payload: {
      email,
    },
  };
};

export const registerNewUser = user => dispatch => {
  auth
    .createUserWithEmailAndPassword(user.email, user.password)
    .then(data => {
      console.log(data);
      return dispatch(userRegistered(user.email));
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log({ errorCode, errorMessage });
    });
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

export const userLoggedIn = email => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: {
      email,
    },
  };
};

export const logInUser = user => dispatch => {
  auth
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return dispatch(userLoggedIn(user.email));
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log({ errorCode, errorMessage });
    });
};

export const userLoggedOut = () => {
  return {
    type: actionTypes.LOG_OUT_USER,
  };
};
export const logOutUser = () => dispatch => {
  auth
    .signOut()
    .then(() => {
      return dispatch(userLoggedOut());
    })
    .catch(function(error) {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log({ errorCode, errorMessage });
    });
};

export const updateUserDetails = user => dispatch => {
  db.collection('users')
    .doc(user.userEmail)
    .update(user);
  dispatch(updatedUserDetails(user));
};

export const updatedUserDetails = userDetails => {
  return {
    type: actionTypes.UPDATE_USER_DETAILS,
    payload: {
      userDetails,
    },
  };
};
