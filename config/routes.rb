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

  namespace :v1, defaults: { format: 'json' } do
    get 'things', to: 'things#index'
    get 'ngos', to: 'ngos#index'
    get 'ngo/:id', to: 'ngos#show'
  end

  get '*page', to: 'static#index', constraints: ->(req) do
    !req.xhr? && req.format.html? && req.url.exclude?('/ngo_area/new')
  end

  get '*page', to: 'ngo_area/react#index', constraints: ->(req) do
    !req.xhr? && req.format.html? && req.url.include?('/ngo_area/new')
  end
end
