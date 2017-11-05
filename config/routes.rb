Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'home/index'

  resources :ngos, only: [:index]
end
