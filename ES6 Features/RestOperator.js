/*
//rest operator - es-6
- spread & rest operator are looking same but uses different.
- work is opposit of spread operator.
- covert array to making spilitting.
- after ... all make in array

//rest operator on array
let fruits = ["apple", "orange", "mango", "lici"];
let[first, second, ...third] = fruits;
let[first, ...second, third] = fruits;
//console.log(first);
console.log(second);//returns ["orange", "mango", "lici"]
console.log(third);//returns ["mango", "lici"]
*/

let objPerson = {
    fname: "suvodip",
    lname: "roy",
    dob: 31-01-22
}
let {fname, ...lname} = objPerson;
// console.log(fname); //suvodip
// console.log(lname); //{lname: "roy", dob: 31-01-22}

//use rest operator in a function
//ex-1
let funcName = (name, nam1, ...numbers){
    console.log(name); //pranab
    console.log(nam1); //85
    console.log(numbers);//85,3,5,6;
}
funcName("pranab", 85,3,5,6);

//use rest operator & spread operator in a function
//ex-2
moreNums = [5,4,6,4,5];

let test = (name, ...numbers) => { //used as a rest operator-parameter
console.log(name);
console.log(numbers);
}
test("pranab", ...moreNums); //used as a spread operator