
const subwayLines = {
  N: ['Times Square', '34th', '28th', '23rd',  'Union Square', '8th'],
  L: ['8th', '6th',  'Union Square', '3rd', '1st'],
  "6": ['Grand Central', '33rd', '28th', '23rd', 'Union Squar', 'Astor Place'] //number into string
}

function indexFinder(lineName, stationName, sameLineLast){ 
  for (let i = 0; i <= lineName.length; i++) {
    if(lineName[i] === stationName){
      return i; 
    }
  }
}

const planTrip = function(line1, station1, line2, station2 ){  
    let startLine = subwayLines[line1] //  array,  done  
    let startStationIndex = indexFinder(startLine, station1); // index number, done
    let firstUnionIndex =indexFinder(startLine, 'Union Square')
    let secondLine = subwayLines[line2] //array, done
    let lastStationIndex = indexFinder(secondLine, station2) // index number, done
    let secondUnionIndex =indexFinder(secondLine, 'Union Square')
    let firstHalf =[]
    let secondHalf=[]
    
  if(line1 === line2 ){
      if(startStationIndex < lastStationIndex){
        console.log(`You don't have to transfer to other lines. Stay on this train until you get to ${station2} station`);
        return startLine.slice(startStationIndex, lastStationIndex+1) //done
        
      } else if(startStationIndex > lastStationIndex){
        console.log(`You don't have to transfer to other lines. Stay on this train until you get to ${station2} station`);
        return startLine.slice(lastStationIndex, startStationIndex+1).reverse(); //done
        
    }
}
if(line1 !== line2){
  if(startStationIndex < firstUnionIndex){
    firstHalf = startLine.slice(startStationIndex, firstUnionIndex+1);       
  }else if(startStationIndex > firstUnionIndex){
    firstHalf =startLine.slice(firstUnionIndex, startStationIndex+1).reverse(); 
  }

  if( secondUnionIndex < lastStationIndex){
    secondHalf = secondLine.slice(secondUnionIndex+1, lastStationIndex+1);

  }else if(lastStationIndex < secondUnionIndex){
    secondHalf = secondLine.slice(lastStationIndex, secondUnionIndex).reverse();
  }

}
  let totalStations =firstHalf.concat(secondHalf)
  
    console.log(`
    You must travel through the following stops on the ${line1} line: ${firstHalf}.
    Change at "Union Square". 
    Your journey continues through the following stops. ${line2} line: ${secondHalf}
    ${totalStations.length} station in total.      
                 `)  
  }
  
    
   
// }



planTrip('N', '34th', 'L', '8th')
planTrip('N', '34th', 'L', '1st')
planTrip('L', '3rd', 'L', '8th');
planTrip('L', '8th', 'L', '3rd');


