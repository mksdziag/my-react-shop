import * as actionTypes from '../actionTypes/actionTypes';

const initalState = {
  message: '',
};

const infoReducer = (state = initalState, action) => {
  switch (action.type) {
    case actionTypes.ADD_MESSAGE:
      return {
        ...state,
        message: action.payload.message,
      };
    case actionTypes.CLEAR_MESSAGE:
      return {
        ...state,
        message: '',
      };
    default:
      return state;
  }
};

export default infoReducer;
