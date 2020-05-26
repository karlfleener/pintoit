import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {

  return (
    <Link to={`/pins/${pin.id}`}>
      <div className='pin-index-item-container'>
        <div className='pin-index-item-image'>
          <img src={pin.imageUrl} alt={pin.title}/>
        </div>
        <div className="pin-index-item-title">{pin.title}</div>
      </div>
    </Link>
  )
}

export default PinIndexItem;