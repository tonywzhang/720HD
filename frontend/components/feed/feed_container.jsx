import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import Feed from './feed';

const mapStateToProps = (state, ownProps) => {
  // debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.id,
    user: state.entities.users[ownProps.match.params.id],
    photos: state.entities.photos
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (id) => dispatch(fetchUser(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Feed);
