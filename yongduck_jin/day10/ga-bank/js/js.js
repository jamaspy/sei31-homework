

//dollar sign to be managed later. 
// 1. Make an object ot save the balance. You have keep the track of record 
let bankRecord = {
  checking:0,
  savings:0
}
$(document).on('ready', function(){


// 2. Add funciton, a User to deposit. 
// //function to deposit.  same function, but +, - change. 
// // if the balance 0, refuse. 

// 3. Function to withdraw money
// //lets use the same function as above. 



//user infor, and money, withdrawal or depoists to be recorded. 

//object out of function. Function would update this. 


let $checkingBalance = $('#checking-balance') //done
let $savingsBalance = $('#savings-balance') //done

$checkingBalance.html(bankRecord.checking) //these two lines can be pushed down later, so that I can use for h1 update. 
$savingsBalance.html(bankRecord.savings)



// function compar(value, id){
// if(value == 'Deposit'){

// }
// }


// console.log('this is buttons', buttons);

let $inOutCheckingAccount =$('#checking-amount') //number to put
// let $inOutBalanceAccount =$('#checking-amount')
// let $depositButton = $('#checking-deposit'); // deposit button

let $bubbleTest = $('body')
console.log('buble', $bubbleTest);
$bubbleTest.on('click', (e)=>{
  console.log(e.target.value, e.target.id); //target.value is working, but currentTarget not working. 
})

let buttons = $('input[type=button]') // so I don't need this. just attach event listener to body. 

// buttons.on('click', (event)=>{
//   console.log('this is event', event.target.value, event.target.id);
  
//   bankRecord.checking = event.target.value == 'Deposit' ? bankRecord.checking 
//   +Number($inOutCheckingAccount.val()) : bankRecord.checking -Number($inOutCheckingAccount.val()); 

  // bankRecord.savings = event.target.value == 'Deposit' ? bankRecord.checking 
  // +Number($checkingAmount.val()) : bankRecord.checking -Number($checkingAmount.val());
// })


// $depositButton.on('click', (event) => {

//   //만약 내가 event.target.valu 를 활용하면, 이 펑션을 depositButton 밖으로 꺼내서, 공야할 수 있다. 
//   // 콜백 안에서 event를 상속 받아서 다시 실행하면 된다. 
//   // console.log('this is event.this: ', event.target.value);
//   let buttonClicked = event.target.value //why 'this' does not work?   
//   bankRecord.checking = buttonClicked == 'Deposit' ? bankRecord.checking 
//   +Number($checkingAmount.val()) : bankRecord.checking -Number($checkingAmount.val()); 


// })
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
