/* ECMAScript

  ES-6
  ES-7
  ES-8 Spread Operator
  ES-9
  ES-10

*/















//ES10 features

//BigInt
let oldNumber = Number.MAX_SAFE_INTEGER;
console.log(oldNumber);
console.log(9007199254740991n + 12n);
const newNumber = 9007199254740991n + 12n;
console.log(newNumber);
console.log(typeof newNumber);

//ES9 features

//flat() - make in one line
//parameter for level - 2/3/4/infinity
const arrListOne = [
    ["1", "2"],
    ["3", "4"],
    ["5", "6", ["7", "8"]]
];
console.log(arrListOne.flat());
console.log(arrListOne.flat(3));

//flatMap()

//Object.fromEntries();
const person = {name: "sakib", age: 22};

const arrObj = Object.entries(person);
console.log(arrObj);
console.log(Object.fromEntries(arrObj));

//ES8 features
//flaviocopes.com/es2017/

//string padding - padStart(),padEnd()

//Object.values()
//Object.entries()

//ES7 features
//Array.prototype.includes - return true/false
//includes()
const colors = ["red", "black", "blue", "white", "orange"];
const isHaveBlue = colors.includes("blue");
const isHavePink = colors.includes("pink");
console.log(isHaveBlue);
console.log(isHavePink);

//Exponentiation Operator **
var expNum = 2 ** 2; //2*2=4
var expNum = 3 ** 3; //3*3*3=27
var expNum = 2 ** 6; //2*2*2*2*2*2=64
console.log(expNum);