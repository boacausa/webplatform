Rails.application.routes.draw do
  devise_for :users
  root 'home#index'
  get 'home/index'

  resources :ongs, only: [:index]
end
