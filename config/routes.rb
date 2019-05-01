Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root 'home#index'
  get 'home/index'

  localized do
    resources :adoption, only: %i[index show edit new]
    resources :ngos, only: %i[index show]

    namespace :ngo_area do
      resources :ngos, only: %i[index new create edit update]
      resources :pets, only: %i[index new create edit update destroy]
      resources :users, only: %i[index new create edit update destroy]
    end
  end
end
