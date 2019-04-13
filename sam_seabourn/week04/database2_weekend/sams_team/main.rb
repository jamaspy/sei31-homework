require 'sqlite3'           
require 'pry'
require 'sinatra'
require 'sinatra/reloader'

# Rails will do all this for you automagically.
ActiveRecord::Base.establish_connection(
  :adapter  => 'sqlite3',
  :database => 'database.sqlite3'
)

ActiveRecord::Base.logger = Logger.new(STDERR)


# class Pokemon < ActiveRecord::Base
#   # belongs_to :region, :optional => true # Since Rails 5
# end
# #
# class Regions < ActiveRecord::Base
#   # has_many :pokemon
# end

### Cross data goes here


get '/' do
  erb :home
end


#Display all pokemon
get '/pokemon' do
  @pokemon = Pokemon.all
  p @pokemon
  erb :pokemon_list
end

after do
  ActiveRecord::Base.connection.close
end


# binding.pry
