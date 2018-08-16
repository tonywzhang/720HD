import { connect } from 'react-redux';
import { fetchPhoto, updatePhoto } from '../../actions/session_actions';
import EditPhotoForm from './edit_photo_form';

const mapStateToProps = (state, ownProps) => {
  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.id,
    details: state.entities.photos,
    photoId: ownProps.match.params.photoId
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
