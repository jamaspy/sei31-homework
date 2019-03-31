//   _______     __        __  _   __         _      __   __
//  / ___/ /__  / /  ___ _/ / | | / /__ _____(_)__ _/ /  / /__ ___
// / (_ / / _ \/ _ \/ _ `/ /  | |/ / _ `/ __/ / _ `/ _ \/ / -_|_-<
// \___/_/\___/_.__/\_,_/_/   |___/\_,_/_/ /_/\_,_/_.__/_/\__/___/
//
//
console.log('Test');

const accounts = [{
    accName: "checking",
    value: 0
  },
  {
    accName: "savings",
    value: 0
  }
]

//const accTotal = accounts[0].value+accounts[1].value

//    ___              __  _
//   / _/_ _____  ____/ /_(_)__  ___  ___
//  / _/ // / _ \/ __/ __/ / _ \/ _ \(_-<
// /_/ \_,_/_//_/\__/\__/_/\___/_//_/___/
//
// This function changes the background colour
const colorChecker = function() {
  if (accounts[0].value === 0) {
    $('#checking').css("backgroundColor", "red")
  } else {
    $('#checking').css("backgroundColor", "gray")
  }
  if (accounts[1].value === 0) {
    $('#savings').css("backgroundColor", "red")
  } else {
    $('#savings').css("backgroundColor", "gray")
  }
}


// Borrow from account function
const crossAccBorrowChecking = function(){
  checkingInput = Number($('#checking-amount').val());
  const combinedBal = accounts[0].value+accounts[1].value
  if ( checkingInput <= combinedBal) {
    const remainingBal = combinedBal - checkingInput;
    $('#checking-balance').text( "$"+0 );
    $('#savings-balance').text( "$"+ remainingBal)
    accounts[0].value = 0
    accounts[1].value = remainingBal
    colorChecker()
  } else {
    alert ("There is not enough money to continue")
    $('#checking-balance').text( "$"+accounts[0].value );
    $('#savings-balance').text( "$"+accounts[1].value )
    colorChecker()
  }
}
  // check if there is enough money across all the other accounts
  // If there is subtract total from first account first
  // Then subtract from the reamaining account




//    ____              __    __   _     __
//   / __/  _____ ___  / /_  / /  (_)__ / /____ ___  ___ _______
//  / _/| |/ / -_) _ \/ __/ / /__/ (_-</ __/ -_) _ \/ -_) __(_-<
// /___/|___/\__/_//_/\__/ /____/_/___/\__/\__/_//_/\__/_/ /___/

$('#checking-deposit').on('click', function() {
  const checkingInput = Number($('#checking-amount').val());
  accounts[0].value = accounts[0].value + checkingInput
  $('#checking-balance').text("$" + accounts[0].value);
  $('#checking-amount').val('')
  colorChecker();
});

$('#savings-deposit').on('click', function() {
  const savingsInput = Number($('#savings-amount').val());
  accounts[1].value = accounts[1].value + savingsInput
  $('#savings-balance').text("$" + accounts[1].value);
  $('#savings-amount').val('')
  colorChecker();
});

$('#checking-withdraw').on('click', function() {
  const checkingInputM = Number($('#checking-amount').val());
  if (checkingInputM > accounts[0].value) {
    crossAccBorrowChecking();
  } else {
    accounts[0].value = accounts[0].value - checkingInputM;
    $('#checking-balance').text("$" + accounts[0].value);
    $('#checking-amount').val('')
    colorChecker();
  }
});

$('#savings-withdraw').on('click', function() {
  const savingsInputM = Number($('#savings-amount').val());
  if (savingsInputM > accounts[1].value) {
    alert(`You can only have $${accounts[1].value} in your account`)
  } else {
    accounts[1].value = accounts[1].value - savingsInputM;
    $('#savings-balance').text("$" + accounts[1].value);
    $('#savings-amount').val('')
    colorChecker();
  }
});







// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?

//  ___         _        ___                                   _
// / __|___  __| |___   / __|_ _ __ ___ _____ _  _ __ _ _ _ __| |
//| (__/ _ \/ _` / -_) | (_ | '_/ _` \ V / -_) || / _` | '_/ _` |
// \___\___/\__,_\___|  \___|_| \__,_|\_/\___|\_, \__,_|_| \__,_|
//                                           |__/
// const addNumberToChecking = function(checkingInput) {
// accounts[0].value = accounts[0].value + checkingInput
//
//
// const addMoney = function(bankAcc,deposit) {
//   console.log(bankAcc)
//   if (bankAcc == savings) {
//     accounts[0].value = accounts[0].value + deposit
//   } else { // Room for expandabilty
//     accounts[1].value = accounts[1].value + deposit
//   }
//}

// $('#checking-balance').text(accounts[0].value)
// $('#savings-balance').text(accounts[1].value)
