//map f()
//make new array from another array without no changing value of array
//array iterating using map f() -with return new array
//in forEach() iterate to all item but map() do same but return that
/*
let foods = ["cake", "ice-cream", "maggi", "egg-rool", "biriyani"];

function keep (item){
    return `${item} is a food`;
}

let resArr = foods.map(keep);
console.log(resArr);
*/

//or 2nd syntax
/*
var numbers = [1, 32, 31, 2];

let arrSq = numbers.map(function(item){
    return item*item;
})
console.log(arrSq); //return new array
*/

/*
01. Find the square root of each element in an array?
let arr = [25, 36, 49, 64, 81];

02. Multiply each element by 2 and return only those elements which are greater than 10?
let arr = [2, 3, 4, 6, 8];
*/
// let arr = [25, 36, 49, 64, 81];
// let arrSqr = arr.map((curElem) => {
//     return Math.sqrt(curElem);
// });
// console.log(arrSqr);

// let arr2 = [2, 3, 4, 6, 8, 10];
// let arrSqr2 = arr2.map((curElem) => {
//     return curElem * 2;
// }).filter((curElem) => {
//     return curElem > 10;
// });
// console.log(arrSqr2);

//shortcut
//  let arr2 = [2, 3, 4, 6, 8, 10];
//  let arrSqr2 = arr2.map((curElem) => curElem*2).filter((curElem) => curElem > 10);
//  console.log(arrSqr2);

// let arr3 = [2, 3, 4, 6, 8, 10];
// let arrSqr3 = arr3.map((curElem) => curElem*2).filter((curElem) => curElem > 10).reduce((accumlator, curElem) => {
//     return accumlator += curElem;
// });
// console.log(arrSqr3);