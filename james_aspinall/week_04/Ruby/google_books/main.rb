require "sinatra"
require "sinatra/reloader"
require "httparty"


get "/" do
  erb :home
end

get "/book" do
  @book_title = params[:book_title]
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_title }"
  @info = HTTParty.get url
  @book_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  @book_author = @info["items"][0]["volumeInfo"]["authors"][0]
  @date_published = @info["items"][0]["volumeInfo"]["publishedDate"]
  @number_of_pages= @info["items"][0]["volumeInfo"]["pageCount"]
  erb :book
end

get "/bookshelf" do
  @book_of_the_month = "Jaws"
  url = "https://www.googleapis.com/books/v1/volumes?q=title:#{ @book_of_the_month }"
  @info = HTTParty.get url
  @book_of_the_month_cover = @info["items"][0]["volumeInfo"]["imageLinks"]["thumbnail"]
  erb :bookshelf
end
