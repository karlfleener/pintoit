import React from 'react';
import { Link } from 'react-router-dom';

const BoardIndexItem = ({ creatorId, board }) => {
  // debugger
  return (
    <Link to={`/users/${creatorId}/boards/${board.id}`}>
      <div className='board-index-item-container'>
        <div className='board-index-item-image'>
          <img src={board.imageUrl} alt={board.title} />
          <img src={board.imageUrl} alt={board.title} />
          <img src={board.imageUrl} alt={board.title} />
        </div>
        <div className="board-index-item-title">{board.title}</div>
      </div>
    </Link>
  )
}

export default BoardIndexItem;