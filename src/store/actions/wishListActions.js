import * as actionTypes from '../actionTypes/actionTypes';
import db, { FieldValue } from '../../db/db';

export const itemToWishListAdded = id => {
  return {
    type: actionTypes.ADD_ITEM_TO_WISHLIST,
    payload: {
      id,
    },
  };
};

export const addItemToWishList = (userEmail, id) => dispatch => {
  db.collection('users')
    .doc(userEmail)
    .update({
      wishlist: FieldValue.arrayUnion(id),
    })
    .then(dispatch(itemToWishListAdded(id)));
};

export const removeItemFromWishList = id => {
  return {
    type: actionTypes.REMOVE_ITEM_FROM_WISHLIST,
    payload: {
      id,
    },
  };
};

export const fetchWishList = userEmail => dispatch => {
  db.collection('users')
    .doc(userEmail)
    .get()
    .then(doc => {
      if (doc.exists) {
        return doc.data().wishlist;
      } else {
        console.log('No such document!');
      }
    })
    .then(wishList => dispatch(wishListFetched(wishList)))
    .catch(function(error) {
      console.log('Error getting document:', error);
    });
};

export const wishListFetched = wishList => {
  return {
    type: actionTypes.FETCH_WISHLIST,
    payload: {
      wishList,
    },
  };
};
