import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  isLogged: false,
  userEmail: null,
  name: 'edit your details...',
  secondName: 'edit your details...',
  street: 'edit your details...',
  propNum: 'edit your details...',
  city: 'edit your details...',
  zip: 'edit your details...',
  wishList: [],
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_NEW_USER:
      return {
        ...state,
        userEmail: action.payload.email,
        isLogged: true,
      };
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        userEmail: action.payload.email,
        isLogged: true,
      };
    case actionTypes.LOG_OUT_USER:
      return {
        ...state,
        userEmail: null,
        isLogged: false,
      };
    case actionTypes.UPDATE_USER_DETAILS:
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default userReducer;
