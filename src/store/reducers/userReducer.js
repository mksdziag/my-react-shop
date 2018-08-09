import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  isLogged: false,
  user: null,
};

const userReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_NEW_USER:
      return {
        ...state,
        user: action.payload.email,
        isLogged: true,
      };
    case actionTypes.LOGIN_USER:
      return {
        ...state,
        user: action.payload.email,
        isLogged: true,
      };
    case actionTypes.LOG_OUT_USER:
      return {
        ...state,
        user: null,
        isLogged: false,
      };
    default:
      return state;
  }
};

export default userReducer;
