//overdraft, business logic. 
// need to seperate business logic off the DOM. 
//overdraft side, has to be jQuery free. 
// also, later import this faile later. 
// .val('').focus(); empty value. 

// const render = function(){  //render function to add up everything
//   $('#checkging-balance').text('$' + accounts.checkingBalance);
//   $('#saveings-balance').text('$' + accounts.savingsBalance);
//  $('.zero').removeClass('zero'); / remove all 'zero class' first 
  // if(accounts.savingsBalanc <0){
  //   $('savings-balanc').addClass('zero') //// add 'zero' class of < 0
  // }
// }
//this 'render' funtion has to be in the beginning of code. 
// advantage of this render code is we can always change for the promotion or any event, without touching DOM. 


//call the render function every time when data changed.
// seperate the function, function by function. 

//// Preferred way below. Seperated logic. 
//// check  the function every step if works or not. 


const accounts = {
  checkingBalance : 0, 
  savingsBalance: 0, 
  total: function(){
    return this.checkingBalance + this.savingsBalance; 
  } // total has to be a function. Add the negative method as well into here. 
}



// ////////////// logic integrated. The way to avoid. From below. 

// $(document).ready(function(){

//  $('#checking-deposit').on('click', function(){

//   const amount=$('#checking-amount').val()
//   const currentBalance = $('#checking-balance').text().slice(1)


//   // $('checking-amount').val('').focus();

//   const newBalance = amount + currentBalance;
//   console.log(newBalance);
//   $('#checking-balance').text('$'+ newBalance)
//  })

//  $('#checking-withdraw').on('click', function(){
//    const amount= + $('#checking-amount').val();
//    const currentBalance = $('#checking-balance').text().slice(1)
//    const newBalance = currentBalance - amount; 

//    if(newBalance >=0){
//      $('#checking-balance').text('$'+newBalance)
//    }
//  })


//  $('#savings-deposit').on('click', function(){

//   const amount=$('#savings-amount').val()
//   const currentBalance = $('#savings-balance').text().slice(1)

//   const newBalance = amount + currentBalance;
//   console.log(newBalance);
//   $('#savings-balance').text('$'+ newBalance)
//  })

//  $('#savings-withdraw').on('click', function(){
//    const amount= + $('#savings-amount').val();
//    const currentBalance = $('#savings-balance').text().slice(1)
//    const newBalance = currentBalance - amount; 

//    if(newBalance >=0){
//      $('#savings-balance').text('$'+newBalance)
//    }
//  })
// })

/////////