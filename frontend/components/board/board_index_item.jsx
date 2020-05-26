import React from 'react';
import { Link } from 'react-router-dom';
import { render } from 'react-dom';

const BoardIndexItem = ({ board }) => {

  const imagePreview1 = board.pins[0] ? <img src={board.pins[0].imageUrl} alt={board.title} className='board-index-img-left' /> : <div className="board-index-img-empty-l"></div>
  const imagePreview2 = board.pins[1] ? <img src={board.pins[1].imageUrl} alt={board.title} className='board-index-img-right1' /> : <div  className="board-index-img-empty-r1"></div>
  const imagePreview3 = board.pins[2] ? <img src={board.pins[2].imageUrl} alt={board.title} className='board-index-img-right2' />: <div  className="board-index-img-empty-r2"></div>

    return (
      <Link to={`/users/${board.creator_id}/boards/${board.id}`}>
        <div className='board-index-item-container'>
          <div className='board-index-item-image'>
            {imagePreview1}
            <div>
             {imagePreview2}
             {imagePreview3}
            </div>
          </div>
          <div className="board-index-item-title">{board.title}</div>
          <div className="board-pin-count">{board.pins.length} Pins</div>
        </div>
      </Link>
    )
  }


export default BoardIndexItem;