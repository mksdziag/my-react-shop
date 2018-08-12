import * as actionTypes from '../actionTypes/actionTypes';
import db, { auth } from '../../db/db';
import { clearMessage, addMessage } from './infoActions';

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

// export const userLogInFailed = () => {
//   return {
//     type: actionTypes.REGISTER_FAILED,
//   };
// };

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

export const userLoggedIn = email => {
  return {
    type: actionTypes.LOGIN_USER,
    payload: {
      email,
    },
  };
};

// export const userLogInFailed = () => {
//   return {
//     type: actionTypes.LOGIN_FAILED,
//   };
// };

const userLoggedOut = () => ({
  type: actionTypes.LOG_OUT_USER,
});

export const logOutUser = () => dispatch => {
  auth
    .signOut()
    .then(dispatch(userLoggedOut()))
    .catch(error => console.log(error));
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
