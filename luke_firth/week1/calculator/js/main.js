console.log("Running......");

/*
The Calculator
Part 1
Write a function called squareNumber that will take one argument (a number), square that number, and return the result.
It should also log a string like "The result of squaring the number 3 is 9."
Write a function called halfNumber that will take one argument (a number), divide it by 2, and return the result.
It should also log a string like "Half of 5 is 2.5.".
Write a function called percentOf that will take two numbers, figure out what percent the first number represents of the second number, and return the result.
It should also log a string like "2 is 50% of 4."
Write a function called areaOfCircle that will take one argument (the radius), calculate the area based on that, and return the result.
It should also log a string like "The area for a circle with radius 2 is 12.566370614359172."
Bonus: Round the result so there are only two digits after the decimal.
*/

const squareNumber = function(num) {
  result = num * num;
  console.log(`The result of squaring the number ${num} is ${result}`);
  return result;
};

//squareNumber(10);

const halfNumber = function(numH) {
  let result = numH / 2;
  console.log(`Half of ${numH} is ${result}`);
  return result;
};

//halfNumber(6);

const percentOf = function(num1, num2) {
  result = (num1 * 100) / num2;
  console.log(`${num1} is ${result}% of ${num2}`);
  return result;
};

//percentOf(4, 8);

const areaOfCircle = function(num1) {
  result = Math.PI * num1 * num1;
  console.log(`The area for a circle with radius ${num1} is ${result}.`);
  return result;
};

//areaOfCircle(10);

/*
Part 2
Write a function that will take one argument (a number) and perform the following operations, using the functions you wrote earlier1:

Take half of the number and store the result.
Square the result of #1 and store that result.
Calculate the area of a circle with the result of #2 as the radius.
Calculate what percentage that area is of the squared result (#3).
 js-homework-2.md
*/

const badCalc = function(res1) {
  const ans1 = halfNumber(res1);
  const ans2 = squareNumber(ans1);
  const ans3 = areaOfCircle(ans2);
  const ans4 = percentOf(ans3, ans2);
  const answer = ans4;
  return answer;
};
//badCalc(10);

/*
Strings
These exercises will test your knowledge of string functions, conditionals, and arrays.
For many of them, you will want to consult the JavaScript strings reference to find useful string methods to call.

DrEvil
Create a function called DrEvil.
It should take a single argument, an amount, and return ' dollars', except it will add '(pinky)' at the end if the amount is 1 million. For example:

  DrEvil(10): 10 dollars
  DrEvil(1000000): 1000000 dollars (pinky)
*/

const drEvil = function(amount) {
  if (amount === 1000000) {
    console.log(`${amount} (pinky)`);
  }
}
//drEvil(10);
//drEvil(1000000);

/*
MixUp
Create a function called mixUp.
It should take in two strings, and return the concatenation of the two strings (separated by a space) slicing out and swapping the first 2 characters of each.
 You can assume that the strings are at least 2 characters long.
 For example:

  mixUp('mix', 'pod'): 'pox mid'
  mixUp('dog', 'dinner'): 'dig donner'
Look up the JavaScript string reference to find methods which may be useful!
*/

const mixUp = function(word1, word2) {
  const fTwo = word1.substring(0, 2);
  const fEnd = word1.substring(2, 20);
  const sTwo = word2.substring(0, 2);
  const sEnd = word2.substring(2, 20);
  console.log(`${sTwo}${fEnd} ${fTwo}${sEnd}`);
}
//mixUp("Hello", "World");

const mixUpVTwo = function(word1, word2) {
  const minLastTwoWordOne = word1.slice(0, -2);
  const lastTwoWordOne = word1.slice(-2, 20);
  const minLastTwoWordTwo = word2.slice(0, -2);
  const lastTwoWordTwo = word2.slice(-2, 20);
  console.log(`${minLastTwoWordOne}${lastTwoWordTwo} ${minLastTwoWordTwo}${lastTwoWordOne}`);
}
//mixUpVTwo("big", "dog");

/*

FixStart
Create a function called fixStart.
It should take a single argument, a string, and return a version where all occurences of its first character have been replaced with '*', except for the first character itself.
You can assume that the string is at least one character long.
For example:

fixStart('babble'): 'ba**le'
Verbing
  */
/*
const fixStart = function(str){
  const fLetter = str.substring(0, 1);
  const rest = str.substring(1, 20);
  let newWord = rest.replace(/fLetter/g, "*")
  console.log(`${fLetter}${newWord}`);
}
fixStart("babble");
*/




/*
const fixStart = function(word){
  const firstLetter = word[0]
  const replaceLetter = "*";
  for(var i = 0; i < word.length; i++){
    if(word[i] === firstLetter){
      word[i] = replaceLetter;
    }
  }
  console.log(word);
}
 fixStart("babble");
*/
/*
const fixStart = function(word){
const firstLetter = word[0]
const newWord = word.replace(/word[0]/g, "*")
  console.log(newWord);
}
fixStart("Babble");
*/

/*
 const fixStart = function(word){
   for(var i=0; i<word.length; i++){
       if(word[i] === word[0]){
         word.replace(word[i] = "*");
       };
 console.log(word);
 }
  fixStart("babble");
*/



  /*
Create a function called verbing.
It should take a single argument, a string.
If its length is at least 3, it should add 'ing' to its end, unless it already ends in 'ing', in which case it should add 'ly' instead.
If the string length is less than 3, it should leave it unchanged. For example:

  verbing('swim'): 'swimming'
  verbing('swimming'): 'swimmingly'
  verbing('go'): 'go'
Not Bad
Create a function called notBad that takes a single argument, a string.

It should find the first appearance of the substring 'not' and 'bad'.
If the 'bad' follows the 'not', then it should replace the whole 'not'...'bad' substring with 'good' and return the result.
If it doesn't find 'not' and 'bad' in the right sequence (or at all), just return the original sentence.
For example:

  notBad('This dinner is not that bad!'): 'This dinner is good!'
  notBad('This movie is not so bad!'): 'This movie is good!'
  notBad('This dinner is bad!'): 'This dinner is bad!'
  */
