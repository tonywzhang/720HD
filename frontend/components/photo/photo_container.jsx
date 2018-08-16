import { connect } from 'react-redux';
import { fetchPhoto, deletePhoto } from '../../actions/session_actions';
import Photo from './photo';

const mapStateToProps = (state, ownProps) => {

  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.id,
    details: state.entities.photos
  };
};

const mapDispatchToProps = dispatch => ({
  fetchPhoto: photoId => dispatch(fetchPhoto(photoId)),
  deletePhoto: photoId => dispatch(deletePhoto(photoId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Photo);
