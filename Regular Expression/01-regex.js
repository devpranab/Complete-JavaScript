/* Regular Expression, short form regex
 /expression/ 
 pattern matching checking technique

 exec()
 test()
*/

// re = /Hello/;
// console.log(re); // /Hello/
// console.log(re.source); // Hello

//exec() - returns result in an array or null

// let re = /hello/;
// let str = "hello World";
// let result = re.exec(str); //matched
// console.log(result);

// let re = /lo W/;
// let str = "hello World";
// let result = re.exec(str); //matched
// console.log(result);

// let re = /loW/;
// let str = "hello World";
// let result = re.exec(str); //no matched
// console.log(result);

// let re = /hello/;
// let str = "hell World";
// let result = re.exec(str); //matched
// console.log(result);

// let re = /hello/;
// let str = "shelloWorld";
// let result = re.exec(str); //matched
// console.log(result);

// let re = /hello/;
// let str = "hello World hello";
// let result = re.exec(str); //matched
// console.log(result);

//i = case insensitive
// let re = /hello/i;
// let str = "Hello World";
// let result = re.exec(str);
// console.log(result);

//test() - return true/false
// let re = /hello/i;
// let str = "Hello World";
// let result = re.test(str); //matched
// console.log(result); //return true

//match() - return result in an array or null
//match method of string not regex
// let re = /hello/;
// let str = "hello World";
// let result = str.match(re); //matched
// console.log(result); //return array

//search() - return index of the first match or -1
// let re = /hello/;
// let str = "hello world";
// let result = str.search(re);
// console.log(result);

//replace() - return new string and replace specefic element
// let re = /Hello/;
// let str = "Hello Again Hello world";
// let newStr = str.replace(re, "Hi");

// // console.log(result);
// // console.log(str);
// // console.log(re.source);
// console.log(newStr);









/*
re = /Hello/g; //g - global
re = /hello/gi; //both
re = /hello|hillo/; // | one match

//grouping with ()
/(color|colour)/g
/(color|colour)/gm // m - multiline
/(red|read) blue/g = first find color|colour then find blue with globally
*/