// MTA LAB

const trainTracks = {
  nLine: ['Times Square', '34th', '28th(n)', '23rd(n)', 'Union Square', '8th(n)'],
  lLine: ['8th(l)', '6th', 'Union Square', '3rd', '1st'],
  sixLine: ['Grand Central', '33rd', '28th(six)', '23rd(six)', 'Union Square', 'Astor Place']
};

let numOfStops = 0; //number of stops in the trip counter 
// check if it is on your line and if it is just go there?

let loops = false; // knows when to return num of stops to the console

const stopsLog = function( numOfStops ) {
  return numOfStops === 1 ? console.log(`${numOfStops} stop total, Enjoy your ride!`): console.log(`${numOfStops} stops total, Enjoy your ride!`)
};

const planTrip = function( lineA, start, lineB, stop ) {
  const line1 = trainTracks[lineA];
  const line2 = trainTracks[lineB];
  const indexStart = line1.indexOf( start );
  const indexStop = line2.indexOf( stop );
  let stationStops;
  
  //make sure the user actually needs to travel somewhere
  if ( lineA === lineB && start === stop || ( start === 'Union Square' && stop === 'Union Square' )){
    return console.log('You are at your destination, no need to travel!')
  };
  
  ///determine if the trip is on the same line or not;
  if ( line1 === line2 ){
    numOfStops += Math.abs(indexStart - indexStop);
    if ( indexStop > indexStart ){ /// then moving 'forwards' on the line.
      stationStops = line1.slice(indexStart + 1, indexStop + 1).join(', ');
    } else { //moving backwards on the line.
      stationStops = line1.slice(indexStop, indexStart).reverse().join(', ');
    };
    console.log(`You must travel through the following lines on the ${lineA}:`)
    console.log(`${stationStops}`);
    
  } else { // if it is on different lines we use recursion to calculate trips on the same lines between stops and union square.
    loops = true;
    if ( start === 'Union Square'){ //if start is UnionSquare then we are essentially on the same line
      planTrip( lineB, 'Union Square', lineB, stop );
    } else if ( stop === 'Union Square' ){ // same for stop 
      planTrip( lineA, start, lineA, 'Union Square' );
    } else {
    planTrip( lineA, start, lineA, 'Union Square' ); 
    console.log('Change at Union Square');
    planTrip( lineB, 'Union Square', lineB, stop );
    };    
  return stopsLog(numOfStops);
  }; 
  
  if (!loops) {return stopsLog(numOfStops)};
};

// allow the html to interact 

//planTrip('nLine','Times Square',"lLine",'6th')
//planTrip('sixLine', 'Grand Central', 'lLine', 'Union Square')
//planTrip('nLine','8th(n)','nLine','8th(n)')
//planTrip('sixLine', 'Union Square', 'nLine', '8th(n)')
//planTrip('nLine', '23rd(n)', 'nLine', '8th(n)')


