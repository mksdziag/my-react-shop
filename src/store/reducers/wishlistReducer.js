import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
	loading: false,
	wishListItems: [],
};

const wishListReducer = (state = initalState, action) => {
	switch (action.type) {
		case actionTypes.ADD_ITEM_TO_WISHLIST:
			return {
				...state,
				wishListItems: [...state.wishListItems, action.payload._id],
			};
		case actionTypes.REMOVE_ITEM_FROM_WISHLIST:
			return {
				...state,
				wishListItems: [...state.wishListItems].filter(itemId => itemId !== action.payload._id),
			};
		case actionTypes.FETCH_WISHLIST_ACTIVE:
			return {
				...state,
				loading: true,
			};
		case actionTypes.FETCH_WISHLIST_SUCCESS:
			return {
				...state,
				loading: false,
				wishListItems: [...action.payload.wishList],
			};

		default:
			return state;
	}
};

export default wishListReducer;
