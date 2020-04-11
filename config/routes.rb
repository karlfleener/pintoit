Rails.application.routes.draw do
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :index, :show, :update, :destroy] do
      resources :boards, only: [:index]
      resources :pins, only: [:index]
    end

    resource :session, only: [:create, :destroy]

    resources :boards, only: [:create, :show, :edit, :update, :destroy]
    resources :pins, only: [:create, :index, :show, :edit, :update, :destroy]
  end

  root "static_pages#root"
end
