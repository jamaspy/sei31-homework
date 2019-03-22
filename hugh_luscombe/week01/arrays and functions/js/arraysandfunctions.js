const maxOfTwoNumbers = function(num1, num2) {
  let biggerNumber;
  if (num1 > num2) {
    biggerNumber = num1
  } else {
    biggerNumber = num2
  };
  return biggerNumber;
};

console.log(maxOfTwoNumbers(5, 10));

const maxOfThreeNumbers = function(num1, num2, num3) {
  let biggerNumber;
  if ((num1 > num2) && (num1 > num3)) {
    biggerNumber = num1
  } else if ((num2 > num1) && (num2 > num3)) {
    biggerNumber = num2
  } else if ((num3 > num1) && (num3 > num2)) {
    biggerNumber = num3
  };
  return biggerNumber;
};

console.log(maxOfThreeNumbers(20, 5, 10));
console.log(maxOfThreeNumbers(10, 5, 30));

const isVowel = function(character) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  for (var i = 0; i < vowels.length; i++) {
    if (vowels[i] === character) {
      return true;
    } else {
      return false
    }
  }
};

console.log(isVowel('a'));
console.log(isVowel('b'));
console.log(isVowel('c'));

const sumArray = function(arr) {
  let sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum += arr[i];
  };
  return sum;
};

console.log(sumArray([1, 2, 3, 4]));

const multiplyArray = function(arr) {
  let multiply = 1;
  for (var i = 0; i < arr.length; i++) {
    multiply *= arr[i];
  };
  return multiply;
};

console.log(multiplyArray([1, 2, 3, 4]));

const reverseString = function(string) {
  let reversal = '';
  for (var i = 0; i < string.length; i++) {
    reversal = string[i] + reversal;
  }
  return reversal;
};

console.log(reverseString("tag reversal"));
console.log(reverseString("i love coding"));

const findLongestWord = function(arr) {
  let lgth = 0;
  let longest;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > lgth) {
      lgth = arr[i].length;
      longest = arr[i];
    }
  }
  return longest;
};

console.log(findLongestWord(['hi', 'there', 'guy']));
console.log(findLongestWord(['i', 'am', 'frustrated']));

const filterLongWords = function(arr, num) {
  let longest = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i].length > num) {
      longest.push(arr[i]);
    }
  };
  return longest;
};

console.log(filterLongWords(['this', 'is', 'an', 'array'], 3));
console.log(filterLongWords(['this', 'is', 'an', 'array'], 6));
