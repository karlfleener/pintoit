import React from 'react'
import { Link } from 'react-router-dom';
import PinIndexItem from './pin_index_item';

class PinIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchAllPins();
  }

  render() {
      const { pins } = this.props;
      const allPins = pins.map(pin => (
        <PinIndexItem key={pin.id} pin={pin} />
      ))

    return (
      <div className="pin-index-container">
          {allPins}
      </div>
    )
  }
}

export default PinIndex;