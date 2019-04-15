class SprController < ApplicationController
  
  def play
    
    render :play
  end
  
  def result
    @move = params[:max]
    @computer_move = ['scissors','paper','rock'][rand(1..3)]
    
    if @computer_move == @move
      @result = "It is a Tie!"
    elsif @computer_move == 'rock' && @move = 'paper'
      @result = "You Win!"
    elsif @computer_move == 'rock' && @move = 'scissors'
      @result = "You Lose!"
    elsif @computer_move == 'paper' && @move = 'scissors'
      @result = "You Win!"
    elsif @computer_move == 'paper' && @move = 'rock'
      @result = "You Lose!"
    elsif @computer_move == 'scissors' && @move = 'rock'
      @result = "You Win!"
    elsif @computer_move == 'scissors' && @move = 'paper'
      @result = "You Lose!"
    end
    
    
    render :result
  end
  
end