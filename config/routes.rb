Rails.application.routes.draw do
  get 'ngos/index'

  get 'adoption/index'

  get 'adoption/show'

  get 'adoption/edit'

  get 'adoption/new'

  devise_for :users
  root 'home#index'
  get 'home/index'

  namespace :ngo_area do
    resources :ngos, only: %i[index new create edit update]
  end
end
