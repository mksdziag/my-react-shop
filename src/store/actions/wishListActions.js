import * as actionTypes from '../actionTypes/actionTypes';
import db, { FieldValue } from '../../db/db';

export const addItemToWishList = (userEmail, id) => dispatch => {
  db.collection('users')
    .doc(userEmail)
    .update({
      wishlist: FieldValue.arrayUnion(id),
    })
    .then(dispatch(itemToWishListAdded(id)));
};

export const itemToWishListAdded = id => ({
  type: actionTypes.ADD_ITEM_TO_WISHLIST,
  payload: {
    id,
  },
});

export const removeItemFromWishList = (userEmail, id) => dispatch => {
  db.collection('users')
    .doc(userEmail)
    .update({
      wishlist: FieldValue.arrayRemove(id),
    })
    .then(dispatch(itemFromWishListRemoved(id)));
};

export const itemFromWishListRemoved = id => ({
  type: actionTypes.REMOVE_ITEM_FROM_WISHLIST,
  payload: {
    id,
  },
});

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
    .catch(error => console.log(error));
};

export const wishListFetched = wishList => ({
  type: actionTypes.FETCH_WISHLIST,
  payload: {
    wishList,
  },
});
