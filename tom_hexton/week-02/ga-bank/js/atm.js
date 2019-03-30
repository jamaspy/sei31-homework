$( document ).ready( function() {

	////////////////////////////////////////////////////////////////////////////
	// jQuery caching

	// create a jQuery object for the checking account DOM node
	const $checkingBalance = $( '#checking-balance' );
	// select Checking ID input
	const $checkingInput = $( '#checking-amount' );

	// create a jQuery object for the savings account DOM node
	const $savingsBalance = $( '#savings-balance' );
	// select Savings ID input
	const $savingsInput = $( '#savings-amount' );

	////////////////////////////////////////////////////////////////////////////
	// shared functions

	const getBalance = function( accountBalance ) {
		// get balance's current innerHTML
		// remove the dollar sign from returned string and convert to number
		return Number( accountBalance.html().slice( 1 ) );
	};

	//DEPRECATED
	// const getUserInput = function( accountInput ) {
	// 	// assign the value from chosen account and convert to number
	// 	return Number( accountInput.val() );
	// };

	const checkingInput = function() {
		return Number( $checkingInput.val() );
	};

	const savingsInput = function() {
		return Number( $savingsInput.val() );
	};

	const totalDollars = function( a = checkingTotal, b = savingsTotal ) {
		return a + b;
	}

	////////////////////////////////////////////////////////////////////////////
	// button events

	// Checking deposit ////////////////////
	// select Checking deposit button & add on click listener then run anonymous function
	$( '#checking-deposit' ).on( 'click', function() {

		// get current Checking balance and add Users input value
		checkingTotal += checkingInput();
		$checkingBalance.html( "$" + checkingTotal );

		// chagne BG to red if total is less than 0
		if ( checkingTotal > 0 ) {
			$( '#checking' ).removeClass( 'zero' )
		};

	} );

	// Checking withdraw ////////////////////
	// select Checking withdraw button & add on click listener then run anonymous function
	$( '#checking-withdraw' ).on( 'click', function() {

		// if total dollars is less than input, no withdrawal
		if ( totalDollars() < checkingInput() ) {
			console.log( 'Sorry, not enough funds to make that withdrawl.' );

		} // if you don't have enough in checkingTotal but you do have enough across both accounts
		else if ( checkingTotal < checkingInput() && totalDollars() >= checkingInput() ) {

			// if you have enough, but the current account has 0, it must come from the opposite account
			if ( checkingTotal === 0 || checkingInput() === savingsTotal ) {
				// update global savingsTotal
				savingsTotal -= checkingInput();
				// apply updated value to HTML
				$savingsBalance.html( "$" + savingsTotal );
			} else {
				// subtract as much as possible from savingsTotal and the remainder from checkingTotal, assigning the difference
				const remainder = checkingInput() - checkingTotal;
				// update global variable
				checkingTotal = 0;
				// apply updated value to HTML
				$checkingBalance.html( "$" + checkingTotal );

				// update global checkingTotal
				savingsTotal -= remainder;
				// apple updated value to HTML
				$savingsBalance.html( "$" + savingsTotal );
			}

			// chagne BG to red if total is less than or 0
			if ( checkingTotal <= 0 ) {
				$( '#checking' ).addClass( 'zero' );
			};
			if ( savingsTotal <= 0 ) {
				$( '#savings' ).addClass( 'zero' );
			};

		} else {
			checkingTotal -= checkingInput()
			$checkingBalance.html( "$" + checkingTotal );

			// chagne BG to red if total is less than or 0
			if ( checkingTotal <= 0 ) {
				$( '#checking' ).addClass( 'zero' );
			};
		}
	} );

	// Savings deposit ////////////////////
	// select Savings desposit button & add on click listener then run anonymous function
	$( '#savings-deposit' ).on( 'click', function() {

		// get current Savings balance and add Users input value
		savingsTotal += savingsInput();
		$savingsBalance.html( "$" + savingsTotal );

		// chagne BG to red if total is more than 0
		if ( savingsTotal > 0 ) {
			$( '#savings' ).removeClass( 'zero' )
		};
	} );

	// Savings withdraw ////////////////////
	// select Savings desposit button & add on click listener then run anonymous function
	$( '#savings-withdraw' ).on( 'click', function() {

		// if total dollars is less than input, no withdrawal
		if ( totalDollars() < savingsInput() ) {
			console.log( 'Sorry, not enough funds to make that withdrawl.' );

		} // if you don't have enough in savingsTotal but you do have enough across both accounts
		else if ( savingsTotal < savingsInput() && totalDollars() >= savingsInput() ) {

			// if you have enough, but the current account has 0, it must come from the opposite account
			if ( savingsTotal === 0 || savingsInput() === checkingTotal ) {
				// update global checkingTotal
				checkingTotal -= savingsInput();
				// apply updated value to HTML
				$checkingBalance.html( "$" + checkingTotal );
			} else {
				// subtract as much as possible from savingsTotal and the remainder from checkingTotal, assigning the difference
				const remainder = savingsInput() - savingsTotal;
				// update global variable
				savingsTotal = 0;
				// apply updated value to HTML
				$savingsBalance.html( "$" + savingsTotal );

				// update global checkingTotal
				checkingTotal -= remainder;
				// apple updated value to HTML
				$checkingBalance.html( "$" + checkingTotal );
			}

			// chagne BG to red if total is less than or 0
			if ( savingsTotal <= 0 ) {
				$( '#savings' ).addClass( 'zero' );
			};
			if ( checkingTotal <= 0 ) {
				$( '#checking' ).addClass( 'zero' );
			};

		} // if savingsTotal covers the amount being asked by user
		else {
			savingsTotal -= savingsInput();
			$savingsBalance.html( "$" + savingsTotal );

			// chagne BG to red if total is less than or 0
			if ( savingsTotal <= 0 ) {
				$( '#savings' ).addClass( 'zero' );
			};
		};

	} );

	////////////////////////////////////////////////////////////////////////////
	// totals

	// Checking account balance
	let checkingTotal = getBalance( $checkingBalance );
	// console.log( "Checking total on load: $" + checkingTotal ); // DEBUG ONLY

	// Savings account balance
	let savingsTotal = getBalance( $savingsBalance );
	// console.log( "Savings total on load: $" + savingsTotal ); // DEBUG ONLY

	// debugger
} );
