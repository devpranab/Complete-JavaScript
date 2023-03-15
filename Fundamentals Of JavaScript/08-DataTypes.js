// Data Types(String, Number, Boolean, Array, Object, Undefined, Empty value, NaN, null)
/*These are primitives data
String: typeof instance === "string"
Number: typeof instance === "number"
Boolean: typeof instance === "boolean"
Undefined: typeof instance === "undefined"
BigInt: typeof instance === "bigint"
Symbol: typeof instance === "symbol"
*/
//these data type use as value/data
//examples:

//String
// let stringName = "pranav sarkar";
// console.log(stringName);

//Number
// let numberName = 320;
// console.log(numberName);

//Array
// let arrayName = ["A", "1", "B", "2"];
// console.log(arrayName);

//Boolean
//Either true or false
//var a = true;
//var b = false;
// let res = 5 == 5; //true
// let res2 = 5 == 6; //false
// console.log(res);
// console.log(res2);

// var x;
// console.log(Boolean(x)); //false

// var x = null;
// console.log(Boolean(x)); //false

//Undefined - if no value
// let 
// undefinedName; //no value
// console.log(undefinedName);
// console.log(typeof undefinedName);

//Empty value
// var emp = "";
// console.log(emp);

//NaN
// let NaNName = "p" * 2;
// console.log(NaNName);

//null
// let noData = null;
// console.log(noData);

/*
    10 + "20" //concat at +
    9 - "5" //subtrac at -
    "Java" + "Script"
    " " + " "
    " " + 0
    "pranav" - "sarkar"
    true + true //true = 1, false = 0
    true + false
    true + false + true //1 + 0 + 1
    false + true
    false - true //0 - 1
*/
// var result = 10 + "20"; //1020
// var result = 9 - "5"; //4
// var result = "Java" + "Script"; //JavaScript
// var result = " " + " "; //nothing
// var result = " " + 0; //0
// var result = "pranav" - "sarkar"; //Nan
// var result = true + true; //2
// var result = true + false; //1
// var result = true + false + true; //2
// var result = false + true; //1
// var result = false - true; //-1
// console.log(result);

// null == undefined //true
// null === undefined //false
// undefined == "" //false
// null == "" //false