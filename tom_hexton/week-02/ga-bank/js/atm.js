$( document ).ready( function() {

	// create a jQuery object for the checking account DOM node
	const $checkingBalance = $( '#checking-balance' );

	// create a jQuery object for the savings account DOM node
	const $savingsBalance = $( '#savings-balance' );
	// get the current innerHTML
	let currentSavings = $savingsBalance.html();
	// remove first character ($) and convert to number
	let currentSavingsNumber = Number(currentSavings.slice(1));
	console.log( 'Savings Balance: $' + currentSavingsNumber, typeof currentSavingsNumber ); // debugging ONLY


	const $checkingInput = $( '#checking-amount' );
	// select checking deposit button & add on click listener
	$( '#checking-deposit' ).on( 'click', function() {

		// get the current innerHTML
		let currentChecking = $checkingBalance.html();
		// remove the dollar sign from returned string and convert to number
		let currentCheckingNumber = Number(currentChecking.slice(1));

		console.log( 'Checking Balance: $' + currentCheckingNumber, typeof currentCheckingNumber); // debugging ONLY

		// assign the value from checking input
		let checkingValue = Number($checkingInput.val());
		// add that value to current checking balance amount
		console.log(typeof checkingValue);
		$checkingBalance.html( `$${currentCheckingNumber} + ${checkingValue}` );

	} );

	// select savings desposit button & add on click listener
	$( '#savings-deposit' ).on( 'click', function() {

		// get current innerHTML
		let currentSavings = $( 'savings-balance' );
		// remove the dollar sign from returned string and convert to number
	});

	// debugger
} );




// select input box for checking account and assign input
