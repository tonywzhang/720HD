import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto } from '../../actions/session_actions';
import EditPhotoForm from './edit_photo_form';

const mapStateToProps = (state, ownProps) => {
  let photo = state.entities.photos[ownProps.match.params.photoId];
  let owner;
  if (photo){
    owner = state.entities.users[photo.author_id];
  }
  return {
    currentUser: state.entities.users[state.session.id],
    photo,
    owner
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  updatePhoto: photo => dispatch(updatePhoto(photo))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPhotoForm);
