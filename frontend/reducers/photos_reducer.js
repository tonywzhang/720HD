import merge from 'lodash/merge';

import { RECEIVE_USER, RECEIVE_PHOTO, REMOVE_PHOTO } from '../actions/session_actions';

const photosReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_USER:
      return Object.assign({}, action.payload.photos);
    case RECEIVE_PHOTO:
      return Object.assign({}, action.photo.details);
      // return Object.assign({}, action.photo.details);
    case REMOVE_PHOTO:
      let newState = merge({},state);
      delete newState[action.photoId];
      return newState;
    default:
      return state;
  }
};

export default photosReducer;
