// Type Conversion with data type
//type conversion - convert from one data type to other data type
// let myStr = "456";
// let myNum = 456;
// console.log(myStr + myNum); //456456
//will solve this problem

//convert: number to string
// let num = 674;
// console.log(num); //return as a number
// let result = num.toString();
// console.log(result); //return as a string

//convert: date to number
// let date = new Date();
// let result = Number(date);
// console.log(result);

//convert into number:
// let result = Number(true); //return 1
//     result = Number(false); //return 0
//     result = Number(""); //return 0
//     result = Number("  "); //return 0
//     result = Number("3.10"); //return 3.10
// console.log(result);

// let y = "John";   // y is a string
// let x = + y;      // x is a number (NaN)

//Automatic type converson
// let x = 5 + null
//     x = "5" + null  // returns "5null"   
//     x = "5" + 2     // returns "52"      
//     x = "5" - 2     // returns 3         
//     x = "5" * "2"   // returns 10
// console.log(x);

//Automatic String Conversion
// if myVar = {name:"Fjohn"}  // toString converts to "[object Object]"
// if myVar = [1,2,3,4]       // toString converts to "1,2,3,4"
// if myVar = new Date()      // toString converts to "Fri Jul 18 2014 09:08:55 GMT+0200"
//console.log(myVar);

//numbers and booleans are also converted, but this is not very visible:
// let myVar = 123             // toString converts to "123"
// let myVar = true            // toString converts to "true"
// let myVar = false           // toString converts to "false"
//console.log(myVar);








