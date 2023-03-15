//Number: -data type
//numerical values with or without decimals
//4, 3.14, 1.66667
//no ""

//var number = 23; //integer number
//var number2 = 23.11; //floating number
// console.log(number + number2); 

// var ab = "10" + "10"; //1010
// var ab = "10" + 10; //1010
// var ab = 8 + 12 + "10"; //2010
// var ab = "result" + 12 + 10; //result1210
// var ab = "21" - 12; //9
// var ab = "21" * 12; //252
// var ab = "21" % 12; //9
// console.log(ab); 

//var number = 20 // A number with decimals
//var number = 20.56 // A number without decimals


//Exponential
//let twoEnto = 3**3; //3*3*3 = 27
//console.log(twoEnto); //27
//var number = 123e5 //or 123 * 10**5
//var number = 123e-5 //
//console.log(number);

/*
Floating Precision
Floating point arithmetic is not always 100% accurate:

let x = 0.2 + 0.1;

To solve the problem above, it helps to multiply and divide:

let x = (0.2 * 10 + 0.1 * 10) / 10;
*/

// Infinity
// var sn = infinity;
// var sn = 25 / 0;
// console.log(sn); //infinity

// Hexadecimal number
// var hex = 0xBB
// console.log(hex); //187 save at decimal

// toString() - convert number to string
// var n = 187; //"187"
// var n = 187.11; //"187.11"
// var res = n.toString();
// console.log(n);
// console.log(typeof res);

//convert decimal to binary
// var dec = 187;
// var res = dec.toString(2);
// console.log(res); //10111011

//convert decimal to octal
//  var dec = 187;
//  var res = dec.toString(8);
//  console.log(res); //273

 //convert decimal to hexadecimal
//  var dec = 187;
//  var res = dec.toString(16);
//  console.log(res); //bb

//toPrecision() - convert to string, how many number
// var pre = 2.34122;
// var res = pre.toPrecision();
// var res = pre.toPrecision(1);
// var res = pre.toPrecision(4);
// console.log(res);

//new short way convert to string, how many number
//var n = 435;
//var re = ""+n;
// console.log(re);

// parseInt() - covert string to number, take upto integer
// var sn = "34"; //34
// var sn = "34.11"; //34
// var res = parseInt(sn);
// console.log(res);

// parseFloat() - covert string to number with take upto float
// + - covert string to number short way
// var sn = "34.1";
// var res = parseFloat(sn);
//or
// var res = +sn;
//  console.log(res);

/* multi method use in one
var x = 12.2;
x.toString(); //"12.2"
parseFloat(x.toString()); //12.2

//isFinite
let a = 85;
let num = isFinite(a)
console.log(num) - true

//isInteger
let a = 85;
let num = isInteger(a)
console.log(num)

//Exponential
let x = 123e5 = 123,00000
x = 123 * 10 ** 5
let x = 9.656;
x.toExponential(2);
x.toExponential(4);
x.toExponential(6);

//toFixed
let a = 23.45632
let num = a.toFixed(2);
    num = a.toFixed(3);
console.log(num);
*/

/*Print 0.3

var n1 = 0.1;
var n2 = 0.2;
var total = n1 + n2;
console.log(total); //0.3000000000004

var n1 = 0.1;
var n2 = 0.2;
var total = n1 + n2;
total = toFixed(1);
console.log(total); //0.3
*/

/*
//valueOf() - returns a number as a number
let x = 123;
x.valueOf();
console.log(x);
(123).valueOf();
console.log(x);
(100 + 23).valueOf();
console.log(x);

//number object
let x = new Number(237);
console.log(x)

//Number property
//MAX_VALUE
//MIN_VALUE
//POSITIVE_INFINITY
//NEGETIVE_INFINITY

//isNan - number-false, string-true
// var n = 10;
// var n = "10";
// var n = "number";
// var n = "123number";
// var re = isNaN(n);
// console.log(re);

// let x = 123;
// But numbers can also be defined as objects with the keyword new:
// let y = new Number(123);

//compare two object
// let x = new Number(500);
// let y = new Number(500);
// (x == y) true or false? ans:false
*/