//Symbols-es6 - always unique
//why Symbol():

// let a = Symbol();
// let b = Symbol();
// console.log(a);
// console.log(b);
// console.log(a==b); //false

//symbols used in object as property
/*
let a = Symbol();
let person = {
    name: "pk",
    age: 23,
    [a]: "Hello pk!"
}

*/
//console.log(person); 

//but symbol don`t count as a property - for check use - get
//console.log(Object.getOwnPropertyNames(person)); //no Symbol property

//get symbols
// console.log(Object.getOwnPropertySymbols(person)); //show Symbol

// console.log(Object.keys(person)); //no Symbol property
// console.log(JSON.stringify(person)); //no Symbol property

//even can't get in loop
// for(x in person){
//     console.log(x);
// }

//parameter pass in symbols
// let sym1 = Symbol("hello");
// let sym2 = Symbol("hello");

// console.log(sym1); //Symbol(hello)
// console.log(sym2);
// console.log(sym1 == sym2);