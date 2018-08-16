Rails.application.routes.draw do

  root to:"static_pages#root"

  namespace :api,defaults: {format: :json} do
    resources :users, only: [:create, :show, :index]
    resources :photos, only: [:create, :show, :update, :index, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :follows, only: [:create, :destroy]
    resource :session, only: [:create, :destroy, :show]
  end

end
