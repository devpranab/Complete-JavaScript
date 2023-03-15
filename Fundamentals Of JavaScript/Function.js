/* Function
Function Definition
Calling a Function
Function Parameter
Function Arguments
Function Expression
Return keyword
Anonymous Function

A JavaScript Function is a block of code designed to perform a particular task.

Syntax: function functionName(){
    //statement
}

Why Function:
You can reuse code: Define the code once, and use it many times.
you can use the same code many times with different arguments.
to produce different results.
A function is a group of reusable code which can be called anywhere.
In your program, the eliminates the need of writing the same code again and again.
DRY = Do not repeat yourself.

2 type of function: 
01-built-in:console.log()
            alert()
            prompt()
02-user-defined function
*/

// name(); //call
// function name(){
// console.log("ok i love me");
// }
// name(); //call
//name(); //call
//console.log("-----------");
//name(); //call

// parameter & arguments
// alert("Hello World");

// function sayFunc (para1) {
    //alert(`Hello ${para1}`)
// }
// sayFunc("Pranav");

// function sayFunc (para1) {
    //alert(`Hello ${para1}`)
// }
// let val = "Rajav";
// sayFunc(val);

//use multiple parameter pass
// function sayFunc (fname, lname) {
    //alert(`Hello ${fname} ${lname}`)
// }
// let fName = "Rajav";
// let lName = "Sarkar";
// sayFunc(fName, lName); //if here no passed value return undefined

//Default parameter value
// function sayFunc (fname, lname = "Sarkar") {
    //alert(`Hello ${fname} ${lname}`)
// }
// let fName = "Rajav";
// let lName = "Sarkar";
// sayFunc(fName); //if here no passed value so taked default value

// function doubleIt(num){
//     var result = num*2;
//     console.log(result);
// }
// doubleIt(5);

//real uses of default parameter value
// function numSum(a=0, b=0){
//     console.log(a+b);
// }
// numSum(); //return 0
// numSum(4,9);

// use of return
// return means give value who called f() 
//when JavaScript reaches a return statement, the function will stop executing.

// function doubleIt(num){
//    var result = num*2;
//    return result;
// }
// var first = doubleIt(5);
// var second = doubleIt(50);
// console.log(first, second);
// console.log(first + second); //110

//don't code executed if use return
// function doubleIt(num){
//    var result = num*2;
//    return result;
// console.log("don't code executed"); //line after return
// }
// var first = doubleIt(5);
// var second = doubleIt(6);
// console.log(first, second);
// console.log(first + second);


/* function add(a = 5,b){ //a=5 is default parameter
var result = a + b;
return result;
}
var sum = add(12,13);
console.log(sum); */

//function expression
//create a function and put it into the variable.
//normal f() declaration
/*
function say(){
    console.log("say function");
}
say();

//Function expression declaration
//new way to define a function
//keep function at variable
//anonymous Function(without name function)
let say = function(){ 
    console.log("say function");
}
say();

or
function sum(a,b){
    var total = a + b;
    console.log(total);
}
var funcExp = sum(5,10); //call indirectly
console.log(funcExp); //call directly
*/

//arrow function - es-6
//new short way to define a function
//when have single parameter no need use ()
/*
let say = () => {
    console.log("say function");
}
say();
*/
//pass parameter in arrow function
/*
let say = js => {
    console.log("say function" + js);
}
say("javascript");
*/

//use return in arrow function