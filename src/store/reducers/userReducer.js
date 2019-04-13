import * as actionTypes from "../actionTypes/actionTypes";

const initialState = {
  isLogged: false,
  isAdmin: false,
  userEmail: null,
  name: "edit your details...",
  secondName: "edit your details...",
  street: "edit your details...",
  propNum: "edit your details...",
  city: "edit your details...",
  zip: "edit your details...",
  wishList: []
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_NEW_USER:
      return {
        ...state,
        isLogged: true,
        userEmail: action.payload.email
      };
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        isLogged: true,
        userEmail: action.payload.email
      };
    case actionTypes.LOGIN_FAILED:
      return {
        ...state,
        isLogged: false,
        userEmail: null
      };
    case actionTypes.UPDATE_USER_DETAILS:
      return {
        ...state,
        ...action.payload.userDetails
      };
    default:
      return state;
  }
};

export default userReducer;
