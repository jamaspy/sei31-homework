Rails.application.routes.draw do

root :to => 'home#index'

get '/eightball' => 'eightball#input'
get '/eightball/output' => 'eightball#output' 

get '/number' => 'number#start'
get '/number/guess' => 'number#guess'

get '/spr' => 'spr#play'
get '/spr/result' => 'spr#result'

end
