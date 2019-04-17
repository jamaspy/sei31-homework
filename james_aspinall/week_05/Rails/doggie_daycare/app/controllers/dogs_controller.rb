class DogsController < ApplicationController
    def index
      @dogs = Dog.all
    end

    # def show
    #     @dog = Dogs.find params[:id]
    #   end
end
