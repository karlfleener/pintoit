import React from 'react';
import { Link } from 'react-router-dom';

const PinIndexItem = ({ pin }) => {
  return (
    <div className='pin-index-item-container'>
      <Link to={`/pins/${pin.id}`}>
        <img src={pin.imageUrl} alt={pin.title}/>
        <div>{pin.title}</div>
      </Link>
    </div>
  )
}

export default PinIndexItem;