// Array and Functions Bonus Material
// Define a function maxOfTwoNumbers that takes two numbers as arguments and returns the largest of them. Use the if-then-else construct available in Javascript. You'll have to remember your pre-work, or do some googling to figure this out.

// const maxOfTwoNumbers = function (num1, num2) {
//   if (num1 > num2) {
//     return num1;
//   } else {
//     return num2;
//   }
// };
// console.log (maxOfTwoNumbers(20, 2));
// console.log (maxOfTwoNumbers(99, 100));

// Define a function maxOfThree that takes three numbers as arguments and returns the largest of them.

// const maxOfThree= function (num1, num2, num3) {
//   if (num1 > num2 && num1 >num3) {
//     return num1;
//   } else if (num2 > num1 && num2 > num3) {
//     return num2;
//   } else if (num3 > num1 && num3 > num2) {
//     return num3;
//   }
// };
// console.log (maxOfThree(100, 99, 98));
// console.log (maxOfThree(0, 22, 44));
// console.log (maxOfThree(50, 60, 30));

// Write a function that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.

// const character = function (letter) {
//   if (letter === 'a' || letter === 'e' || letter === 'i' || letter === 'o' || letter === 'u') {
//    return 'true';
//   } else {
//    return 'false';
//   }
// };
// console.log (character('a'));
// console.log (character('b'));
// console.log (character('z'));
// console.log (character('u'));

// Define a function sumArray and a function multiplyArray that sums and multiplies (respectively) all the numbers in an array of numbers. For example, sumArray([1,2,3,4]) should return 10, and multiplyArray([1,2,3,4]) should return 24.
//
// const sumArray = function(arr) {
//   let sum = 0
//   for (let i = 0; i < arr.length; i++) {
//     sum += arr[i];
//   }
//   return sum;
// };
// console.log (sumArray([1, 2, 3, 4, 5]));
// console.log (sumArray([10, 20, 30, 40, 50]));
// console.log (sumArray([1, 2, 3, 4, 5]));
//
// const multiplyArray = function(mlt) {
//   let sum = 1
//   for (let i = 0; i < mlt.length; i++) {
//     sum = sum * mlt[i];
//   }
//   return sum;
// };
// console.log (multiplyArray([1, 2, 3, 4, 5]));
// console.log (multiplyArray([10, 20, 30, 40, 50]));
// console.log (multiplyArray([1, 2, 3, 4, 5]));


// Bonus
// Define a function reverseString that computes the reversal of a string. For example, reverseString("jag testar") should return the string "ratset gaj".
//
// const reverseString = function (str) {
//     str = str.split('');
//     str = str.reverse();
//     str = str.join('')
//     return str;
// };
// console.log(reverseString ('Hello'));//review this later

// // Write a function findLongestWord that takes an array of words and returns the length of the longest one.
// let findLongestWord = function (word) {
//   let longestWord = '';
//   for (let i = 0; i < word.length; i++) {
//     if (word[i].length > longestWord.length)
//       longestWord = word[i];
//   }//why if dont use {}, and why the } should be used here?
//     return longestWord;
// };
// console.log(findLongestWord(['word', 'longestWords', 'name']));


// Write a function filterLongWords that takes an array of words and an number i and returns the array of words that are longer than i.

// let filterLongWords = function (word, i) {
//   let longerWord = '';
//     if (longerWord.length > i)
//     return longerWord;
// };
// console.log(filterLongWords(['word', 'longestWords', 'name'], 3));
// //undefined;
//  js-homework-3.md


// Homework: The Word Guesser
// You'll create a simple word guessing game where the user gets infinite tries to guess the word (like Hangman without the hangman, or like Wheel of Fortune without the wheel and fortune).
//
// let guessTheWord = function (letter) {
//   if (letter === 'a') {
//     console.log ('You get the first letter!');
//   } else if (letter === 'p') {
//     console.log ('You get the second and third letter!');
//   } else if (letter === 'l') {
//     console.log ('You get the forth letter!');
//   } else if (letter === 'e') {
//     console.log ('You get the last letter!');
//   } else {
//     console.log ('Sorry, please try again!');
//   }
// };
// let guessIt = function (word) {
//   if (word === 'apple') {
//     console.log('Congratulation! You got it!');
//   } else {
//     console.log ('Sorry, please try again!');
//   }
// };
// console.log(guessTheWord('a'));
// console.log(guessTheWord('b'));
// console.log(guessTheWord('p'));
// console.log(guessTheWord('l'));
// console.log(guessTheWord('e'));
// console.log (guessIt('apple'));
// console.log (guessIt('banana'));
// Create two global arrays: one to hold the letters of the word (e.g. 'F', 'O', 'X'), and one to hold the current guessed letters (e.g. it would start with '_', '_', '_' and end with 'F', 'O', 'X').

let 
// Write a function called guessLetter that will:
// Take one argument, the guessed letter.
// Iterate through the word letters and see if the guessed letter is in there.
// If the guessed letter matches a word letter, changed the guessed letters array to reflect that.
// When it's done iterating, it should log the current guessed letters ('F__') and congratulate the user if they found a new letter.
// It should also figure out if there are any more letters that need to be guessed, and if not, it should congratulate the user for winning the game.
// Pretend you don't know the word, and call guessLetter multiple times with various letters to check that your program works.
// Bonus: Make it more like Wheel of Fortune:
// Start with a reward amount of $0
// Every time a letter is guessed, generate a random amount and reward the user if they found a letter (multiplying the reward if multiple letters found), otherwise subtract from their reward.
// When they guess the word, log their final reward amount.
// Bonus: Make it like Hangman:
// Keep track of all the guessed letters (right and wrong) and only let the user guess a letter once. If they guess a letter twice, do nothing.
// Keep track of the state of the hangman as a number (starting at 0), and subtract or add to that number every time they make a wrong guess.
// Once the number reaches 6 (a reasonable number of body parts for a hangman), inform the user that they lost and show a hangman on the log.
