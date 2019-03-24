/*Part 1, Rectangle
Given the following a rectangle object like the one below, write the following functions:

isSquare - Returns whether the rectangle is a square or not
area - Returns the area of the rectangle
perimeter - Returns the perimeter of the rectangle*/

const rectangleA = {
  length: 4,
  width: 4
};

const isSquare = function (rectangle) {
  if (rectangle.length === rectangle.width) {
    return `Rectangle is a square`
  }
  return `It's a rectangle`
};

console.log (isSquare(rectangleA));

const areaRect = function (rectangle) {
  const area = rectangle.width * rectangle.length;

  return `The area of the rectangle is ${area}².`
};

console.log (areaRect(rectangleA));

const perimeterRect = function (rectangle) {
  const perimeter = rectangle.width * 2 + rectangle.length * 2;

  return `The perimeter of the rectangle is ${perimeter}.`
};

console.log (perimeterRect(rectangleA));

/*Part 2, Triangle
Given the following a triangle object like the one below, write the following functions:

isEquilateral - Returns whether the triangle is equilateral or not
isIsosceles - Returns whether the triangle is isosceles or not
area - Returns the area of the Triangle
isObtuse - Returns whether the triangle is obtuse or not*/

const triangleA = {
  sideA: 3,
  sideB: 4,
  sideC: 4
};

const isEquilateral = function (triangle) {
  if (triangle.sideA === triangle.sideB === triangle.sideC) {
    return `Triangle is equilateral`
  }
  return `Not equilateral`
};

console.log(isEquilateral(triangleA));

const isIsosceles = function (triangle) {
  if (triangle.sideA === triangle.sideB || triangle.sideB == triangle.sideC || triangle.sideC == triangle.sideA) {
    return `Triangle is isosceles`
  }
  return `Not isosceles`
};

console.log(isIsosceles(triangleA));

//area = sqrt p(p-a)(p-b)(p-c) p=a+b+c/2 https://www.mathopenref.com/heronsformula.html

const areaTriangle = function (triangle) {
  const p = (triangle.sideA + triangle.sideB + triangle.sideC)/2;
  const area = Math.sqrt(p * (p - triangle.sideA) * (p - triangle.sideB) * (p - triangle.sideC));

  return `The area of the triangle is ${area.toFixed(2)}².`
}

console.log(areaTriangle(triangleA));

const isObtuse = function (triangle) {
  const max = Math.max(triangle.sideA, triangle.sideB, triangle.sideC);
  let calcA = triangle.sideA > Math.sqrt(triangle.sideB * triangle.sideB + triangle.sideC * triangle.sideC);
  let calcB = triangle.sideB > Math.sqrt(triangle.sideA * triangle.sideA + triangle.sideC * triangle.sideC);
  let calcC = triangle.sideC > Math.sqrt(triangle.sideC * triangle.sideA + triangle.sideB * triangle.sideB);

  if (triangle.sideA == max && calcA) {
    return `Triangle is obtuse`;
  } else if (triangle.sideB == max && calcB) {
    return `Triangle is obtuse`;
  } else if (triangle.sideC == max && calcC){
    return `Triangle is obtuse`;
  } else {
    return `Triangle is not obtuse`
  }
};

console.log(isObtuse(triangleA));

/*
Write a function called cashRegister that takes a shopping cart object. The object
contains item names and prices (itemName: itemPrice). The function should return the
total price of the shopping cart.

Example

// Input
const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};

// Output
cashRegister(cartForParty)); // 60.55 */

const cartForParty = {
  banana: "1.25",
  handkerchief: ".99",
  Tshirt: "25.01",
  apple: "0.60",
  nalgene: "10.34",
  proteinShake: "22.36"
};


const cashRegister = function (cart) {
  let items = Object.keys(cart);
  let sum = 0;

  for (let i = 0; i < items.length; i++) {
    let itemName = items[i];
    let itemPrice = cart[itemName];
    sum += Number.parseFloat(itemPrice);
  }
  return sum;
};


console.log(cashRegister(cartForParty));

/*Credit Card Validation
You're starting your own credit card business. You've come up with a new way to validate credit cards
with a simple function called validateCreditCard that returns true or false.

Here are the rules for a valid number:

Number must be 16 digits, all of them must be numbers
You must have at least two different digits represented (all of the digits cannot be the same)
The final digit must be even
The sum of all the digits must be greater than 16
The following credit card numbers are valid:

9999-9999-8888-0000
6666-6666-6666-1666
The following credit card numbers are invalid:

a923-3211-9c01-1112 invalid characters
4444-4444-4444-4444 only one type of number
1111-1111-1111-1110 sum less than 16
6666-6666-6666-6661 odd final number*/


const validateCreditCard = function (cardnumber) {

  if (cardnumber.length !== 16) {
    return false;
  }

  for (let i = 0; i < cardnumber.length; i++){
    let currentNumber = cardnumber[i];

    currentNumber = Number.parseInt(currentNumber);
    if(!Number.isInteger(currentNumber)){
      return false
    }
  }

  let obj = {};
  for (let i = 0; i < cardnumber.length; i++) {
    obj[cardnumber[i]] = true;
  }
  if(Object.keys(obj).length < 2){
    return false;
  }

  if (cardnumber[cardnumber.length - 1] % 2 !== 0) {
    return false;
  }

  let sum = 0;

  for(var i = 0; i < cardnumber.length; i++){
    sum += Number(cardnumber[i]);
  }
  if(sum <= 16){
    return false;
  }

  return true;
};



console.log(validateCreditCard('9999777788880000'));
console.log(validateCreditCard('6666666666661666'));
console.log(validateCreditCard('a92332119c011112'));
console.log(validateCreditCard('4444444444444444'));
console.log(validateCreditCard('1211111111111112'));
console.log(validateCreditCard(9999-9999-8888-0000));

/*avaScript Bank
In this homework, you'll create a basic bank in Javascript. The bank has many accounts and the following capabilities that you need to write.

Bank
There is only one bank. This bank has an array of accounts. The bank needs a method that will return the total sum of money in the accounts.
 It also needs an addAccount method that will enroll a new account at the bank and add it to the array of accounts.
 There is no need to create additional functions of the bank to delete accounts, etc.

The bank has many accounts. Accounts should be objects that all share a set of common functionality.

Accounts
Accounts have a current balance and owner's name. You should be able to deposit or withdraw from an account to change the balance.

There is no need to write a user interface. Make sure functions return values -- you may also have your functions console.log() values
to help you see your code working.

You should write a basic story through a series of JavaScript commands that shows that the methods do indeed work as expected: add some
 accounts, show the total balance, make some deposits and withdrawals, show the new total balance.*/
