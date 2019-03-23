console.log( "MTA time, bitch." );
console.log( "--------------------" );

const mtaNetwork = {
	lineG: [ 'Filler', 'LineL: 8th', 'Union Station', '23rd', 'LineG: 28th', '34th', 'Times Square' ],
	lineL: [ 'Filler', '1st', '3rd', 'Union Station', '6th', 'LineL: 8th' ],
	line6: [ 'Filler', 'Astor Place', 'Union Station', '23rd', 'Line6: 28th', '33rd', 'Grand Central' ],
};

const planTrip = function( board, alight ) {

	// assign index1 to where they board the train
	index1 = mtaNetwork.line6.indexOf( board );

	// assign index 2 to where they alight the train
	index2 = mtaNetwork.line6.indexOf( alight );

	console.log( `Your trip is from: '${mtaNetwork.line6[ index1 ]}' to '${mtaNetwork.line6[ index2 ]}.'` );

	// find which of the two is biggest and smallest of the two
	boardingIndex = Math.min( index1, index2 );
	alightingIndex = Math.max( index1, index2 );
	console.log( `boardingIndex: ${boardingIndex}, alightingIndex: ${alightingIndex}` );

	traverseBoardingIndex = boardingIndex + 1;
	traverseAlightingIndex = alightingIndex - 1;
	console.log( `traverseBoardingIndex: ${traverseBoardingIndex}, traverseAlightingIndex: ${traverseAlightingIndex}` );

	// calculate the number of stops they must traverse for passing into for loop
	// numberOfStops = biggestIndex - smallestIndex;

	// for loop that starts at the smallestIndex and proceeds is as long as numberOfStops
	for ( let i = traverseBoardingIndex; i <= traverseAlightingIndex; i += 1 ) {
		console.log( `You'll traverse across: ${mtaNetwork.line6[ i ]}` );
	}

	// use a for loop to print the characters between the difference of index1 and index2
	// how do i find the characters between them?

};

planTrip( 'Astor Place', 'Grand Central' );
