const getFormData = () => {
  let formDepartLine = document.getElementById("departureLine").value;
  let formdDepartStation = document.getElementById("departureStation").value;
  let formArriveLine = document.getElementById("arrivalLine").value;
  let formArriveStation = document.getElementById("arrivalStation").value;
}


const trainLines = {
  "N": ["Times Square", "34th", "28th", "23rd", "Union Square", "8th", ],
  "L": ["8th", "6th", "Union Square", "3rd", "1st"],
  "6": ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]
}


const getStations = (line, departStation, arriveStation) => {
  let stations = trainLines[line];
  let stationList = " ";
  let departStationIndex = stations.indexOf(departStation);
  let arrivalStationIndex = stations.indexOf(arriveStation);

  if (departStationIndex < arrivalStationIndex) {
    for (let i = departStationIndex + 1; i <= arrivalStationIndex; i++) {
      stationList += stations[i] + ", ";
      stopsCount++;
    }
  } else {
    for (let i = departStationIndex - 1; i >= arrivalStationIndex; i--) {
      stationList += stations[i] + ", ";
      stopsCount++;
    }
  }
  return stationList;
}

const planTrip = (startLine, departStation, endLine, arriveStation) => {
  stopsCount = 0;

  if (startLine === endLine) {
    let sameLineTrip = getStations(startLine, departStation, arriveStation);
    console.log(`You will travel through the following stops on the ${ startLine } Line: ${ sameLineTrip } - That is ${ stopsCount } stops in total. Have a safe trip & Thank You for choicing MTA.`)
  } else {
    let tripToUnionSqaure = getStations(startLine, departStation, "Union Square");
    let tripFromUnionSqaure = getStations(endLine, "Union Square", arriveStation);

    console.log(`You must travel through the following stops on the ${ startLine } Line: ${ tripToUnionSqaure } - You will need to change at Union Square and head to the ${ endLine } line. From there, continue on the ${ endLine } Line through: ${ tripFromUnionSqaure } - That is ${ stopsCount } in total. Have a safe trip, Thank You for choicing MTA.`);
  }
}
