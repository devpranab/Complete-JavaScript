/* Object
 - Collection of property: value PerformanceObserverEntryList
 - Written with curly braces{}
 - var person = {name: "Pranav", age: 21, home: "kolkata"}
 - Similar to Html attributes
 */
// declare
/*
var students = {
    id: 01, //value-pair     no indexing system
    name: "pranab", //value-pair
    course: "MERN" //value-pair
}
// console.log(students);
*/

// access property - 3 way
// var course = students.name;
// or
// var name = students["name"];
// or
// another way using extra variable
// var namePropName = "name";
// var name = students[namePropName];
// console.log(name);

// change property value
// students.id = 12; //set
// students["id"] = 2; //update
// students["proff:"] = "Developer"; //add
// console.log(students);

// add property value
/*
students.phn = 5647123;
students.hobby = "coding";
console.log(students);

//delete -property-pair - not working pls 
delete students.id;
console.log(students);
*/

//empty object define
/*
var obj = {}
console.log(obj);
obj.name = "pk";
obj.age = 27;
console.log(obj);
*/


//object method
// let person = {
//     firstname: "Rajav",                           //property
//     lastname: "Sarkar",
//     dob: "09-10-2000",
//     fullname: function(){                         //method
//         return `${this.firstname} ${this.lastname}`;
//     }
// }
// console.log(person.firstname);
// console.log(person.fullname());

//object-convert into object - don`t this
// let x = new Number(5);
// let x = new String();
// let x = new Boolean();
// console.log(x);

//Creating a object by another way(constructor)
// let a = new Object(); //don't use this way
// a.name:"PK";
// a.age:20;

//Displaying object
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
//   document.getElementById("demo").innerHTML = person;

//or
// const person = {
//     name: "John",
//     age: 30,
//     city: "New York"
//   };
  
//   let txt = "";
//   for (let x in person) {
//   txt += person[x] + " ";
//   };
  
//   document.getElementById("demo").innerHTML = txt;

// Displaying the Object Properties by name
// Displaying the Object Properties in a Loop
// Displaying the Object using Object.values()
// Displaying the Object using JSON.stringify()

//Get value in a object
// const object1 = {
//     a: 'somestring',
//     b: 42,
//     c: false
//   };
  
//   console.log(Object.values(object1));
  // expected output: Array ["somestring", 42, false]

  //

//Object built-in method 
// let obj = {
//   car: "Tesla",
//   price:234565
// }
//only access key
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
//console.log(Object.entries(obj));

//Object cloning/copying
// const user = {
//   name: "ps",
//   proff: "coder"
// }
// console.log(user);

//Object.assign - first way
// const copyuser = Object.assign({}, user)
// console.log(copyuser);

//spreed operator - second way
// const copyuser = {...user}
// console.log(copyuser);

// "JSON" - third way
//JSON.parse(JSON.stringify(food))