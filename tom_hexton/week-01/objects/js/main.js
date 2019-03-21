// --------------------
// Part 1 Rectangles
const rectangleA = {
	length: 4,
	width: 4
};

const rectangleB = {
	length: 1,
	width: 4
};

console.log( 'Is it a square?' );
const isSquare = function( obj ) {
	if ( obj.length === obj.width ) {
		console.log( `Yes, is a square.` );
	} else {
		console.log( `No, is not a square.` );
	}
};
// function called
isSquare( rectangleA );
isSquare( rectangleB );
console.log( '----------' );


// Area of square.
console.log( '\n\nThe area is;' );
const area = function( obj ) {
	return obj.length * obj.width
};
// function called
console.log( area( rectangleA ) );
console.log( area( rectangleB ) );
console.log( '----------' );


// Perimeter of square.
console.log( '\n\nThe perimeter is;' );
const perimeter = function( obj ) {
	return ( 2 * obj.length ) + ( 2 * obj.width );
};
// function called
console.log( perimeter( rectangleA ) );
console.log( perimeter( rectangleB ) );
console.log( '----------' );


// ------------------
// Part 2 Triangles
const triangleA = {
	sideA: 3,
	sideB: 4,
	sideC: 4
};

console.log( '\n\n' );
const isEquilateral = function( triangleToTest ) {
	if ( triangleToTest.sideA === triangleToTest.sideB === triangleToTest.sideC ) {
		console.log( 'The triangle is an equilateral.' );
	} else {
		console.log( 'The triangle is not an equilateral.' );
	}
};
// function called
isEquilateral( triangleA );


// IS IT ISOSCELES
console.log( '\n' );
const isIsosceles = function( triangleToTest ) {

	if ( triangleToTest.sideA === triangleToTest.sideB || triangleToTest.sideB === triangleToTest.sideC || triangleToTest.sideA === triangleToTest.sideC ) {
		console.log( 'The triangle is an isosceles.' );
	} else {
		console.log( 'The triangle is not isosceles.' );
	}
};
// function called
isIsosceles( triangleA );


// AREA OF TRIANGLE
console.log( '\n' );
const areaOfTriangle = function( triangleToTest ) {
	// herons formula
	const herronsValue = ( triangleToTest.sideA + triangleToTest.sideB + triangleToTest.sideC ) / 2;
	const areaCalculation = Math.sqrt( herronsValue * ( herronsValue - triangleToTest.sideA ) * ( herronsValue - triangleToTest.sideB ) * ( herronsValue - triangleToTest.sideC ) );
	return areaCalculation;
};
// function called
console.log( `The area of this triganle is; ${ areaOfTriangle( triangleA ) }` );


// IS IT OBTUSE
console.log( '\n' );
const isObtuse = function( triangleToTest ) {

	// assume the 2 smallest sides and assign to array
	const smallestSides = [ triangleToTest.sideA, triangleToTest.sideB ];

	// check if 3rd side is in fact smaller than assumed two and overwrite the one it is smaller than
	if ( triangleToTest.sideC < smallestSides[ 0 ] ) {
		smallestSides[ 0 ] = triangleToTest.sideC;
	} else if ( triangleToTest.sideC < smallestSides[ 1 ] ) {
		smallestSides[ 1 ] = triangleToTest.sideC;
	}

	// find largest side and assign it to largestSide
	const largestSide = Math.max( triangleToTest.sideA, triangleToTest.sideB, triangleToTest.sideC );

	// square both smaller sides and add together, if less than largest side it is obtuse.
	if ( ( smallestSides[ 0 ] ** 2 ) + ( smallestSides[ 1 ] ** 2 < ( largestSide ** 2 ) ) ) {
		console.log( 'The triangle is obtuse.' );
	} else {
		console.log( 'The triangle is not obtuse.' );
	}
};
// function called
isObtuse( triangleA );
console.log( '----------' );


console.log( '\n\n' );
console.log( 'The Cash Register' );
// --------------------
// Part 3 The Cash Register
const cartForParty = {
	banana: "1.25",
	handkerchief: ".99",
	Tshirt: "25.01",
	apple: "0.60",
	nalgene: "10.34",
	proteinShake: "22.36"
};

const cashRegister = function( cartObject ) {

	let total = 0;

	// pick off all the values of the objects
	const objectValuesOnly = Object.values( cartObject );

	for ( let i = 0; i < objectValuesOnly.length; i += 1 ) {
		// convert the array of values to floats, keeping it as an array
		total += Number( objectValuesOnly[ i ] );
	};

	return total;

};
// function called
console.log( `The total is: $${cashRegister( cartForParty )}` ); // 60.55
console.log( '----------' );


console.log( '\n\n' );
console.log( 'Credit Card Validation' );
// --------------------
// Part 4 Credit Card Validation
const validateCreditCard = function( creditCardNumber ) {

	// remove the hyphen
	creditCardNumber = creditCardNumber.split( '-' ).join( '' );

	for ( let i = 0; i < creditCardNumber.length; i += 1 ) {
		// console.log('---');
		for ( let j = i + 1; j < creditCardNumber.length; j += 1 ) {
			// console.log(creditCardNumber[ i ] + ', ' + creditCardNumber[ j ]);
			if ( creditCardNumber[ i ] !== creditCardNumber[ j ] ) {
				// console.log('Same');
				true;
			}	else {
				return false;
			}
		};
	};


	// // remember first letter from original string
	// const firstChar = creditCardNumber[ 0 ];
	// // slice string after first letter
	// const afterFirstChar = creditCardNumber.slice( 1 )
	// // split string into individual letters ready for looping
	// const splitCreditCard = afterFirstChar.split( '' );

	// if ( firstLetter !== afterFirstLetter.includes( firstLetter ) ) {
	// 	true;
	// } else {
	// 	return false;
	// };
	// console.log(creditCardNumber);


	if ( !creditCardNumber.includes( 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 'r', 's', 't', 'u', 'v', 'x', 'y', 'z' ) ) {
		true;
	} else {
		console.log( 'Invalid characters.' );
		return false;
	};

	const lastNumber = creditCardNumber[ creditCardNumber.length - 1 ];
	const convertedToNumber = Number( lastNumber );

	if ( lastNumber % 2 === 0 ) {
		true;
	} else {
		console.log( 'Odd final number.' );
		return false;
	};

	if ( creditCardNumber.length === 16 ) {
		true
	} else {
		return false;
	}

	return true;
};
// function called
console.log( '\n\n Valid variants.\n-----' );
validateCreditCard( '9999-9999-8888-0000' );
console.log( '\n' );
validateCreditCard( '6666-6666-6666-1666' );
console.log( '\n\n Invalid variants.\n-----' );
validateCreditCard( 'a923-3211-9c01-1112' );
console.log( '\n' );
validateCreditCard( '4444-4444-4444-4444' );
console.log( '\n' );
validateCreditCard( '1111-1111-1111-1110' );
console.log( '\n' );
validateCreditCard( '6666-6666-6666-6661' );
