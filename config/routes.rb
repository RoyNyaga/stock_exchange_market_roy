Rails.application.routes.draw do
  get 'wallets/index'
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  root "pages#home"
  resources :wallets do 
    collection do
      get :main_page
      get :symbols
    end
  end
end
