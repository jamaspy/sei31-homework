class RpsController < ApplicationController
    def play
        render :play
    end

    def result
        @user_guess = params[:user_guess].downcase
        @computer_options = ["rock", "paper", "scissors"]
        @computer_choice = @computer_options[rand(0..2)]
        @result = ""
        
        if @user_guess == "rock" and @computer_choice == "paper"
            @result = "Computer Wins"
        elsif @user_guess == "rock" and @computer_choice == "scissors"
            @result = "You Win"
        elsif @user_guess == "paper" and @computer_choice == "scissors"
            @result = "Computer Wins"
        elsif @user_guess == "paper" and @computer_choice == "rock"
            @result = "You Win"
        elsif @user_guess == "scissors" and @computer_choice == "rock"
            @result = "Computer Wins"
        elsif @user_guess == "scissors" and @computer_choice == "paper"
            @result = "You Win"
        else
            @result = "DRAW!"
        end
        
        render :result
    end
end