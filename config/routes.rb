Rails.application.routes.draw do
  root 'welcome#index'

  get 'sign_up', to: 'registration#new'
  post 'sign_up', to: 'registration#create'



  get 'login', to: 'sessions#new'
  post 'login', to: 'sessions#create'
  delete 'logout', to: 'sessions#destroy'
  get 'logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'




  resources :users, only: [:create, :show, :index]

  

  get 'feed', to: 'feed#index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
