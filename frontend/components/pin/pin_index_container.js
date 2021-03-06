import { connect } from 'react-redux';
import { fetchAllPins, updatePin, deletePin} from '../../actions/pin_actions';
import { openModal, closeModal } from '../../actions/modal_actions';
import PinIndex from './pin_index'

const mapStateToProps = state => ({
  pins: Object.values(state.entities.pins)
})

const mapDispatchToProps = dispatch => ({
  fetchAllPins: pins => dispatch(fetchAllPins(pins)),
  updatePin: pin => dispatch(updatePin(pin)),
  deletePin: pinId => dispatch(deletePin(pinId)),
  // openModal: () => dispatch(openModal('show')),
  // closeMOdal: () => dispatch(closeModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(PinIndex);