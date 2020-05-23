import React from 'react'
import { Link } from 'react-router-dom';
import BoardIndexItem from './board_index_item';

class BoardIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    // this.props.fetchAllUsersBoards();
    // this.props.fetchAllBoards();
  }

  render() {
    const { boards } = this.props;
    const allUsersBoards =boards.map(board => (
      <BoardIndexItem key={board.id} board={board} />
    ))

    return (
      <div className="board-index-container">
        {allUsersBoards}
      </div>
    )
  }
}

export default BoardIndex;