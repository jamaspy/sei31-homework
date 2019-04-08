require 'pry'

#Global Variable
$a = 0
$b = 0

#Methods
def numbers_getter
 print "Enter first number: "
 $a = gets.to_f
 print "and seccond number: "
 $b = gets.to_f
 # print "to what decimal place: "
 # $d = gets.to_i
end

def show_menu
  puts "-=" * 40
  puts "-=" * 40
  puts "Calculator" # TODO: you could .center here to make it look nice
  puts "-=" * 40 #El cheapo divider horizontal line
  puts "[a] - Addition"
  puts "[s] - Subtraction"
  puts "[d] - Division"
  puts "[m] - Multiplication"
  puts "[r] - Square root"
  puts "[e] - exponent"
  puts "[q] - quit"
  puts "[l] - loan repayments"
  puts "[b] - Body Mass Index Calculator (BMI)"
  puts "[j] - Journey Calculator"
end

show_menu
menu_choice = gets.chomp.downcase

until menu_choice == 'q'
  case menu_choice
  when 'a'
    numbers_getter
    puts "#{$a} + #{$b} = #{$a + $b}" # this removes the .0 bit of a trade off with floats #{($a + $b).round($d)}
  when 's'
    numbers_getter
    puts "#{$a} - #{$b} = #{$a - $b}"
  when 'd'
    numbers_getter
    puts "#{$a} / #{$b} = #{$a / $b}"
  when 'm'
    numbers_getter
    puts "#{$a} * #{$b} = #{$a * $b}"
  when 'r'
    print "enter number "
    a = gets.to_f
    c = Integer.sqrt(a).floor
    puts "#{c}"
  when 'e'
    numbers_getter
    puts "#{$a} ** #{$b} = #{$a ** $b}"
  when 'l'
    # print "Ammount borrowed "
    # a = gets.to_i
    # print "Interest rate "
    # b = gets.to_i
    # print "term of loan in months "
    # c = gets.to_i
    puts "coming soon"
  when 'b'
    print "enter height m "
    a = gets.to_f
    hsq = a ** 2
    print "enter weight in kg "
    b = gets.to_f
    bmi = b / hsq
    puts "with a height of #{a}m and a weight of #{b}kg you ave a BMI of #{bmi.round(1)}"
    if bmi < 18.5
      puts "EAT MORE PIES ASAP"
    elsif bmi < 25
      puts "your pie consumption is perfect"
    elsif bmi < 30
      puts "chill out on the pies bro"
    else
      puts "NO MORE PIES FATTY"
    end
  when 'j'
    puts "
    # Calculate a trip time and cost given inputs for
    # distance
    # miles per gallon
    # price per gallon
    # speed in miles per hour"

  else
    puts "invalid selection"
  end
  show_menu
  menu_choice = gets.chomp.downcase
end

puts "thanks for using super 1337 h4x calculator"



show_menu
