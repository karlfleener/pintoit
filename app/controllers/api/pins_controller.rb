class Api::PinsController < ApplicationController
  def new
    # displays the form to create a pin (modal)
    @pin = Pin.new
    render :new
  end

  def create
    @pin = Pin.new(pin_params)
    if @pin.save
      render "api/pins/show"
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  def index
    # needs to be the all pins of certain user
    @pins = Pin.all
    render "api/pins/index"
  end

  def show
    @pin = Pin.find(params[:id])
    render :show
  end

  def edit
    # only able to edit if pin belongs to current user
    @pin = Pin.find(params[:id])
    if @pin.creator_id == current_user.id
      render :edit
    else
      render 'api/pins/show'
    end
  end

  def update
    # only able to update if pin belongs to current user
    @pin = current_user.pins.find(params[:id])
    if @pin.update(pin_params)
      render 'api/pins/show'
    else
      render json: [@pin.errors.full_messages], status: 422
    end
  end

  def destroy
    # can only destroy if pin belongs to current user
    @pin = current_user.pins.find(params[:id])
    if @pin.destroy
      render 'api/pins/show'
    else
      render json: ["Nothing to delete"], status 404
    end
  end

  private

  def pin_params
    params.require(:pin).permit(:title, :description, :creator_id)
  end
end