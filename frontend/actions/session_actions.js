import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const REMOVE_SESSION_ERRORS = 'REMOVE_SESSION_ERRORS';
export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_PHOTO = "RECEIVE_PHOTO";
export const REMOVE_PHOTO = "REMOVE_PHOTO";

export const receiveCurrentUser = currentUser => ({
  type: RECEIVE_CURRENT_USER,
  currentUser
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER,
});

export const receiveErrors = errors => ({
  type: RECEIVE_SESSION_ERRORS,
  errors
});

export const removeErrors = () => ({
  type: REMOVE_SESSION_ERRORS
});

export const receiveAllUsers = (users) => ({
  type: RECEIVE_ALL_USERS,
  users
});

export const receiveUser = (payload) => ({
  type: RECEIVE_USER,
  payload
});

export const receivePhoto = photo => ({
  type: RECEIVE_PHOTO,
  photo
});

const removePhoto = photoId => ({
  type: REMOVE_PHOTO,
  photoId
});

export const signup = user => dispatch => (
  APIUtil.signup(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const login = user => dispatch => (
  APIUtil.login(user).then(user => (
    dispatch(receiveCurrentUser(user))
  ), err => (
    dispatch(receiveErrors(err.responseJSON))
  ))
);

export const logout = () => dispatch => (
  APIUtil.logout().then(user => (
    dispatch(logoutCurrentUser())
  ))
);

export const fetchUsers = () => dispatch => (
  APIUtil.fetchUsers().then(users => (dispatch(receiveAllUsers(users))))
);

export const fetchUser = userId => dispatch => (
  APIUtil.fetchUser(userId).then(payload => (dispatch(receiveUser(payload))))
);

export const fetchPhoto = photo => dispatch => (
  APIUtil.fetchPhoto(photo).then(payload => (dispatch(receivePhoto(payload))))
);

export const updatePhoto = photo => dispatch => (
  APIUtil.updatePhoto(photo).then(photo => dispatch(receivePhoto(photo)))
);

export const deletePhoto = photoId => dispatch => (
  APIUtil.deletePhoto(photoId).then(photo => dispatch(removePhoto(photoId)))
);
