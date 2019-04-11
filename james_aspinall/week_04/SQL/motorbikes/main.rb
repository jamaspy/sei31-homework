require 'sinatra'
require 'sinatra/reloader'
require 'sqlite3'

# Homepage Route
get "/" do
  erb :home
end

# Index Route -displays all bikes in database.
get "/motorbikes" do
  @motorbikes = query_db 'SELECT * FROM motorbikes'
  erb :motorbikes_index
end


# CREATE -new bike
get "/motorbikes/new" do
  erb :motorbikes_new
end
post "/motorbikes" do
  query = "INSERT INTO motorbikes (make, model, image) VALUES ('#{params[:make]}','#{params[:model]}','#{params[:image]}')"
  query_db query
  redirect to("/motorbikes")
end


# READ -show bike
get "/motorbikes/:id" do
  motorbikes = query_db "SELECT * FROM motorbikes WHERE id=#{params[:id]}"
  @motorbike = motorbikes.first
  erb :motorbikes_show
end


# UPDATE -edit bike
get "/motorbikes/:id/edit" do
  motorbikes = query_db "SELECT * FROM motorbikes WHERE id=#{params[:id]}"
  @motorbike = motorbikes.first
  erb :motorbikes_edit
end
post "/motorbikes/:id" do
  query = "UPDATE motorbikes SET model='#{params[:model]}', make='#{params[:make]}', image='#{params[:image]}' WHERE id=#{params[:id]}"
  query_db query
  redirect to ("/motorbikes/#{params[:id]}")
end

# DESTROY -delete bike
get "/motorbikes/:id/delete" do
  query_db "DELETE FROM motorbikes WHERE id=#{params[:id]}"
  redirect to("/")
end


# FUNCTION -call database
def query_db(sql_statement)
  puts sql_statement
  db = SQLite3::Database.new 'database.sqlite3'
  db.results_as_hash = true
  result = db.execute sql_statement
  db.close
  result
end
