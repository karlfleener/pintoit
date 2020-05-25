import { connect } from 'react-redux';
import { fetchAllUsers, fetchUser } from '../../actions/user_actions';
import Profile from './profile';

const mapStateToProps = (state, ownProps) => {
  // debugger
  return {
    currentUser: state.session.currentUser,
    userId: Number(ownProps.match.params.userId),
    user: state.entities.users[Number(ownProps.match.params.userId)],
  }
}

const mapDispatchToProps = dispatch => ({
  fetchUser: userId => dispatch(fetchUser(userId)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Profile)