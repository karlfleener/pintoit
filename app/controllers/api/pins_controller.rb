require 'byebug'
require 'open-uri'

class Api::PinsController < ApplicationController
  def new
    @pin = Pin.new
    render :new
  end

  def create
    @pin = Pin.new(pin_params)
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
    old_pin = Pin.find(params[:pin_id])
    @pin = Pin.new(pin_params)
    @pin.creator_id = current_user.id
    img_copy = open(url_for(old_pin.image))
    @pin.image.attach(io: img_copy, filename: old_pin.title)
    if @pin.save
      render 'api/pins/show'
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :creator_id, :board_id, :image)
  end

end