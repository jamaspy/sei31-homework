//Part One
const squareNumber = function (number) {
  const result = number ** 2;
  console.log(`The result of squaring the number ${number} is ${result}.`)
  return result;
};

squareNumber(3);

const halfNumber = function (number) {
  const result = number / 2;
  console.log(`Half of ${number} is ${result}.`)
  return result;
};

halfNumber(10);

const percentOf = function (num1, num2) {
  const result = num1 / num2 * 100;
  console.log(`${num1} is ${result}% of ${num2}`)
  return result;
};

percentOf(2, 4);

const areaOfCircle = function (radius) {
  const result = Math.PI * radius ** 2;
  const resultTwoDigit = result.toFixed(2);
  console.log(`The area for a circle with radius ${radius} is ${resultTwoDigit}.`)
  return resultTwoDigit;
};

areaOfCircle(5);

//Part Two

//draft
//const superFunction = function (number) {
//   const halfNumber = number / 2;
//   const squareNumber = halfNumber ** 2;
//   const areaOfCircle = Math.PI * squareNumber ** 2;
//   const percentOf = ( areaOfCircle / squareNumber ) * 100;
//   console.log(`${areaOfCircle} is ${percentOf}% of ${squareNumber}`)
// };

const superFunction = function (number) {
  const superHalf = halfNumber(number);
  const superSquare = squareNumber(superHalf);
  const superCircle = areaOfCircle(superSquare);
  const superPercent = percentOf(superCircle, superSquare);
  console.log(`${superPercent}`)
};

superFunction(10);
