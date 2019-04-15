Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
root :to => "pages#index"

get "/magic" => "magic#play"
get "/magic/result" => "magic#result"

get "/number" => "number#play"
get "/number/result" => "number#result"

get "/rps" => "rps#play"
get "/rps/result" => "rps#result"

end
