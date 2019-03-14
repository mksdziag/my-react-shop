import * as actionTypes from '../actionTypes/actionTypes';
import db, { FieldValue } from '../../db/db';

export const addItemToWishList = (userEmail, _id) => dispatch => {
	db.collection('users')
		.doc(userEmail)
		.update({
			wishlist: FieldValue.arrayUnion(_id),
		})
		.then(dispatch(itemToWishListAdded(_id)));
};

export const itemToWishListAdded = _id => ({
	type: actionTypes.ADD_ITEM_TO_WISHLIST,
	payload: {
		_id,
	},
});

export const removeItemFromWishList = (userEmail, _id) => dispatch => {
	db.collection('users')
		.doc(userEmail)
		.update({
			wishlist: FieldValue.arrayRemove(_id),
		})
		.then(dispatch(itemFromWishListRemoved(_id)));
};

export const itemFromWishListRemoved = _id => ({
	type: actionTypes.REMOVE_ITEM_FROM_WISHLIST,
	payload: {
		_id,
	},
});

export const fetchWishList = userEmail => dispatch => {
	dispatch(wishListFetchingActive());
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
	type: actionTypes.FETCH_WISHLIST_SUCCESS,
	payload: {
		wishList,
	},
});

export const wishListFetchingActive = () => ({
	type: actionTypes.FETCH_WISHLIST_ACTIVE,
});
