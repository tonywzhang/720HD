import merge from 'lodash/merge';

import { RECEIVE_LIKE, RECEIVE_DISLIKE, RECEIVE_PHOTO } from '../actions/session_actions';

const likesReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_PHOTO:
      return Object.assign({}, action.payload.likes);
    case RECEIVE_LIKE:
      return merge({}, state, {[action.like.id]: action.like});
    case RECEIVE_DISLIKE:
      let newState = merge({}, state);
      delete newState[action.like.id];
      return newState;
    default:
      return state;
  }
};

export default likesReducer;
