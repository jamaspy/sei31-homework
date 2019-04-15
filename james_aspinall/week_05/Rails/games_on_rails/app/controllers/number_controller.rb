class NumberController < ApplicationController

    def play
        render :play
    end

    def result
        @user_number = params[:user_number]
        @computer_number = rand(1..10)
        @result = ""
        if @user_number == @computer_number
            @result = "CORRECT!"
        else
            @result = "Wrong!"
        end
        render :result
    end




end
