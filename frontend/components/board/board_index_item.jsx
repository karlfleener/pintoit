import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ board }) => {
  // debugger
  return (
    <Link to={`/boards/${board.id}`}>
      <div className='board-index-item-container'>
        <div className='board-index-item-image'>
          <img src={board.imageUrl} alt={board.title} />
        </div>
        <div className="board-index-item-title">{board.title}</div>
      </div>
    </Link>
  )
}

export default BoardIndexItem;