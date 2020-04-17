class Api::UsersController < ApplicationController
  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: @user.errors.full_messages, status: 404
      end
  end

  def create
    @user = User.new(user_params)

    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: [@user.errors.full_messages], status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:email, :password, :age)
  end
end
