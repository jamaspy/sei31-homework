// MTA LAB

const trainTracks = {
  nLine: ['Times Square', '34th', '28th(n)', '23rd(n)', 'Union Square', '8th(n)'],
  lLine: ['8th(l)', '6th', 'Union Square', '3rd', '1st'],
  sixLine: ['Grand Central', '33rd', '28th(six)', '23rd(six)', 'Union Square', 'Astor Place']
};

// check if it is on your line and if it is just go there?

const planTrip = function( lineA, start, lineB, stop ) {
  const line1 = trainTracks[lineA];
  const line2 = trainTracks[lineB];
  const indexStart = line1.indexOf( start );
  const indexStop = line2.indexOf( stop );
  let numOfStops;
  let stationStops;
  
  ///determine if the trip is on the same line or not;
  if ( line1 === line2 ){
    numOfStops = Math.abs(indexStart - indexStop);
    if ( indexStop > indexStart ){ /// then moving 'forwards' on the line
      stationStops = line1.slice(indexStart + 1, indexStop + 1).join(', ');
    } else {
      stationStops = line1.slice(indexStop, indexStart).reverse().join(', ');
    };
    console.log(`You must travel through the following lines on the ${lineA}:`)
    console.log(`${stationStops}`);
    return numOfStops
  } else { // if it is on different lines we use recursion to calculate trips on the same lines between stops and union square.
    var numStops1 = planTrip( lineA, start, lineA, 'Union Square' ); 
    console.log('Change at Union Square');
    var numStops2 = planTrip( lineB, 'Union Square', lineB, stop );
  };
  return `${numStops1+numStops2} stops total, Enjoy your ride!`
};

// allow the html to interact 

console.log(planTrip('nLine','Times Square',"lLine",'1st'))



