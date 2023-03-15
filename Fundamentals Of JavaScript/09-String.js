//String: - data type
/*
  - Collection of characters (letters, numbers, punctuation, ...etc)
  - Written within quotes "......", '......' or `......`
  - "I am learning js", "Value of PI is 3.1416", "4+4=8"
  - A JS String is zero or more characters written inside quotes.
  - JavaScript strings are for storing and manipulating text.
  - From string literals, or as objects using the string() constructor.

   Escape character
   Finding a string in a string
   Searching for a string in a string
   Extracting string parts
   Replacing string content
   Extracting string characters
   Other useful methods
*/

//declare a string
//var str = "I am programmer";

//printing string syntax with ""
// var str = "pranab";
// var str = "pranab is 'programmer'"; //ok
// var str = "pranab is "programmer""; //error not will be same
// var str = 'pranab is "programmer"'; //ok 
// console.log(str);

//string print in html tag
//document.getElementById("demo1").innerHTML = "Hello Developer!";

//string literal vs constructor
//escape notation
//string methods
//string length

//create string
// var str = "Pranav";
//or string constructor
// var str = new String("Pranav");
// console.log(str);

/*
document.getElementById("demo").innerHTML =
"Hello Dolly!";
*/

/*
Property Access
ECMAScript 5 (2009) allows property access [ ] on strings:
Example
let text = "HELLO WORLD";
let char = text[0];
*/

//escape charecter
// console.log("  world"); //white space
// console.log("Hi \" world"); //get"
// console.log("Hi \' world"); //get'
// console.log("Hi \\ world"); //get \
// console.log("Hi \t world"); //space tab
// console.log("Hi \t\t world"); //double space tab
// console.log("Hi \n world"); //next line with space
// console.log("Hi \nworld"); //next line with no space

//string concatination
// console.log("Hi" + "Pranav"); //HiPranav

//line break
// document.getElementById("demo").innerHTML = "\
// hello pranab!";

//length -property so no need()
// var str = "pranab sarkar".length;
// console.log(str);
// var str = "pranab sarkar";
// var str = "pranabsarkar";
// var str = "Hi \n world"; //no count to single \
// var result = str.length;
// console.log(result);

//indexOf()
//return index or -1
// let str = "Please locate where 'locate' occurs!";
// str.indexOf("locate"); //position of locate

//lastIndexOf();
// let str = "Please locate where 'locate' occurs!";
// str.lastIndexOf("locate");

// let str = "Please locate where 'locate' occurs!";
// str.lastIndexOf("locate", 15);

// toString() Get the content of the text:
// let text = "Hello World!";
// let result = text.toString();
// console.log(result);

// var str = "pranab sarkar".length;
// console.log(str);

//access by index
// let str = "Please locate where 'locate' occurs!";
// var index = str[0]; //P
// var index = str[1]; //l
// var index = str[50]; //undefined
// console.log(index);

//uses of string methods
//lastIndexOf() - Search for the last occurrence of "planet"
// let text = "a great planet.";
// let result = text.lastIndexOf("planet");
// console.log(result);

//toUpperCase()
// var str = "Pranab sarkar";
// var result = str.toUpperCase();
// console.log(result);

//toLowerCase()
// var result = str.toLowerCase();
// console.log(result);

//trim()
//removes whitespace from both sides of a string
// var str = "  Prana  b sarkar";
// var result = str.trim();
// console.log(result);

//TrimStart - remove start space

//TrimEnd - remove end space


//slice - cut, index to index
// var str = "Pranab sarkar";
// var result = str.slice();
// var result = str.slice(2,6);
// var result = str.slice(-2,6);
// console.log(result);

//substr() - index to length return take
// 3-index from, 2-character
//  var str = "Pranab sarkar";
//  var result = str.substr(3);
//  var result = str.substr(3, 2);
//  console.log(result);

//replace() - which, what
// var str = "Pranab sarkar";
// var result = str.replace("ra", "ej");
// console.log(result);

//concat() - add like +
// var str = "Pranab sarkar";
// var result = str.concat(" das", " gupta ", 20);
// console.log(result);

//padStart - 1st para=how many length 2nd para=add
// let a = '2';
// let b = '3';
// console.log(a.padStart(5, "0"));
// console.log(a.padStart(5)); //no 2nd para so separate by space
// console.log(a.padStart(5, "01"));

//padEnd - add at end
//  console.log(a.padEnd(5, "01"));

//split() - converting a string to an array
// let text = "How are you doing today?";
// const myText = text.split(" "); //,
// console.log(myText);
// text.split(",")    // Split on commas
// text.split(" ")    // Split on spaces
// text.split("|")    // Split on pipe

//includes()
// let text = "Hello world, welcome to the universe.";
// let result = text.includes("world");
// console.log(result); //return yes/true

//charArt() - index of single char
// let text = "HELLO WORLD";
// let letter = text.charAt(1);
// console.log(letter);

//charCodeAt() - return 
//return the unicode of the last character in a string
// let str = "HELLO WORLD";
// let lastChar = str.length - 1;
// console.log(str.charCodeAt(lastChar)); //68

//Get the Unicode of the first character in a string:
// let text = "HELLO WORLD";
// let unicode = text.charCodeAt(0);
// console.log(unicode);

//startsWith()
// let text = "HELLO WORLD";
// let letter = text.startsWith("HELLO");
// console.log(letter);

//endsWith()
// let text = "HELLO WORLD";
// let letter = text.endsWith("WORLD");
// console.log(letter);

//match() - will find
// let text = "The rain in SPAIN stays mainly in the plain";
// let result = text.match(/ain/);
// console.log(result);

//search()
// let text = "Mr. Blue has a blue house";
// let position = text.search("blue");
// console.log(position);

//Literal vs object constructor
// let a = "something"; - Literal syntax
// let a = String("something"); - object constructor syntax

//convert string to date
// let date = new Date();
// console.log(date.toString());
// console.log(date.toUTCString());