import merge from 'lodash/merge';

import { RECEIVE_USER } from '../actions/session_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.payload.photos);
    default:
      return state;
  }
};

export default photosReducer;
