import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions';
import PinEditFormContainer from '../pin/pin_edit_form_container'
import BoardCreateFormContainer from '../board/board_create_form_container'
import BoardEditFormContainer from '../board/board_edit_form_container'


function Modal({ modal, closeModal }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case 'edit-pin':
      component = <PinEditFormContainer />
      break;
    case 'create-board':
      component = <BoardCreateFormContainer />
      break;
    case 'edit-board':
      component = <BoardEditFormContainer />
      break;
    default:
      return null;
  }

  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => ({
  modal: state.ui.modal
});

const mapDispatchToProps = dispatch => ({
  closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
 