class Api::PinsController < ApplicationController
  def new
    @pin = Pin.new
    render :new
  end

  def create
    @pin = Pin.new(pin_params)
    @pin.creator_id = current_user.id
    # @pin = current_user.pins.new(pin_params)
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

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :creator_id, :board_id, :image)
  end
end