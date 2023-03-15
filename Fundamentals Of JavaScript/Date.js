//Date Time object
/*creating date object
const newDate = new Date(); //date constructor
const nowDate = Date.now();

it takes max 7 but have to give 2 arguments.
JavaScript counts months from 0 to 11(Jan = 0, Dec = 11).
There are 4 ways to create a new date object:

7 numbers specify year, month, day, hour, minute, second, millisecond(in that order)
*/

// var today = new Data();
// console.log(today);

//as a string comes date object
// var today = new Data();
// var todayStr = today.toString();
// console.log(todayStr);

/*
var dob = new Data("09-12-2000");
var dob = new Data("09-12-2000 10:25:27");
var dob = new Data("June 10 2020");
var dob = new Data("09/12/2000");
console.log(dob);
*/

// var date2022 = new Data(2022, 1);
// console.log(date2022.toLocalString());

//toDateString
// let d = new Date();
// d.toDateString;
// d.toTimeString;
// d.toLocaleString
// console.log(d);

//get date
// var today = new Data();
// console.log(today.getTime());
// var getD = today.getFullYear();
// var getD = today.getMonth();
// var getD = today.getDate();
// var getD = today.getMinutes();
// var getD = today.getHours();
// var getD = today.getMiliseconds();
// var getD = today.getTime();  //Timestamp: Amout of second past since Jan 1st 1970
// console.log(getD);

//set/change date
// var dob = new Data("09/12/2000");
// dob.setMonth(2);
// dob.setDate(5); 
// dob.setHours(7); 
// dob.setFullYear(2020); //same way

//how much time need to print loop, time different
// const start = new Date();
// let sum = 0;
// for(let i=0; i<1000000; i++){
//     sum++;
// }
// const end = new Date();
// console.log("time elapsed", end-start, sum);    //9ms

//Date formats
//ISO format - international
//const d = new Date("2015-03-25");


/*
 Practice Time
 new Date().toLocaleTimesString(); //11:18:48 am
 new Date().toLocaleDateString(); //11/16/2023
 new Date().toLocaleString(); //11/16/2023, 11:18:48 pm
*/