$(document).ready(function() {
console.log("JSFILE CONNECTED")
  //////Store Balances//////
  let $checkingBalance = $("#checking-balance").html();
      $checkingBalance = (parseInt($checkingBalance));
  if ($checkingBalance === 0){
    $checkingBalance.addClass(zero);
  }
  let $savingsBalance = $("#savings-balance").html();
      $savingsBalance = (parseInt($savingsBalance));

  //////Deposit Money//////
  $("#checking-deposit").on("click", function() {
    let $checkingAmount = parseInt($("#checking-amount").val(), 10)
    $("#checking-balance").html(`$${$checkingBalance += $checkingAmount}`)
  })

  $("#savings-deposit").on("click", function() {
    let $savingAmount = parseInt($("#savings-amount").val(), 10)
    $("#savings-balance").html(`$${$savingsBalance += $savingAmount}`)
  })

  //////Withdraw Money//////
  $("#checking-withdraw").on("click", function() {
    let $checkingAmount = parseInt($("#checking-amount").val(), 10)
    $("#checking-balance").html(`$${$checkingBalance -= $checkingAmount}`)
  })

  $("#savings-withdraw").on("click", function() {
    let $savingAmount = parseInt($("#savings-amount").val(), 10)
    $("#savings-balance").html(`$${$savingsBalance -= $savingAmount}`)
  })

});
