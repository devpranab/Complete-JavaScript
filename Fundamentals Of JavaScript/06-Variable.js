/* Variable
    - where kept any data/value
    - variables are containers for storing values
    - variables is case sensitive 
    - variables is changable
    - variables store value with taking 64 bit memory allocate
*/

// var keyword var name = var value;
// var varName = 10;

//variables is changable
//var eggrollPrice = 15
//console.log(eggrollPrice);

//declare and value set
// var name;
// name = 10;  or var name = 10;
// console.log(name);
// console.log(typeof name); //data type

//variable is changable
// var varName = "Pranav";
//     varName = "Sarkar";
//     varName = "Roy";
// console.log(varName); //Roy

//dont't lost value of x
// var x = 2;
// console.log(x);
// var x;
// console.log(x);

//changable value to maintaining sequence
// var a = 20;
// var b = a;
// console.log(a); //20
// console.log(b); //20
// a = 30;
// console.log(a); //30
// console.log(b); //20

// var price1 = 10;
// var price2 = 15;
// price2 = price2 + 1; or price++;
// console.log(price2); //11

//variables is case sensitive
// var myName = "Pranav";
// var myname = "Sarkar";
// console.log(myName); //not same name
// console.log(myname);

// algebra +
// var x = 5;
// var y = 5;
// var sumofXY = x + y;
// console.log(sumofXY);

// algebra -
// var x = 15;
// var y = 10;
// var sumofXY = x - y;
// console.log(sumofXY);

/*
<p id="demo"></p>

<script>
let carName = "Volvo";
document.getElementById("demo").innerHTML = carName;
</script>
*/

//01 - shortcut way: one line var name listing
// var firstName, lastName;
// firstName = "Pranav"; 
// lastName = "Sarkar";
// console.log(firstName);
// console.log(lastName);
// console.log(firstName, lastName);

//02 - shortcut way: one line declare
// var a = 1, b = 2, c = 3
// console.log(a); //1
// console.log(b); //2
// console.log(c); //3

//03 - shortcut way: same value of a,b,c property
// var a = b = c = 2
// console.log(a); //2
// console.log(b); //2
// console.log(c); //2

/*rules of variable naming convention
~The first character must be a letter or an underscore (_) or an dollar($). You can't use a number as the first character.
ex- 2myName (x)
    myName ()

~The rest of the variable name can include any letter, any number, or the underscore. Can't use any other characters, including spaces.
ex- _my Age (x)
    _myAge ()

~Variable names are case-sensitive.
ex- var myage = 10;
    var myAge = 10; -these are different var not same  

~No limit to the length of the variable name.
ex- var myPublicNameOne = "";

~No white space 
ex- my Name (x)

~First letter will not capital - my suggestion
ex- MyName (x)

~no need write more times var keyword
ex- var a = 2;
    var a = 3; (x)

    var a = 2;
    a = 3;

Suggestion to make var name: 
- use camel case - myName,
- give meaningfull name,

~You can't use one of JavaScript's reserved words as a variable name.
*/

/* Challange of var naming convention
Q.Which is the valid and valid name?
var _myName = ;   (valid name)
var _1my__Name = ; (valid name)
var 1myName = ;  (invalid name)
var $myName = ;  (valid name)
var myName% = ;  (invalid name)
*/

//Let, Const
//Let: no redeclare but reassign possible
// let n = 20;
//     n = 21;

//Const: no reassign, no redeclare, no changable
 const x = 13;
// const x = 14; //error bcz no redeclare
// x = 14 // error
// x = 15 + 16; // error
// x = x + 2 //error
// z = x + 2 //ok
// console.log(x);
 console.log(z);