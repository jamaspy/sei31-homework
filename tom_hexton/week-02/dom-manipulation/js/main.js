// Create a function called catWalk() that moves the cat 10 pixels to the right of where it started, by changing the "left" style property.
//
// Call that function every 50 milliseconds. Your cat should now be moving across the screen from left to right. Hurrah!
//
// Bonus #1: When the cat reaches the right-hand of the screen, restart them at the left hand side ("0px"). So they should keep walking from left to right across the screen, forever and ever.
//
// Bonus #2: When the cat reaches the right-hand of the screen, make them move backwards instead. They should keep walking back and forth forever and ever.
//
// Bonus #3: When the cat reaches the middle of the screen, replace the img with an image of a cat dancing, keep it dancing for 10 seconds, and then replace the img with the original image and have it continue the walk.

const image = document.getElementsByTagName( 'img' )[ 0 ];
image.style.position = 'absolute';
image.style.left = 0;

let newLeft = 0;
let maxRight = 100;
// let walkRight;

const catWalk = function() {
	newLeft = newLeft + 1;
	image.style.left = newLeft + "%";
	if ( parseInt( image.style.left ) >= maxRight ) {
		image.style.transform = "scaleX(-1)";
		clearInterval( beginWalk );
		beginWalk = window.setInterval( catWalkLeft, 10 );
	};
};

const catWalkLeft = function() {
	newLeft = newLeft - 1;
	image.style.left = newLeft + '%';
	if ( parseInt( image.style.left ) === 0 ) {
		image.style.transform = "scaleX(1)";
		clearInterval( beginWalk );
		// image.style.left = 0;
		// console.log(walkRight);
		beginWalk = window.setInterval( catWalk, 10 );
	};
};

////////////////////////////////////////////////////////////////////////////////
let beginWalk = window.setInterval( catWalk, 10 );
////////////////////////////////////////////////////////////////////////////////
