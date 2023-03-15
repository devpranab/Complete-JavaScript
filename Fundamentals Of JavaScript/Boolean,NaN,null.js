//Boolean, Undefined, Nan, Null - data types

//Boolean - return true or false
// var x = true;
// var y = false;

/*
var a = 5;
var b = 5;
if(a == b){
    console.log("cond: true");
}else{
    console.log("cond: false");
}
*/

// var x = "Pranabs";
// var re = Boolean(x)
// console.log(re);   //true

// var x = null;
// var re = Boolean(x)
// console.log(re);   //false

// var x = 0;
// var re = Boolean(x)
// console.log(re);   //false

// var x = NaN;
// var re = Boolean(x)
// console.log(re);   //false

// var x;
// var re = Boolean(x)
// console.log(re);   //false

//NaN-not a number - a type of data type
// var x = 10/"p";
// var x = "10" - "p";
// console.log(x);
// console.log(isNaN(x));

// let x = NaN;
// let y = 5;
// let z = x + y;
// console.log(z);

//isNaN - number=>false, string=>true
// let res = "nghhj";
// let res2 = 873875;
// console.log(isNaN(res));//true
// console.log(isNaN(res2));//false

/*
   NaN === NaN;
   Number.NaN === NaN;
   isNaN(NaN);
   isNaN(Number.NaN);
   Number.isNaN(NaN)
*/
// console.log(NaN === NaN); //false
// console.log(Number.NaN === NaN); //false
// console.log(isNaN(NaN)); //true
// console.log(isNaN(Number.NaN)); //true
// console.log(Number.isNaN(NaN)); //true

//undefined vs null - different

// 1st way to getting undefined value
/*
let x;
console.log(x);
*/

// 2nd way to getting undefined value
/*
function sum(x, y){
console.log(x + y);
}
const result = sum(6,7); //undefined bcz no return
console.log(result);
*/

// 3rd way to getting undefined value
/*
function sum(x, y){
console.log(x + y);
return
}
const result = sum(6,7); //undefined bcz no what return
console.log(result);
*/

// 4th way to getting undefined value
/*
function sum(x, y){
console.log(x, y);
}
const result = sum(6); //undefined bcz no second argu.
console.log(result);
*/

// 5th way to getting undefined value
/*
const person = {
    name: "pranab",
    from: "india",
    proff: "programmer"
}
console.log(person.gf); //undefined bcz no that property
*/

// 6th way to getting undefined value
/*
let fun = undefined; //directly say
console.log(fun);
*/

// null
/*
let keep = null;
*/

//null == undefined
//true //true as a value but not data type

//null === undefined
//false

//null == "" - false
//undefined == "" - false

//null == NaN - false


/*
Q. What are truthy value & falsy value?
truthy value: 1, true, any number, any string, [], {}
falsy value: 0, "", undefined, null, NaN, false

if(NaN){
    console.log("truthy value");
} else{
    console.log("falsy value");
}
*/
