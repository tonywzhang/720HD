import { connect } from 'react-redux';
import { fetchUsers, fetchUser } from '../../actions/session_actions';
import Search from './search';

const mapStateToProps = ({session,entities}) => {
  debugger;
  return {
    currentUser: entities.users[session.id],
    users: Object.values(entities.users)
  };
};

const mapDispatchToProps = dispatch => ({
  fetchUsers: () => dispatch(fetchUsers()),
  fetchUser: userId => dispatch(fetchUser(userId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
