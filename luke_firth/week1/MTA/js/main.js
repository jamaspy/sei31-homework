console.log("Running.....thank.god.for.that.ay!....");

const subway = {                                                                    //initialising object array
  redLine: ["Times Square", "34th", "28th", "23rd", "Union Square", "8th"],         //red line array     //this has been changed because
  greenLine: ["8th", "6th", "Union Square", "3rd", "1st"],                          //green line array   //the letters were blowing my mind
  blueLine: ["Grand Central", "33rd", "28th", "23rd", "Union Square", "Astor Place"]      //blue line array
};

let startIndex = null;    //defining an empty variable to store the starting index for evaluating result
let endIndex = null;      //defining and empty variale to store the end index for evaluating result
let midIndex1 = null;     //defining and empty variale to store Union Square changeover if needed
let midIndex2 = null;     //defining and empty variale to hold the Union Square Start point for second half of journey
let result = null;        //defining and empty variale to store the result

const howManyStops = function(startline, startStop, endLine, endStop) {  //howManyStops takes start line, get on station, end line, get off

  let start = subway[startline];  //this declaration allows the function to find the line using user input // |redline(Array)|greenLine(Array)|blueLine(Array)|
  let end = subway[endLine];      //this declaration allows the function to find the line using user input

  //console.log(subway[startline]);   //testing to see if start variable is stored from user's subway line input
  //console.log(subway[endLine]);     //testing to see if endline variable is stored from user's subway endLine input

  if (startline === endLine) {                  //ok holy smokes!!!!! 1st step. If we are chillen on the the same line we can just calculate the distance between
    for (let i = 0; i < start.length; i++) {    //the startStop and the endStop without getting fancy and changing lines!!!
      if (start[i] === startStop) {             //if startLine is == to endLine!!! bingo we dont have to change lines :) happy days!
        startIndex = i;
        //console.log(startIndex);//test        //once [i] == startStop in the array, i(index in array) is stored in startIndex
      }
      for (let i = 0; i < end.length; i++)      //now we have another loop for the haters!!
      if (end[i] === endStop) {                 //if [i] iteration is == end stop input wooooo!!
        endIndex = i;
        //console.log(endIndex);//test          //happy days store that index in endIndex #Winning.
      }
      result = Math.abs(startIndex - endIndex); //now hopefully we can store the difference between the 2 stored indexes using Math.abs
      console.log(result);                      //#MathDoesNotGiveYouAbs
      return result;                            //Hooley Dooley Mate we have a winner. This beautiful function "Math.abs" takes 2 perameters
    }                                           //stores the difference in "result" and then outputs to the console using a classic console.log
  } else {                                      //not over yet!!!!!!!
    for (let i = 0; i < start.length; i++) {    //ok so we are not actually changing stations ....hehehehe
      if (start[i] === startStop) {             //all we are doing is another for loop for the 'multi line path' and
        startIndex = i;
        //console.log(startIndex);//test        //adding the 2 different line indexes together.
      }                                         //once the [i] iteration is = startStop in the line array passed into the function
      if (start[i] === "Union Square") {        //it gets stored in the startIndex variable
        mid1 = i;
        //console.log(mid1);//test              //if [i] iteration is = Union Square store the index in the mid1 variable
      }                                         //this is so we have 2 index references to add the other half of the trip together
    }                                         //this is a closing curley brace for the first half of out majestic train ride :) woo!
    for (let i = 0; i < end.length; i++) {      //this for loop iterates over the 2nd half of the trip //there is also alot more that i have not pointed out.
      if (end[i] === endStop) {                 //if [i] = to the endStop passed to the function
        endIndex = i;                           //store it in endIndex
        //console.log(endIndex);//test
      }
      if (end[i] === "Union Square") {         //if [i] = to UnionSquare store the index in mid2
        mid2 = i;                              //index stored!!!!!!!!!!! omggggg woooo!!!!
        //console.log(endIndex);//test         //now its time to add the 2 trips together using the difference between the indexes
      }
    };
    result = (Math.abs(startIndex - mid1) + Math.abs(mid2 - endIndex)); //storing the sum of the difference in result
    console.log(result);                       //another classic console.log
    return result;                             //returning the result
  };                                           //
};

howManyStops('redLine', '28th', 'blueLine', '23rd'); //sending perameters to the function


/*
Create a program that models a simple subway system.

The program takes the line and stop that a user is getting on at and the line and
stop that user is getting off at and prints the journey and the total number of stops for the trip in the console:

// console.log() shows output similar to this:
// "You must travel through the following stops on the N line: 34th, 28th, 23rd, Union Square."
// "Change at Union Square."
// "Your journey continues through the following stops: 23rd, 28th, 33rd."
// "7 stops in total."
There are 3 subway lines:
The N line has the following stops: Times Square, 34th, 28th, 23rd, Union Square, and 8th
The L line has the following stops: 8th, 6th, Union Square, 3rd, and 1st
The 6 line has the following stops: Grand Central, 33rd, 28th, 23rd, Union Square, and Astor Place.
All 3 subway lines intersect at Union Square, but there are no other intersection points.
(For example, this means the 28th stop on the N line is different than the 28th street stop on the 6 line,
  so you'll have to differentiate this when you name your stops in the arrays.)
Tell the user the number of stops AND the stops IN ORDER that they will pass through or change at.
Hints:
Work out how you would do it on paper first! Then start to explain that process in Javascript.
Get the program to work for a single line before trying to tackle multiple lines.
Don't worry about prompting the user for input. Hard code some values to get it working.
 You can use prompt() later to make it more interactive.
Consider diagramming the lines by sketching out the subway lines and their stops and intersection.
The key to the lab is finding the index positions of each stop. (hint: indexOf())
Make sure the stops that are the same for different lines have different names (i.e. 23rd on the N and on the 6 need to be differentiated)
*/
