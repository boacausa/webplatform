Rails.application.routes.draw do
  devise_for :users, controllers: { omniauth_callbacks: 'users/omniauth_callbacks' }

  root 'home#index'
  get 'home/index'

  localized do
    resources :ngos, only: %i[index show]

    namespace :ngo_area do
      resources :ngos, only: %i[index new create edit update]
      resources :pets, only: %i[index new create edit update destroy]
      resources :users, only: %i[index new create edit update destroy]
      resources :adoption_interests, only: %i[index]
    end
  end

  namespace :v1, defaults: { format: 'json' } do
    get 'ngos', to: 'ngos#index'
    get 'ngo_cities', to: 'ngos#cities'
    get 'ngo/:id', to: 'ngos#show'
    get 'pets_for_adoption', to: 'pets_for_adoption#index'
    post 'pets_for_adoption/register_interest', to: 'pets_for_adoption#register_interest'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html?
  end
end
