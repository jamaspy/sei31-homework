
// #Title: ATM App

// ###Type:
// - Lab

// ###Summary
// - This lab will help you practice JavaScript functions and manipulating the DOM with jQuery.
// - You'll be selecting elements, manipulating HTML, and manipulating style along
// with building out the logic using JavaScript.

// ###Objectives:
// - DOM selection, appending, removal, updating

// ###Specification:


// <!-- * Keep track of the checking and savings balances somewhere  -->

// <!-- * Add functionality so that a user can deposit money into one of the bank accounts.
// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change.
// * Add functionality so that a user can withdraw money from one of the bank accounts.

// * Make sure you are updating the display and manipulating the HTML of the page
// so a user can see the change. -->
// <!-- * Make sure the balance in an account can't go negative. If a user tries to
// withdraw more money than exists in the account, ignore the transaction.
// * When the balance of the bank account is $0 the background of that bank account
// should be red. It should be gray when there is money in the account. -->

// * What happens when the user wants to withdraw more money from the checking
// account than is in the account? 

// These accounts have overdraft protection, so if
// a withdrawal can be covered by the balances in both accounts, take the checking
// balance down to $0 and take the rest of the withdrawal from the savings account.
// If the withdrawal amount is more than the combined account balance, ignore it.
// * Make sure there is overdraft protection going both ways.
// * Are there ways to refactor your code to make it DRYer?




let bankRecord = {
  checking:4, //in order to avoid "if, else" later
  savings:5
}

// $('.zero').removeClass('zero') // last part '.' not required for 'zero'
// function outside of juqery, to check zero and add every time. 

$(document).on('ready', function(){

let $checkingBalance = $('#checking-balance') //done
let $savingsBalance = $('#savings-balance') //done

let $body = $('body'); 

function moneyInOut(acc, button, enteredValue, acc2){
  
  let minus = bankRecord[acc] - Number(enteredValue)
  let total = bankRecord[acc2] -minus;

  if(button =='Deposit') { 
    bankRecord[acc] += Number(enteredValue); 
   
    } else if(button =='Withdraw') { 
      if((bankRecord[acc] + bankRecord[acc2]) - Number(enteredValue) <0 ) {
        total = total
        console.log('Negative balance function fired');
         return
      }
      if(bankRecord[acc]- Number(enteredValue) < 0 ) {
        bankRecord[acc2] = bankRecord[acc2] +bankRecord[acc] - Number(enteredValue)
        ///
        bankRecord[acc] = 0 }
       
      if(bankRecord[acc] - Number(enteredValue) >= 0){ //because of bloody '='
        bankRecord[acc] -= Number(enteredValue)  
      }
    }
    
    if(bankRecord.checking == 0){   
      
      $('#checking').addClass('zero')
    } else if(bankRecord.checking >= 0) {
      $('#checking').removeClass('zero')
    }

    if(bankRecord.savings == 0){
      $('#savings').addClass('zero')
    }else if(bankRecord.savings >= 0){
      $('#savings').removeClass('zero')
    }
    $checkingBalance.html(bankRecord.checking) 
  $savingsBalance.html(bankRecord.savings)

}



function whichMachin (event){
  let account, buttonName, entered, account2
  
  if(event.target.id =='checking-deposit' || event.target.id =="checking-withdraw"){
    account = 'checking';
    account2 = 'savings'
    buttonName = event.target.value
    entered = $('#checking-amount').val();

  } else if(event.target.id == 'savings-deposit' || event.target.id == 'savings-withdraw' ){
    account = 'savings'
    account2 = 'checking'
    buttonName =event.target.value
    entered =$('#savings-amount').val(); 
  }
  moneyInOut(account, buttonName, entered, account2) // 여기서 bankReor[account] 형식아로 가면, 옵첵트에 대한 레퍼런스를 넘기는 게 아니라, 값을 넘겨 버린다. Any walkaround?
}

$body.on('click', (event)=>{
  whichMachin(event)})

})  










// 5. no Negative balance.
//existing css class to be used. 

// 6. Zero background for Zero balance, Grey when money back 
//existing css class to be used. 


// make it work for each account, and then overdraft function to be made. 

// 7. Overdraft protection
// -Take money from checking account first, 
// -rest of money from saving account. 
// -The other way possible. 

// same function to use, changing argument order. 
// this functino should be stored with the first function. 
