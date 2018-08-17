import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto, like, unlike } from '../../actions/session_actions';
import Photo from './photo';

const calcLikes = (likes, photoId) => {
  let count = 0;
  Object.values(likes).map((like) => {
    if (parseInt(photoId) === like.photo_id) {
      count += 1;
    }
  })
  return count;
};

const currentUserLikes = (likes, photoId, currentUserId) => {
  
  for (let i = 0; i < Object.values(likes).length; i++) {
    let like = Object.values(likes)[i];
    if (like.user_id === parseInt(currentUserId) && parseInt(photoId) === like.photo_id){
      return true;
    }
  }
  return false;
};

const mapStateToProps = (state, ownProps) => {
  let photo = state.entities.photos[ownProps.match.params.photoId];
  let owner;
  if (photo){
    owner = state.entities.users[photo.author_id];
  }
  return {
    currentUser: state.entities.users[state.session.id],
    photo,
    numLikes: calcLikes(state.entities.likes, ownProps.match.params.photoId),
    currentUserLikes: currentUserLikes(state.entities.likes, ownProps.match.params.photoId, state.session.id),
    owner
  };
};

const mapDispatchToProps = dispatch => (
  {
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId)),
  handleLike: (photoId) => dispatch(like(photoId)),
  handleDislike: (photoId) => dispatch(unlike(photoId)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
