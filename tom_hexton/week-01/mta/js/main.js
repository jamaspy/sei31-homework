console.log("MTA time, bitch.");
console.log("--------------------");

const mtaNetwork = {
	lineN: ['8th', 'Union Station', '23rd', '28th', '34th', 'Times Square'],
	lineL: ['1st', '3rd', 'Union Station', '6th', '8th'],
	line6: ['Astor Place', 'Union Station', '23rd', '28th', '33rd', 'Grand Central'],
};

const sameLineStationAddition = function(trainLine) {

	console.log(`You'll get on at: ${ trainLine[ boardingIndex ] }.`);

	traverseBoardingIndex = boardingIndex + 1;
	traverseAlightingIndex = alightingIndex - 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	// for loop that starts at the boardingIndex and proceeds is as long as alightingIndex
	for (let i = traverseBoardingIndex; i <= traverseAlightingIndex; i += 1) {
		console.log(`You'll traverse across: ${ trainLine[ i ] }`);
	}

	console.log(`And get off at: ${ trainLine[ alightingIndex ] }`);
};

const sameLineStationSubtraction = function(traiLine) {

	console.log(`You'll get on at: ${ trainLine[ boardingIndex ] }`);

	traverseBoardingIndex = boardingIndex - 1;
	traverseAlightingIndex = alightingIndex + 1;
	// print current boarding and alighting values
	// console.log(`traverseBoardingIndex: ${ traverseBoardingIndex }, traverseAlightingIndex: ${ traverseAlightingIndex }`);

	for (let i = traverseBoardingIndex; i >= traverseAlightingIndex; i -= 1) {
		console.log(`You'll traverse across: ${ trainLine[ i ] }`);
	}

	console.log(`And get off at: ${ trainLine[ alightingIndex ] }`);
};

const planTrip = function(boardLine, boardStation, alightLine, alightStation) {

	// turn inputs into capitals so don't need to catch both caps and non caps in each if case.
	boardLine = boardLine.toUpperCase();
	alightLine = alightLine.toUpperCase();

	// if both stops are on the N line
	if (boardLine === 'N' && alightLine === 'N') {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.lineN.indexOf(boardStation);

		// assign index2 to where they alight the train
		alightingIndex = mtaNetwork.lineN.indexOf(alightStation);

		// assign to pass into sameLineStationAddition function
		trainLine = mtaNetwork.lineN;

		// if board[ i ] is less than than alight[ i ] then run this function
		if (boardingIndex < alightingIndex) {
			sameLineStationAddition(trainLine);
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if (boardingIndex > alightingIndex) {
			sameLineStationSubtraction(trainLine);
		}
	}

	// if both stops are on the L line
	if (boardLine === 'L' && alightLine === 'L') {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.lineL.indexOf(boardStation);

		// assign index 2 to where they alight the train
		alightingIndex = mtaNetwork.lineL.indexOf(alightStation);

		// assign to pass into sameLineStationAddition function
		trainLine = mtaNetwork.lineL;

		// if board[ i ] is less than than alight[ i ] then run this function
		if (boardingIndex < alightingIndex) {
			sameLineStationAddition();
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if (boardingIndex > alightingIndex) {
			sameLineStationSubtraction();
		}
	}

	// if both stops are on the 6 line
	if (boardLine === '6' && alightLine === '6') {
		// assign index1 to where they board the train
		boardingIndex = mtaNetwork.line6.indexOf(boardStation);

		// assign index 2 to where they alight the train
		alightingIndex = mtaNetwork.line6.indexOf(alightStation);

		// assign to pass into sameLineStationAddition function
		trainLine = mtaNetwork.line6;

		// if board[ i ] is less than than alight[ i ] then run this function
		if (boardingIndex < alightingIndex) {
			sameLineStationAddition();
		}

		// if board[ i ] is greater than alight[ i ] then run this code
		if (boardingIndex > alightingIndex) {
			sameLineStationSubtraction();
		}
	}

	// if someone gets on '8th' on lineN and wants to go to Grand Central on line6
	// i need to calculate how many stops to Union Station on the first line, and print that out. and then print out the stops before hittin ghte index of the input alightStation on the relevant line.

	// i can do this by findingout if the boardStation index is greater than or less than the Union Station index.
	// depending on that outcome, I will use the additionPrintFuction or subtractionPrintFunction

	// then find the index of Union Station on the new line and find the index of the final destination
	// if the union station index is greater than alightStation index run the additionPrintFuction otherwise run the subtractionPrintFunction.

	// the additionPrintFuction mu


	// if the index of 'Union Station' is > boardStation then use the subtractionPrintFunction()

	// if the index of 'Union Station' is < boardStation then use the additionPrintFunction()

	if (boardLine === 'N' && alightLine === 'L') {

	}

	if (boardLine === 'N' && alightLine === '6') {

	}

	if (boardLine === 'L' && alightLine === '6') {

	}
};
