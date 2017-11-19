Rails.application.routes.draw do
  get 'adoption/index'

  get 'adoption/show'

  get 'adoption/edit'

  get 'adoption/new'

  devise_for :users
  root 'home#index'
  get 'home/index'

  resources :ngos, only: [:index]
end
