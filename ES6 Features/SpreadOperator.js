//speed operator ... - es-6
//easy concatination with splitting

/*//Concat
var numbers = [1, 2, 3];
var newNumbers = [...numbers, 1, 2, 3];
console.log(newNumbers); //[1,2,3,4,5,6];
*/

/*//Copy array
var numbers = [1, 2, 3];
var newNumbers = [...numbers];
console.log(newNumbers);
*/

/*
//spread on array
  let str = "Pranav";
  let newStr = [...str];
  console.log(newStr); //return ["P", "r", "a", "n", "a", "b"];

  let fruit1 = ["Apple", "Pine-apple", "Mango"];
  let fruit2 = ["Orange", "Grape"];
  let newfruit = "Jackfruit";

  let newArr = [...fruit1, newfruit, ...fruit2];
  console.log(newArr);
*/

/*
//spread on object
let person = {
    fname: "PS",
    lname: "Sar"
}
let newPerson = {...person, dob: "09-10-2000"} //add new value
console.log(newPerson);
*/

/*
//before comming operator
//concat and
const serialOne = [11, 23, 45, 32, 19];
const serialTwo = [11, 23, 45, 32, 19];
const serialThree = [16, 22, 40, 35, 17];
const allSerial = serialOne.concat(serialTwo).concat([500000]).concat(serialThree);
console.log(allSerial);


//max number - .. in a method
let job = 2000;
let business = 5000;
let intern = 500;
let maxAmnt = Math.max(job, business, intern);
comsole.log(maxAmnt);
*/

//after comming spreed operator
/*
const serialOne = [11, 23, 45, 32, 19];
const serialTwo = [11, 23, 45, 32, 19];
const serialThree = [16, 22, 40, 35, 17];
const allSerial2 = [...serialOne ,...serialTwo, 600000000, ...serialThree];
console.log(allSerial2);

/*
//Spread operator used in function
//find max number
const amountAll = [23, 43, 12,50, 45];
let maxAmnt = Math.max(amountAll);//error bcz can't work direct full array
let maxAmnt = Math.max(...amountAll);
console.log(maxAmnt);
*/
/*
let person = ["suvho", "malhotra"];

let test = (fname, lname) =>{
    console.log(`${fname} ${lname}`);
}
//before used
//test(person[0], person[1]);
//now use ...
test(...person);
*/

//implimentin - possible
// [...arr].forEach(arr =>{

// })
