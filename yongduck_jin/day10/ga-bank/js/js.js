

let bankRecord = {
  checking:50,
  savings:100
}
$(document).on('ready', function(){


// 2. Add funciton, a User to deposit. 
// //function to deposit.  same function, but +, - change. 
// // if the balance 0, refuse. 

// 3. Function to withdraw money
// //lets use the same function as above. 


// 1. Make an object ot save the balance. You have keep the track of record 
//object out of function. Function would update this. 
//user infor, and money, withdrawal or depoists to be recorded. 


//dollar sign to be managed later. 


//link with webpage. 
let $checking = $('#checking-balance') //done
let $savings = $('#savings-balance') //done

$checking.html(bankRecord.checking)

$savings.html(bankRecord.savings)

// let that; 
// const inOut = function(num){
//   console.log($('#checking-amount').val()); 
//   console.log('$depositButton.value', $depositButton.value);
  
//    bankRecord.checking = that.value == 'Deposit' ? bankRecord.checking +numb.val() : bankRecord.checking -num.val(); 
   
// }

let $moneyInOut = $('#checking-balance').html() // to be displayed. 

// console.log($checkingAmount);

$checkingAmount =$('#checking-amount')
console.log($checkingAmount);
// console.log('checking amount val()', $checkingAmount.val());

let $depositButton = $('#checking-deposit'); // deposit button
$depositButton.on('click', (event) => {
  console.log('this is event.this: ', event.target.value);
  // console.log(`this is this:`, this.currentTarget.val());
  let buttonClicked = event.target.value //why this no

  console.log('this is event.this'. event);
  console.log('function fired. checking amount val():', $checkingAmount.val())
  console.log('this is :', this);

  console.log('$depositButton.value', $depositButton.val());
  
bankRecord.checking = buttonClicked == 'Deposit' ? bankRecord.checking +Number($checkingAmount.val()) : bankRecord.checking -Number($checkingAmount.val()); 


})
  // console.log('this.value', this.value);
  // console.log('clicked');
  // console.log(this.value);
  // that = this
  
  
//   (event)=>{


//   //get the val() off and add later. 
// //  inOut($checkingAmount)
// }






// 4. Update page so that use can see it "change"
//jquery, and html ID to be used. 

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



  
})
