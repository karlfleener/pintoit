require 'byebug'

class Api::PinsController < ApplicationController
  def new
    @pin = Pin.new
    render :new
  end

  def create
    @pin = Pin.new(pin_params)
    debugger
    @pin.creator_id = current_user.id
    if @pin.save
      render "api/pins/show"
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  def index
    @pins = Pin.all
    render :index
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def edit
    @pin = Pin.find(params[:id])
    if @pin.creator_id == current_user.id
      render :edit
    else
      render 'api/pins/show'
    end
  end

  def update
    @pin = Pin.find(params[:id])
    if (@pin.creator_id === current_user.id && @pin.update(pin_params))
      render 'api/pins/show'
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  def destroy
    @pin = Pin.find(params[:id])
    @pin.destroy
    render 'api/pins/show'
  end

  def repin
    @pin = Pin.find(params[:pinId])

    # @new_pin = Pin.new
    # @new_pin.title = @pin.title
    # @new_pin.description = @pin.description
    # @new_pin.creator_id = current_user.id
    # @new_pin.board_id = params[:boardId]
    # @new_pin.image = @pin.image
    # debugger
    # @new_pin.save

    new_params = {pin: {}}
    new_params[:pin][:title] = @pin.title
    new_params[:pin][:description] = @pin.description
    new_params[:pin][:creator_id] = current_user.id
    new_params[:pin][:board_id] = params[:boardId]
    new_params[:pin][:image] = @pin.image
    # new_params = {"pin": {"title": @pin.title, "description": @pin.description, "creator_id": current_user.id, "board_id": params[:boardId],"image": @pin.image }}
    debugger
    # params = new_params
    debugger
    @new_pin = Pin.new(pin_params)
    @new_pin.save

    
    render 'api/pins/show'
    # render :index


  end

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :creator_id, :board_id, :image)
  end
end