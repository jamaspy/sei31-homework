console.log( "MTA time, bitch." );
console.log( "--------------------" );

const mtaNetwork = {
	n: [ '8th', 'Union Station', '23rd', '28th', '34th', 'Times Square' ],
	l: [ '1st', '3rd', 'Union Station', '6th', '8th' ],
	six: [ 'Astor Place', 'Union Station', '23rd', '28th', '33rd', 'Grand Central' ],
};

const sameLineStationAddition = function( trainLine ) {

	console.log( `You'll get on at: ${ trainLine[ boardingIndex ] }.` );

	traverseBoardingIndex = boardingIndex + 1;
	traverseAlightingIndex = alightingIndex - 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	// for loop that starts at the boardingIndex and proceeds is as long as alightingIndex
	for ( let i = traverseBoardingIndex; i <= traverseAlightingIndex; i += 1 ) {
		console.log( `You'll traverse across: ${ trainLine[ i ] }` );
	}

	console.log( `And get off at: ${ trainLine[ alightingIndex ] }` );
};

const sameLineStationSubtraction = function( trainLine ) {

	console.log( `You'll get on at: ${ trainLine[ boardingIndex ] }` );

	traverseBoardingIndex = boardingIndex - 1;
	traverseAlightingIndex = alightingIndex + 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	for ( let i = traverseBoardingIndex; i >= traverseAlightingIndex; i -= 1 ) {
		console.log( `You'll traverse across: ${ trainLine[ i ] }` );
	}

	console.log( `And get off at: ${ trainLine[ alightingIndex ] }` );
};

const increasingArrayIndexPrintFuction = function( boardLine, boardStation ) {
	// need to find index of boardStation
	boardingIndex = mtaNetwork[boardLine].indexOf( boardStation );

	traverseBoardingIndex = boardingIndex + 1;

	for ( let i = traverseBoardingIndex; i <= mtaNetwork[boardLine].indexOf('Union Station'); i += 1 ) {
		if (true) {
			console.log( `You'll traverse across: ${ mtaNetwork[boardLine][ i ] }` );

		}
	}

};

const planTrip = function( boardLine, boardStation, alightLine, alightStation ) {

	// turn inputs into capitals so don't need to catch both caps and non caps in each if case.
	boardLine = boardLine.toLowerCase();
	alightLine = alightLine.toLowerCase();

	// converting input of '6' to 'six' for array referencing
	if (boardLine === '6') {
		boardLine === 'six';
	};

	// if both stops are on the N line
	if ( boardLine === 'n' && alightLine === 'n' ) {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.n.indexOf( boardStation );

		// assign index2 to where they alight the train
		alightingIndex = mtaNetwork.n.indexOf( alightStation );

		// assign to pass into sameLineStationAddition function
		trainLine = mtaNetwork.n;

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingIndex < alightingIndex ) {
			sameLineStationAddition( trainLine );
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingIndex > alightingIndex ) {
			sameLineStationSubtraction( trainLine );
		}
	}

	// if both stops are on the L line
	if ( boardLine === 'l' && alightLine === 'l' ) {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.l.indexOf( boardStation );

		// assign index 2 to where they alight the train
		alightingIndex = mtaNetwork.l.indexOf( alightStation );

		// assign to pass into sameLineStationAddition function
		trainLine = mtaNetwork.l;

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingIndex < alightingIndex ) {
			sameLineStationAddition();
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingIndex > alightingIndex ) {
			sameLineStationSubtraction();
		}
	}

	// if both stops are on the 6 line
	if ( boardLine === 'six' && alightLine === 'six' ) {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.six.indexOf( boardStation );

		// assign index 2 to where they alight the train
		alightingIndex = mtaNetwork.six.indexOf( alightStation );

		// assign to pass into sameLineStationAddition function
		trainLine = mtaNetwork.six;

		// if board[ i ] is less than than alight[ i ] then run this function
		if ( boardingIndex < alightingIndex ) {
			sameLineStationAddition();
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if ( boardingIndex > alightingIndex ) {
			sameLineStationSubtraction();
		}
	}

	// if board n and alight l OR board l and alight n
	if ( boardLine === 'n' && alightLine === 'l' ) {
		console.log(`You're getting on at ${mtaNetwork[boardLine].indexOf( boardStation )}.`);
		if ( mtaNetwork[boardLine].indexOf( boardStation ) < mtaNetwork[boardLine].indexOf( 'Union Station' ) ) {
			increasingArrayIndexPrintFuction( boardLine, boardStation );
		} else if ( mtaNetwork.indexOf( boardStation ) > nUnionIndex ) {
			decreasingArrayIndexPrintFunction( boardLine, boardStation );
		}
	}

	// if board n and alight six
	if ( boardLine === 'N' && alightLine === '6' ) {

	}

	// if board l and alight six
	if ( boardLine === 'L' && alightLine === '6' ) {

	}

};

planTrip('N', '8th', 'L', '1st');
