import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  debugger;
  return {
    currentUser: state.entities.users[state.session.id],
    userId: ownProps.match.params.id,
    user: state.entities.users[ownProps.match.params.id],
    users: state.entities.users,
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (payload) => dispatch(fetchUser(payload))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
