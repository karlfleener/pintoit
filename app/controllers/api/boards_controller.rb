class Api::BoardsController < ApplicationController
  def new
    # displays the form to create a board (modal)
    @board = Board.new
    render "api/boards/show"
  end

  def create
    @board = Board.new(board_params)
    if @board.save
      render "api/boards/show"
    else
      render json: [@board.errors.full_messages], status: 422
    end
  end

  def index
    # needs to be the all boards of certain user
    @boards = Board.all
    render "api/boards/index"
  end

  def show
    @board = Board.find(params[:id])
    render "api/boards/show"
  end

  def edit
    # only able to edit if board belongs to current user
    @board = Board.find(params[:id])
    if @board.creator_id == current_user.id
      render "api/boards/show"
    else
      render 'api/boards/show'
    end
  end

  def update
    # only able to update if board belongs to current user
    @board = current_user.boards.find(params[:id])
    if @board.update(board_params)
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    # can only destroy if board belongs to current user
    @board = current_user.boards.find(params[:id])
    if @board.destroy
      render 'api/boards/show'
    else
      render json: ["Nothing to delete"], status: 404
    end
  end

  private

  def board_params
    params.require(:board).permit(:title, :description, :creator_id)
  end
end