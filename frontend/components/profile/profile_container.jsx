import { connect } from 'react-redux';
import { fetchUser } from '../../actions/session_actions';
import Profile from './profile';

const mapStateToProps = ({ session, entities}, ownProps) => {
  return {
    currentUser: entities.users[session.id],
    userId: parseInt(ownProps.match.params.id),
    user: entities.users[parseInt(ownProps.match.params.id)]
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Profile);
