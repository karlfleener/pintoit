import * as PinApiUtil from '../util/pin_api_util';

export const RECEIVE_ALL_PINS = 'RECEIVE_ALL_PINS';
export const RECEIVE_PIN = 'RECEIVE_PIN';
export const REMOVE_PIN = 'REMOVE_PIN';
export const RECEIVE_PIN_ERRORS = 'RECEIVE_PIN_ERRORS';

const receiveAllPins = pins => ({
  type: RECEIVE_ALL_PINS,
  Pins
})

const receivePin = pin => ({
  type: RECEIVE_PIN,
  Pin
})

const removePin = pinId => ({
  type: REMOVE_PIN,
  PinId
})

const receivePinErrors = errors => ({
  type: RECEIVE_PIN_ERRORS,
  errors
})

export const fetchAllPins = () => dispatch => PinApitUtil.fetchAllPins()
  .then(pins => dispatch(receiveAllPins(pins)),
    err => dipsatch(receivePinErrors(err.responseJSON)))

export const fetchPin = pinId => dispatch => PinApitUtil.fetchPin(pinId)
  .then(pin => dispatch(receivePin(pin)),
    err => dispatch(receivePinErrors(err.responseJSON)))

export const createPin = pin => dispatch => PinApitUtil.createPin(pin)
  .then(pin => dispatch(receivePin(pin)),
    err => dipsatch(receivePinErrors(err.responseJSON)))

export const updatePin = pin => dispatch => PinApitUtil.updatePin(pin)
  .then(pin => dispatch(receivePin(pin)),
    err => dispatch(receivePinErrors(err.responseJSON)))

export const deletePin = pinId => dispatch => PinApitUtil.deletePin(pinId)
  .then(() => dispatch(removePin()))