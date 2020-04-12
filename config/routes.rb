Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
    resources :boards, only: [:create, :index, :show, :edit, :update, :destroy]
    resources :pins, only: [:create, :edit, :update, :destroy, :index, :show,]
  end

  root "static_pages#root"
end
