//MTA
const trainLines = {
  'N': ['Times Square','34th','28th','23rd','Union Square','8th'],
  'L': ['8th','6th','Union Square','3rd','1st'],
  '6': ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
}

//
// fruits.forEach(function(item, index, array) {
//   console.log(item, index);
// });

// for (let i = 0; i < trainLines[line1].length; i++) {
//   trainLines[line1]
// }

// if (trainLines[line1].indexOf('Union Square')) {
//
// } else {
//
// }

// if index is smaller go towards union square
// if index is larger go backwards towards union square
//
// counting stops? return i ?
//
// for listing stops tostring then split at “,”, .join with “, “ - possible??


//main function
const planTrip = function(line1, station1, line2, station2) {

  // index of start of trip
  let start = trainLines[line1].indexOf(station1);

  // index of trip until Union Square
  let unionSquareFirst = trainLines[line1].indexOf('Union Square');

  // start of trip from Union Square
  let unionSquareSecond = trainLines[line2].indexOf('Union Square');

  // index of end of trip
  let stop = trainLines[line2].indexOf(station2);

  //first trip
  let numberOfStopsFirst = 1;
  if (start < unionSquareFirst) { // look into this section
    for (var i = 1; i <= unionSquareFirst; i++) {
      numberOfStopsFirst = i += numberOfStopsFirst;
      console.log(numberOfStopsFirst);
    }
  } else {
    for (var i = start; i >= unionSquareFirst; i--) {
      numberOfStopsFirst = i -= numberOfStopsFirst;
      console.log(numberOfStopsFirst);
    }
  }
  console.log(numberOfStopsFirst);

  //second trip
  let numberOfStopsSecond = 1;
  if (unionSquareSecond < stop) {
    for (var i = stop; i <= unionSquareSecond; i++) {
      numberOfStopsSecond = i += numberOfStopsSecond;
    }
  } else {
    for (var i = stop-1; i >= unionSquareSecond; i--) {
      numberOfStopsSecond = i -= numberOfStopsSecond;
    }
  }
  console.log(numberOfStopsSecond);

  // let firstTripLength = ;
  let stops = numberOfStopsFirst + numberOfStopsSecond + 1;
  let tripFirstHalf = trainLines[line1].slice(start, unionSquareFirst+1);
  let tripSecondHalf = trainLines[line2].slice(unionSquareSecond, stop+1); //this needs to reverse
  console.log(start);
  console.log(unionSquareFirst);
  console.log(unionSquareSecond);
  console.log(stop);
  console.log(`You must travel through the following stops on the ${line1} line: ${tripFirstHalf}`);
  console.log(`Your journey continues through the following stops: ${tripSecondHalf}`);
  console.log(`You have ${stops} in total`);
};

//planTrip('N', 'Times Square', 'N', 'Union Square');
planTrip('N', 'Times Square', '6', '33rd');
