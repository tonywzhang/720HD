import { combineReducers } from 'redux';

import usersReducer from './users_reducer';
import photosReducer from './photos_reducer';
import likesReducer from './likes_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  photos: photosReducer,
  likes: likesReducer
});

export default entitiesReducer;
