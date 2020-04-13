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
        <div className="pin-feed">
          {allPins}
        </div>
        <div className="create-pin-dropdown">
          <Link to="/pin-builder">
            <button className="create-pin-button"><i className="fas fa-plus"></i></button>
          </Link>
        </div>
      </div>
    )
  }
}

export default PinIndex;