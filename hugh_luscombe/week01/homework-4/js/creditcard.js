const sum = function(obj) {
  let sum = 0;
  for (let i in obj) {
    if (obj.hasOwnProperty(i)) {
      sum += parseFloat(obj[i]);
    }
  }
  return sum;
}

const validateCreditCard = function(i) {
  i = i.split('-').join('');

  let cardNumber = parseFloat(i);

  let lastNumber = i.charAt(i.length - 1);
  if (lastNumber % 2 === 0) {
    console.log(`${lastNumber} is even`);
  } else {
    console.log(`${lastNumber} is odd`);
  };

  let digits = ('' + cardNumber).split('').map(Number);

  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== isNaN) {
      console.log(`number is valid because contains only numbers`);
      break;
    } else {
      console.log(`number is invalid. number contains letters`);
      break;
    }
  }

  const totalSum = sum(digits);
  if (totalSum > 16) {
    console.log(`number is valid. number: ${cardNumber} sums to 16`)
  } else {
    console.log(`Number is invalid. Number does not equal to 16`);
    return false;
  }

    // let set = new Set(digits);
    // if (set !== digits.length) {
    //     console.log(true);
    // } else {
    //     console.log(false);
    // }
    // let difference = {

  for (let i = 1; i < cardNumber.length; i++) {
    if (cardNumber[0] !== cardNumber[i]) {
      console.log(`test passed`);
      break;
    } else {
      console.log(`test not passed`);
      break;
    };
  }

  // console.log(difference);
  // return difference;
};

//
validateCreditCard('9999-9999-8888-0000');
validateCreditCard('a923-3211-9c01-1112');
validateCreditCard('1111-1111-1111-1110');
validateCreditCard('4444-4444-4444-4444');
