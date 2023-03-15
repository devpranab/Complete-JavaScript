/*Array: - data type
 - in single variable multiple data storing way as different data.
 - collection of items or values
 - written within square brackets[]
 - var num = [1, 2, 3, "A", "B;"]
 */

//array declare
//array insert,remove,replace in array(CRUD)
//array traversing
//length
//indexOf()
//search value in array
//sort()
//multidimensional in array
//array reverse
//iterate array
//include
//find()
//findIndex()
//map
//reduce
//filter

/*
//Array []; - a collection of items

              lower index/                upper index/
              lower boundary              upper boundary
let arrList = ["Pranav", "Ramij", "Kishor", "Bhagirath"];
     index:       0         0        0           0
                    all are elements
*/

//declare array & check data type
//const fruits = ["Banana", "Orange", "Apple"];
// let type = typeof fruits;
// console.log(type);

// keep elements in extra var
// var fdAge = [18, 20, 19, 90];
// access by indexing
// console.log(fdAge);
// var souravAge = fdAge[0];
// var souravAge = fdAge[1];
// var souravAge = fdAge[2];
// var souravAge = fdAge[6]; //undefined
// console.log(souravAge);

// array lenght
// let arrLen = ["A", "B", "C", "D"];
// console.log(arrlen);

// accessing the Last Array Element(-1)
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// let fruit = fruits[fruits.length - 1];
// console.log(fruit);

// value set-update/change in array
// fdAge[1] = 21;
// console.log(fdAge);

//delete main value in array using delete operator 
// let arr = ["a", "b"];
// delete arr[0];
// console.log(arr);

//search value in array
//Array.prototype.indexOf()
// indexOf() - find position no index, forward search
// var position = fdAge.indexOf(20);
// console.log(position);

// no find so comes -1
//  var position = fdAge.indexOf(22);
//  console.log(position);

//lastIndexOf() - backward search

//Access the Full Array
// With JavaScript, the full array can be accessed by referring to the array name:
// const cars = ["Saab", "Volvo", "BMW"];
// document.getElementById("demo").innerHTML = cars;

// push: add the last ele - 
// const arrayNumber = [10, 15, 20, 25];
// arrayNumber.push(30);
// arrayNumber.push(30, 25);
// console.log(arrayNumber);

// pop() - delete the last ele
// arrayNumber.pop();
// console.log(arrayNumber);

// new value set by lenght
// var ashisAge = fdAge[4] = 21;
// console.log(arrayNumber.length);

//or as a dynamic
// const arrayNumber = [10, 15, 20, 25];
// arrayNumber[arrayNumber.length] = 25;
// console.log(arrayNumber.length);

//const studentNames = ["pranab", "rajat", "rajav", "tarun"];
// shift - delete the 1st ele
// studentNames.shift();
// console.log(studentNames);

// unshift() - add first position
// studentNames.unshift("parves");
// console.log(studentNames);

// shift() - remove first position
// studentNames.unshift();
// console.log(studentNames);

// slice()
// var sl = studentNames.slice(2); //take from 2 index to end
// var sl = studentNames.slice(1, 3); //take from 2 index to 3 index
// console.log(sl); //don`t change original array

//splice() - start-deletecount-inject/add
//change main array
/*
let se = [1,3,4,5,6,7,8];
//let remove = se.splice(2,3);
let remove = se.splice(2,3,6);
console.log(remove);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");
fruits.splice(fruits, 0, "Lici"); //add
fruits.splice(fruits.length, 0, "Lici");
fruits.splice(1, 1, "Orang"); //update
console.log(fruits);
*/

//declare empty array
/*
var arr = [];
console.log(arr);

arr.push(10);
arr.push(10, "ok");
console.log(arr);
*/

//split() - convert string to array
/*
var x = "Pranab";
var x = "Pranab Sarkar";
var result = x.split("");
var result = x.split(" "); //split with white space
var result = x.split(","); //split with ,
console.log(result);
*/

// var x = "Pronab Sarkar is coder";
// var result = x.split("a"); //split where get a word
// var result = x.split("o");
// console.log(result);

//toString() - convert array to string
// var as = ["india", "bd", "china"];
// var result = as.toString();
// console.log(result);

//join - convert array to string
/*
var result = as.join("/"); //separate with /
var result = as.join(",");
var result = as.join(" "); //separate with white space
var result = as.join(":");
console.log(result);

const fruits = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.join(" * ");
*/

//concat
//string + array = string(full)
//array + string = array(full)
//array + array = array(full)
/*
var x = "pranab";
var y = ["is", "code"];
var result = x.concat(y);
console.log(result); //return as string

var y = ["is", "code"];
var x = "pranab";
var result = y.concat(x);
console.log(result); //return as array

var x = ["pranab", "sarkar"];
var y = ["is", "code"];
var result = x.concat(y);
console.log(result); //return as array
*/

//sort - change the main array(acending)
/*
let countries = ["India", "US", "BD", "China"];
var result = countries.sort();
console.log(result); 

Sorting an Array in Random Order
Example
const points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return 0.5 - Math.random()});
console.log(points);
*/

//reverse - opposit of sort(decending)
//no use direct reverse first use sort then ..
/*
let countries = ["India", "US", "BD", "China"];
var result = countries.reverse();
console.log(result);
*/

//some() - Check if any values are over 18

// const ages = [3, 10, 18, 20];

// ages.some(checkAdult);
// function checkAdult(age) {
//   return age > 18;
// }

//every()
//console.log(result);

//isArray()
//let arr = "b";
//let result = Array.isArray(arr)// true
//let result = Array.isArray(arr)// false
//console.log(result);

//map()
//Returns a new array containing the results of calling a function on every element in this array.
//const oldArr = [1, 4, 9, 16, 25];
//num>9
// let newArr = oldArr.map((currentElement, index, arr) => {
//   return currentElement > 9;
// })
// console.log(oldArr);
// console.log(newArr);

// let newArr = oldArr.map((currentElement, index, arr) => {
//   return `Index no = ${index} and the value is ${currentElement} belong to ${arr}`
// })
// console.log(newArr);

//reduce()
// const numbers = [175, 50, 25];

// function myFunc(total, num) {
//   return total - num; //return 100
// }
// let result = numbers.reduce(myFunc);
// console.log(result);

//fil() - Fill all the elements with a value(Kiwi):
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.fill("Kiwi");
// console.log(fruits);

//array constant
//use const in array - best practice
//because will use unique array, no need to change, we will work with changing property value

//filter()
//console.log(result);

//from() - creating array from string
//console.log(Array.from("ABCDEFG"));

//includes()
// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.includes("Banana", 3);
// console.log(fruits); //false because positing is wrong

//valueOf()
// fruits.valueOf() returns the same as fruits:

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// const myArray = fruits;

//Array object - array is object
// let arr = ["a", "b", "c", "d"];
// console.log(typeof arr);

//object constructor - don't use it, use literal syntax
// let a = new Array(); //object constructor
// a[0] = "Hello"; //value add
// a[1] = "World"; //value add
// console.log(a);

//Multidimensional array
// let mult_arr = [["a", "b"], ["1", "2"]];
// console.log(mult_arr[0][0]); //acces a
// console.log(mult_arr[1][0]); //access 1

//for loop in array
// var fruits = ["Banana", "Orange", "Apple", "Mango"];
// var arrLength = fruits.length;

// for(var i=0; i<arrLength; i++){
//   var elements = fruits[i];
//   console.log(elements);
// }

//for in loop-es6 - elements return index
//for of loop-es6 - elements return element
//let fruits = ["Banana", "Orange", "Apple", "Mango"];
// for(let elements in fruits){
//     //console.log(elements);
//     console.log(fruits[elements]);
// }

// for(let elements of fruits){
//     //console.log(elements);
//     console.log(elements);
// }

//array iteration using forEach()
// The forEach() method calls a function (a callback function) once for each array element.

// const numbers = [45, 4, 9, 16, 25];
// let txt = "";
// numbers.forEach(myFunction);

// function myFunction(value, index, array) {
//   txt += value + "" + "<br>";
 
//   console.log(txt);
// }

//forEach() loop
//Array.prototype.forEach()
//calls a function for each element in the array.
//let fruits = ["Banana", "Orange", "Apple", "Mango"];

// fruits.forEach(function(element, index, array){
//    console.log(element + "index:" + index);
// });

//use arrow function in forEach()
// fruits.forEach((element, index, array) => { //here working callback function
//     console.log(element + "index:" + index);
//  });

//How to fatten an array
//converting 2d and 3d array into one dimensional array
// const arrTwo = [
//      ["zone 1", "zone 2"],
//      ["zone 3", "zone 4"],
//      ["zone 5", "zone 6"],
//      ["zone 7", "zone 8"]
// ];
// let flatArr = arr.reduce((accum, currVal) => {
//      return accum.concat(currVal);
// });
// console.log(flatArr);