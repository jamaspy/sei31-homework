console.log("MTA time, bitch.");
console.log("--------------------");

const mtaNetwork = {
	lineG: ['LineL: 8th', 'Union Station', '23rd', 'LineG: 28th', '34th', 'Times Square'],
	lineL: ['1st', '3rd', 'Union Station', '6th', 'LineL: 8th'],
	line6: ['Astor Place', 'Union Station', '23rd', 'Line6: 28th', '33rd', 'Grand Central'],
};

const printStationsAddition = function() {

	console.log(`You'll get on at: ${ mtaNetwork.line6[ boardingIndex ] }.`);

	traverseBoardingIndex = boardingIndex + 1;
	traverseAlightingIndex = alightingIndex - 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	// for loop that starts at the boardingIndex and proceeds is as long as alightingIndex
	for (let i = traverseBoardingIndex; i <= traverseAlightingIndex; i += 1) {
		console.log(`You'll traverse across: ${ mtaNetwork.line6[ i ] }`);
	}

	console.log(`And get off at: ${ mtaNetwork.line6[ alightingIndex ] }`);
};

const printstationsSubtraction = function() {

	console.log(`You'll get on at: ${ mtaNetwork.line6[ boardingIndex ] }`);

	traverseBoardingIndex = boardingIndex - 1;
	traverseAlightingIndex = alightingIndex + 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	for (let i = traverseBoardingIndex; i >= traverseAlightingIndex; i -= 1) {
		console.log(`You'll traverse across: ${ mtaNetwork.line6[ i ] }`);
	}

	console.log(`And get off at: ${ mtaNetwork.line6[ alightingIndex ] }`);
};

const planTrip = function(board, alight) {

	// assign index1 to where they board the train
	boardingIndex = mtaNetwork.line6.indexOf(board);

	// assign index 2 to where they alight the train
	alightingIndex = mtaNetwork.line6.indexOf(alight);

	// if board[ i ] is less than than alight[ i ] then run this function
	if (boardingIndex < alightingIndex) {
		printStationsAddition();
	}

	// if board[ i ] is greater than alight[ i ] then run this code
	if (boardingIndex > alightingIndex) {
		printstationsSubtraction();
	}

};

// planTrip('Astor Place', 'Grand Central');
// planTrip('33rd', 'Union Station');
