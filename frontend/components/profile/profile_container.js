import { connect } from 'react-redux';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    user: state.entities.users[ownProps.match.params.userId],
    pins: '',
    boards: '',
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)