class MagicController < ApplicationController
    def play
        render :play
    end

    def result
        @user_question = params[:user_question]
        @magic_answers = ["It is certain.","It is decidedly so.","Without a doubt.","Yes - definitely.","You may rely on it.","As I see it, yes.","Most likely.","Outlook good.","Yes.","Signs point to yes.","Reply hazy, try again.","Ask again later.","Better not tell you now.","Cannot predict now.","Concentrate and ask again.","Don't count on it.","My reply is no.","My sources say no.","Outlook not so good.","Very doubtful."]
        @magic_answer = @magic_answers[rand(0..20)]
        render :result
    end
end