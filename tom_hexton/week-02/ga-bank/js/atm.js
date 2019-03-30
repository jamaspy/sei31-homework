$( document ).ready( function() {

	// create a jQuery object for the checking account DOM node
	const $checkingBalance = $( '#checking-balance' );
	// select Checking input
	const $checkingInput = $( '#checking-amount' );

	// create a jQuery object for the savings account DOM node
	const $savingsBalance = $( '#savings-balance' );
	// select Savings input
	const $savingsInput = $( '#savings-amount' );

	////////////////////////////////////////////////////////////////////////////
	// button events

	const getBalance = function( accountBalance ) {
		// get balance's current innerHTML
		// remove the dollar sign from returned string and convert to number
		return Number( accountBalance.html().slice( 1 ) );
	};

	const getUserInput = function( accountInput ) {
		// assign the value from chosen account and convert to number
		return Number( accountInput.val() );
	};

	// Checking deposit ////////////////////
	// select Checking deposit button & add on click listener
	$( '#checking-deposit' ).on( 'click', function() {
		// get current Checking balance and add Users input value
		checkingTotal += getUserInput( $checkingInput );
		$checkingBalance.html( "$" + checkingTotal );
	} );

	// Checking withdraw ////////////////////
	// select Checking withdraw button & add on click listener
	$( '#checking-withdraw' ).on( 'click', function() {
		// get current Checking balance and subtract User input value
		if ( checkingTotal - getUserInput( $checkingInput ) < 0 ) {
			console.log( 'Sorry, not enough funds to make that withdrawl.' );
		} else {
			checkingTotal -= getUserInput( $checkingInput )
			$checkingBalance.html( "$" + checkingTotal );
		}
	} );

	// Savings deposit ////////////////////
	// select Savings desposit button & add on click listener
	$( '#savings-deposit' ).on( 'click', function() {
		// get current Savings balance and add Users input value
		savingsTotal += getUserInput( $savingsInput );
		$savingsBalance.html( "$" + savingsTotal );

		if ( savingsTotal > 0 ) {
			console.log('savingsTotal > 0.');
			$( '#savings' ).removeClass( 'zero' )
		};
	} );

	// Savings withdraw ////////////////////
	// select Savings desposit button & add on click listener
	$( '#savings-withdraw' ).on( 'click', function() {
		// get current Checking balance and subtract User input value
		if ( savingsTotal - getUserInput( $savingsInput ) < 0 ) {
			console.log( 'Sorry, not enough funds to make that withdrawl.' );
		} else {
			savingsTotal -= getUserInput( $savingsInput )
			$savingsBalance.html( "$" + savingsTotal );

			if (savingsTotal <= 0 ) {
				console.log('savingsTotal <= 0.');
				$( '#savings' ).addClass( 'zero' );
			};
		};

	} );

	////////////////////////////////////////////////////////////////////////////]
	// on change BG colors

	// $( '#checking' ).on( 'change', function() {
	// 	if ( checkingTotal > 0 ) {
	// 		$( '#checking' ).addClass( 'zero' );
	// 	} else {
	// 		$( '#checking' ).removeClass( 'zero' )
	// 	}
	// } );

	////////////////////////////////////////////////////////////////////////////
	// totals

	// Checking account balance
	let checkingTotal = getBalance( $checkingBalance );

	// Savings account balance
	let savingsTotal = getBalance( $savingsBalance );

	// debugger
} );
