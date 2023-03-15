// Operator: 
/*
Type of Operators:
1.Arithmatic Operator
2.Assignment Operator
3.Comparison Operator
4.Logical Operator
5.String Operator
6.Conditional Operator(Ternary)
7.Delete operator
8.Comma operator
9.Bitwise operator
*/

/*
 operand + operator + operand = expression
 2 + 2 = 4
*/ 

//Arithmatic Operator(+plus, -minus, *ento, /divison, %remainder, **exponential)
// var price1 = 5;
// var price2 = 6;
// var totalPrice = price1 + price2;
// console.log(totalPrice);

//just Like Algebra
// var x = 5;
// var y = 6;
// var z = x - y;
// console.log(z);

/*
console.log(4+5);
console.log(4-5);
console.log(4*5);
console.log(4/5); //vagfol
console.log(4%5); //vagses
console.log(4**5); //exponential
*/

//Increment & Decrement Operator
/*
a++ or a = a+1; same
++a or 1+1 = a; same
Operator: x++ or ++x or x-- or --x,

If used postfix, with operator after operand (for example, x++),
The increment operator increments & returns the value before incrementing.
*/
// var numb = 20;
// var updatedNumb = numb++;
// console.log(numb); //21
// console.log(updatedNumb); //20

// var numb = 20;
// var updatedNumb = numb--;
// console.log(numb); //19
// console.log(updatedNumb); //20
/*
If used postfix, with operator before operand (for example, ++x),
The increment operator increments & returns the value after incrementing.
*/
// var numb = 20;
// var updatedNumb = ++numb;
// console.log(numb); //21
// console.log(updatedNumb); //21

// var numb = 20;
// var updatedNumb = --numb;
// console.log(numb); //19
// console.log(updatedNumb); //19
/*
Prefix increment operator means the variable is incremented first and then
the expression is evaluated using the new value of the variable.
*/

//increment
// var a = 10;
// a++
// console.log(a); //11
// //deccrement
// a--
// console.log(a); //10

//increment & deccrement
// var a = 5;
// var b = 7;
// a++;
// ++b;
// console.log(a); //6
// console.log(b); //8

//more increment & deccrement
/*
var a = 5;
var b = 7;
var c, d;
c = a++;
d = ++b;
console.log(c); //5
console.log(a); //6
console.log(d); //8
console.log(b); //8
*/
/*same goes for --
var a = 5;
var b = 7;
var c, d;
c = a--;
d = --b;
console.log(c); //5
console.log(a); //6
console.log(d); //8
console.log(b); //8
*/

//priority of operators - / * +- but () means customly first then that rule, ** always first
// let opr = (3 - 5) * 5 /7 + 4**4;
// console.log(opr);

//String Operator
//string operator-string concatenation
//The concatenation operator(+) concatenates two string values together,
//returning another string that is the union of the two operand strings.
// console.log("Hi" + "Pranav"); //HiPranav
// console.log("Hi" + " " + "Pranav"); //Hi Pranav
// console.log("Hi" + "  Pranav"); //space between
// console.log("Hi" + " " + "Pranav"); //space between
// console.log("Hi" - "Pranav"); //NaN
// console.log("Hi" - 76); //NaN
// console.log(10 - 20); //-10
// console.log("10" - "20"); //-10
// console.log("10" + "20"); //2020
// console.log(5 + 15 "world"); //"20world"
// console.log(5 + "world"); //"5world"
// console.log("world" + 5); //"world5"
// console.log("world" + 5 + 5); //"world55"

//Assignment Operator(short form: operator=)
// var a = 12;
// var b = a;
// console.log(b); //12

// var a = 10;
// var a = a + 11;
// console.log(a); //21 or a += 11;

// a += b //or
// a += 10

// a -= b 
// a *= b 
// a /= b 
// a %= b

// same as string
// name = name + "world"; //or
// name += "world";
// console.log(name);

//3.Comparison Operator
//A comparison operator compares its operands and return a logical value based on whether the comparison is true.
/*
    == Equal
    === Equal with data type
    != Not equal
    > Greater than
    < Less than
    >= Greater than or equal
    <= Less than or equal
*/
//  var a = 5;
//  var b = 5;
//  var resCom = a == b;
//  console.log(resCom); //true

// var a = 5;
// var b = 6;
// var resCom = a == b;
// console.log(resCom); //false

// var a = 5;
// var b = "5";
// var resCom = a === b;
// console.log(resCom); //false bcz didn't match for diff. data type

// var a = 5;
// var b = 6;
// var resCom = a != b;
// console.log(resCom); //true bcz it's not matched

// var a = 5;
// var b = 5;
// var resCom = a != b;
// console.log(resCom); //false bcz it's matched

// var a = 5;
// var b = 6;
// var resCom = a < b;
// console.log(resCom); //true

// var a = 5;
// var b = 6;
// var resCom = a > b;
// console.log(resCom); //false

// var a = 5;
// var b = 10;
// var resCom = a >= b;
// console.log(resCom); //false

// var a = 5;
// var b = 5;
// var resCom = a >= b;
// console.log(resCom); //true

// var a = 1;
// var b = 1;
// var resCom = a <= b;
// console.log(resCom); //true

// var a = 1;
// var b = -3;
// var resCom = a <= b;
// console.log(resCom); //false

//4.Logical Operator(|| Or, && and, ! not)
/*
true || true = true       true && true = true       ! opposit
true || false = true      true && false = false     !false = true
false || true = true      false && true = false     !true = false
false || false = false    false && false = false
false || false || true = true
*/

//||
// if((4>6) || (1<6)){
//     console.log("cond. is true");//true
// }else{
//     console.log("cond. is false");
// } 

//console.log((a<b) || (b>0) || (b>0));

// if((4>6) || (1>6)){
//     console.log("cond. is true");
// }else{
//     console.log("cond. is false");
// }//false

//&&
// if((10 == 10) && (5<6)){
//     console.log("cond. is true");//true
// }else{
//     console.log("cond. is false");
// } //true

// if((4>6) && (1<6)){
//     console.log("cond. is true");
// }else{
//     console.log("cond. is false");
// }//false

//!
// if(!(4>6) && (1<6)){
//     console.log("cond. is true");
// }else{
//     console.log("cond. is false");
// } //true for ! -opposit

//5.Conditional Operator -if true-1st value, false-2nd value
/*
var co = (1<2) ? "Hi" : "Hello";
console.log(cp); //Hi bcz true

var co = (1>2) ? "Hi" : "Hello";
console.log(cp); //Hello bcz false
*/

//typeof operator
//some confused data,don't easy to understand

//var n = 456546;
///console.log(typeof n); //number

//var str = "my code";
///console.log(typeof str); //string

//var isOk = true;
///console.log(typeof isOk); //boolean

// typeof "John"                 // Returns "string"
// typeof 3.14                   // Returns "number"
// typeof NaN                    // Returns "number"
// typeof false                  // Returns "boolean"
// typeof [1,2,3,4]              // Returns "object"
// typeof {name:'John', age:34}  // Returns "object"
// typeof new Date()             // Returns "object"
// typeof function () {}         // Returns "function"
// typeof myCar                  // Returns "undefined"
// typeof null                   // Returns "object"

//the constructor property returns the constructor function for all JavaScript variables
//let x = "John".constructor  // Returns function String()  {[native code]}

//delete operator
//delete main value in array
// let arr = ["a", "b"];
// delete arr[0];
// console.log(arr);

//instanceof operator - returns true if an object is created by a given constructor:
// const fruits = ["Banana", "Orange", "Apple"];
// fruits instanceof Array;
// console.log(fruits);

//comma operator
// let x = 1;
// x = (x++, x)
// console.log(x);

//delete operator
// JavaScript Array delete()
// Warning !
// Array elements can be deleted using the JavaScript operator delete.
// Using delete leaves undefined holes in the array.
// Use pop() or shift() instead.

//bitwise operator:

// Task
/*
>Accept a number from user.(Temperature in Celcius)
>Convert it to Fahrenheit(Formula: F=9/5*C+32)
>Print the result as alert!("Fahrenheit: 94 Degree")
>Print "Task Complete" in console!

code:
let temperature = prompt("Enter a temperature");
let result = 9/5*temperature+32;
alert("Fahrenheit: " + result + " " + "Degree");
console.log("Task Complete");
*/