require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'
require 'active_record'

# Rails will do all this for you automagically.
ActiveRecord::Base.establish_connection(
  :adapter => 'sqlite3',
  :database => 'database.sqlite3'
)

# Optional bonus
ActiveRecord::Base.logger = Logger.new(STDERR)

# Models
class Story < ActiveRecord::Base
  belongs_to :author, :optional => true # Since Rails 5
end

class Author < ActiveRecord::Base
  has_many :stories
end

get '/' do
  erb :home
end

#INDEX
get '/stories' do
@stories = Story.all
erb :stories_index
end
