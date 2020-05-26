Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update, :destroy] do
      resources :boards, only: [:index]
      resources :pins, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :boards, only: [:create, :edit, :update, :destroy, :index, :show] do
      resources :pins, only: [:index]
    end

    resources :pins, only: [:create, :edit, :update, :destroy, :index, :show]
    
  end

  root "static_pages#root"
end
