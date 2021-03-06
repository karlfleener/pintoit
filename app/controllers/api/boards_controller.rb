class Api::BoardsController < ApplicationController
  def new
    # displays the form to create a board (modal)
    @board = Board.new
    render :new
  end

  def create
    @board = Board.new(board_params)
    @board.creator_id = current_user.id
    if @board.save
      render "api/boards/show"
    else
      render json: [@board.errors.full_messages], status: 422
    end
  end

  def index
    # needs to be the all boards of certain user
    # @boards = @user.boards
    @boards = Board.all
    render :index
    # render "api/boards/index"
  end

  def show
    @board = Board.find(params[:id])
    render :show
  end

  def edit
    # only able to edit if board belongs to current user
    @board = Board.find(params[:id])
    if @board.creator_id == current_user.id
      render :edit
    else
      render 'api/boards/show'
    end
  end

  def update
    @board = Board.find(params[:id])
    if (@board.creator_id === current_user.id && @board.update(board_params))
      render 'api/boards/show'
    else
      render json: @board.errors.full_messages, status: 422
    end
  end

  def destroy
    @board = Board.find(params[:id])
    @board.destroy
    render 'api/boards/show'
  end

  private

  def board_params
    params.require(:board).permit(:title, :description, :creator_id)
  end
end