import merge from 'lodash/merge';

import { RECEIVE_CURRENT_USER, RECEIVE_ALL_USERS, RECEIVE_USER } from '../actions/session_actions';

const usersReducer = (state = {}, action) => {
  Object.freeze(state);
  switch(action.type) {
    case RECEIVE_CURRENT_USER:
      return merge({}, state, {[action.currentUser.id]: action.currentUser });
    case RECEIVE_ALL_USERS:
      return merge({}, action.users);
    case RECEIVE_USER:
      return merge({}, state, {[action.payload.user.id]: action.payload.user});
    default:
      return state;
  }
};

export default usersReducer;

// case RECEIVE_USER:
//   action.payload.photos
