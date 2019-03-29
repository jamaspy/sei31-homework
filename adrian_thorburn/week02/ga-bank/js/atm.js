// $(document).ready(function () {

//Keep track of the checking and savings balances somewhere
const accounts = {
  checking: 0,
  savings: 0,
}

////////// Bank processes //////////
const chkDeposit = function (value){
  accounts.checking += value
  $('#checking-balance').text(`$ ${accounts.checking}`) // update display of new ammount
}

$('#checking-deposit').on('click', function(event){
  const $chkDepositAmount = parseInt($('#checking-amount').val()); //
  chkDeposit($chkDepositAmount);
  //$('#checking-amount').val('')
});

const chkWithdraw = function (value){
  accounts.checking -= value
  $('#checking-balance').text(`$ ${accounts.checking}`)
}

$('#checking-withdraw').on('click', function(event){
  const $chkWithdrawAmount = parseInt($('#checking-amount').val()); //
  chkWithdraw($chkWithdrawAmount);
  //$('#checking-amount').val('')
});


const savDeposite = function (value){
  accounts.savings += value
  $('#savings.balance').text(`$ ${accounts.savings}`)
}

$('#savings-deposit').on('click', function(event){
  const $depositAmount = parseInt($('#savings-amount').val()); //
  savDeposite($depositAmount);
  //$('#checking-amount').val('')
});

const savWithdraw = function (value){
  accounts.savings -= value
  $('#savings.balance').text(`$ ${accounts.savings}`)
}

// $('#savings-withdraw').on('click', function(event){
//   const $withdrawAmount = parseInt($('#savings-amount').val()); //
//   savWithdraw($withdrawAmount);
//   //$('#checking-amount').val('')
// });

// $('#checking-deposit').on('click', function(event){
//   const $depositeAmmount = parseInt($('#checking-amount').val()); //
//   chkDeposit($depositeAmmount);
//   $('#checking-amount').val('')
// });
