require 'pry'

def show_menu
  puts "-=" * 50
  puts "Shitty Calculator".center(100)
  puts "-=" * 50
  puts ""
  puts "[a] - Addition"
  puts "[s] - Subtract"
  puts "[d] - Divide"
  puts "[m] - Multiple"
  puts "[dist] - Distance"
  puts "* " * 20
  puts "[q] - Quit "
  puts ""
  puts "*" * 50
  puts "Choice A Function & Input Your Numbers"
  puts "*" * 50
end

show_menu

menu_choice = gets.chomp.downcase

until menu_choice == "q"
  case menu_choice
    when "a"
      def add
        puts "First Number"
        a = gets.chop.to_i
        puts "Second Number"
        b = gets.chop.to_i
        puts "Answer: #{a} + #{b} = #{a + b}"
      end
      add()
    when "a"
      def add
        puts "First Number"
        a = gets.chop.to_i
        puts "Second Number"
        b = gets.chop.to_i
        puts "Answer: #{a} + #{b} = #{a + b}"
      end
      add()
    when "s"
      def subtract
        puts "First Number"
        a = gets.chop.to_i
        puts "Second Number"
        b = gets.chop.to_i
        puts "Answer: #{a} - #{b} = #{a - b}"
      end
      subtract()
    when "d"
      def divide
        puts "First Number"
        a = gets.chop.to_i
        puts "Second Number"
        b = gets.chop.to_i
        puts "Answer: #{a} / #{b} = #{a / b}"
      end
      divide()
    when "m"
      def multiple
        puts "First Number"
        a = gets.chop.to_i
        puts "Second Number"
        b = gets.chop.to_i
        puts "Answer: #{a} x #{b} = #{a * b}"
      end
      multiple()
    when "dist"
      def distance
        puts "Enter Your Speed (MPH)"
        a = gets.chop.to_i
        puts "Enter Your Time (In Minutes)"
        b = gets.chop.to_i / 60
        puts "Answer: Your Will Travel #{a * b} miles"
      end
      distance()
    else
  puts "Invalid Selection"
end

show_menu
menu_choice = gets.chomp.downcase

end

puts "Thanks for using Shitty Calculator"
