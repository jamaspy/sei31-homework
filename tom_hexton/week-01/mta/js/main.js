console.log( "MTA time, bitch." );
console.log( "--------------------" );

const mtaNetwork = {
	lineG: [ 'Filler', 'LineL: 8th', 'Union Station', '23rd', 'LineG: 28th', '34th', 'Times Square' ],
	lineL: [ 'Filler', '1st', '3rd', 'Union Station', '6th', 'LineL: 8th' ],
	line6: [ 'Filler', 'Astor Place', 'Union Station', '23rd', 'Line6: 28th', '33rd', 'Grand Central' ],
};

const planTrip = function( board, alight ) {

	// assign index1 to where they board the train
	boardingIndex = mtaNetwork.line6.indexOf( board );

	// assign index 2 to where they alight the train
	alightingIndex = mtaNetwork.line6.indexOf( alight );



	// if board[ i ] is smaller than alight[ i ] then run this code
	if ( boardingIndex < alightingIndex ) {

		console.log( `Your trip is from: '${mtaNetwork.line6[ boardingIndex ]}' to '${mtaNetwork.line6[ alightingIndex ]}.'` );

		traverseBoardingIndex = boardingIndex + 1;
		traverseAlightingIndex = alightingIndex - 1;
		console.log( `traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }` );

		// for loop that starts at the boardingIndex and proceeds is as long as alightingIndex
		for ( let i = traverseBoardingIndex; i <= traverseAlightingIndex; i += 1 ) {
			console.log( `You'll traverse across: ${mtaNetwork.line6[ i ]}` );
		}
	}

	if ( boardingIndex > alightingIndex ) {

		console.log( `Your trip is from: '${mtaNetwork.line6[ boardingIndex ]}' to '${mtaNetwork.line6[ alightingIndex ]}.'` );

		traverseBoardingIndex = boardingIndex + 1;
		traverseAlightingIndex = alightingIndex - 1;
		console.log( `traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }` );

		for ( let i = traverseBoardingIndex; i <= traverseAlightingIndex; i -= 1 ) {
			console.log( `You'll traverse across: ${ mtaNetwork.line6[ i ] }` );
		}
	}

};

planTrip( 'Astor Place', 'Grand Central' );
planTrip( 'Grand Central', 'Astor Place' );
