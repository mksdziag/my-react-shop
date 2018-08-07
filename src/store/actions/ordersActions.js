import * as actionTypes from '../actionTypes/actionTypes';

export const createNewOrder = order => {
  return {
    type: actionTypes.CREATE_NEW_ORDER,
    payload: {
      order,
    },
  };
};

export const removeOrder = id => {
  return {
    type: actionTypes.REMOVE_ORDER,
    payload: {
      id,
    },
  };
};
