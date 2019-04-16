class NumberController < ApplicationController
  
  def start
    
    
    render :start
  end
  
  def guess
    max = params[:max]
    @random_number = rand(1..max.to_i)
    guess = params[:guess]
    
    if guess.to_i > @random_number
      @response = "Too High"
    elsif guess.to_i < @random_number
      @response = "Too Low"
    elsif guess.to_i == @random_number
      @response = "You Guessed Correctly, You are a Genius"
    end

    render :guess
  end
  

  
end