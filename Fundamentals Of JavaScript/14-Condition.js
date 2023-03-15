//Condition:(control flow)
//if
//else
//if else

//The if statement executes a statement if a specified condition is truthy.
//If the condition is falsy, another statement can be executed.
//Decission making.

//Control flow - control the code execute
//condition
//if 
/*
syntax: if(condition){
    //code to be executed
}
if(true){
console.log("if statement executed");
}

if(2<3){
console.log("if statement executed 2");
}
*/

//if else
/*
syntax: if(condition){
    //code to be executed
}else{
   //other code
}

if(false){
console.log("comes true");
alert("comes true");
}else{
console.log("comes false");
}

if(3<5){
console.log("comes true");
}else{
console.log("comes false");
}

var biscuitPrice = 8;
if(biscuitPrice <= 8){
console.log("i'll take with biscuit");
}else{
console.log("only tea");
}

var jobPaiso = true;
var savingAmount = 500000;

if(jobPaiso == true && savingAmount > 200000){
    console.log("Aso tmr patri dekhi");
}else if(jobPaiso == true){
  console.log("ok koyekdin pore dekhbo"); 
}else{
  console.log("Tor kopale biya nai");  
}
//Aso tmr patri dekhi
*/

//if, if else, else
/*
syntax: if(1st condition){
    //code to be executed
}else if(2nd condition){
   //other code
}else if(3rd condition){
   //other code
}else{
    //some other code
}

//ex-
var age = prompt("tell yr age");
if(age >= 50){
console.log("ur old");
}else if(age < 50 && age >= 30){
console.log("ur under 50");
}
else if(age < 30 && age >= 18){
console.log("ur young");
}else{
console.log("no result for invalid input");
}
*/
/*
let area = "rectangle";
let PI = 3.142, l=5, b=4, r=3;

if(area = "circle"){
    console.log("The area of the circle is:" + PI*r**2);
}else if(area == "triangle"){
    console.log("The area of the triangle is:" + (l*b)/2);
}else if(area == "rectangle"){
    console.log("The area of the rectangle is:" + (l*b));
}else{
    console.log("Please enter valid data!");
}
*/

//problem:find the largest number
/*
var n1 = prompt("First number:");
var n2 = prompt("Second number:");
var n3 = prompt("Third number:");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2 && n1 >=n3){
    console.log(n1 + "is largest number");
}else if(n2 >= n1 && n2 >=n3){
    console.log(n2 + "is largest number");
}else{
    console.log(n3 + "is largest number");
}
*/

//now use on this - Nested if
/*
var n1 = prompt("First number:");
var n2 = prompt("Second number:");
var n3 = prompt("Third number:");

n1 = parseInt(n1);
n2 = parseInt(n2);
n3 = parseInt(n3);

if(n1 >= n2){
    if(n1 >= n3){
        console.log(n1 + "is largest number");
    }
    else{
        console.log(n3 + "is largest number");
    }
}else{
    if(n2 >= n3){
        console.log(n2 + "is largest number");
    }
    else{
        console.log(n3 + "is largest number");
    }
}
*/

//problem:
/*
console.log(
"Select an option: \n1. Sum \n2. Minus \n3. Multiply \n4. Divide"
)
let num1 = prompt("Enter first number");
let num2 = prompt("Enter second number");
let option = prompt("Choose an operation");
let result = null;

num1 = parseInt(num1);
num2 = parseInt(num2);
option = parseInt(option);

var num1Con = isNaN(num1);
var num2Con = isNaN(num2);
var optionCon = isNaN(option);

if(num1Con || num2Con || optionCon){
    console.log("Invalid Input!");
}else{
    switch(option){
        case 1:
            result = num1 + num2;
            break:
        case 2:
            result = num1 - num2;
            break:
        case 3:
            result = num1 * num2;
            break:
        case 4:
            result = num1 / num2;
            break:
        default:
            break;    
    }
    if(result == null){
        console.log("No Result!");
    }else{
        console.log("Result: ", result);
    }
}
*/

//Exercise:Result
/*
var percentage = 60;
percentage = parseInt(percentage);

if(percentage >= 80 && percentage <=100){
    console.log("Start marks");
}else if(percentage >= 60 && percentage <=80){
    console.log("1st division");
}else if(percentage >= 40 && percentage <=60){
    console.log("2nd division");
}else if(percentage >= 30 && percentage <=40){
    console.log("Normal pass");
}else{
    console.log("No results");
}
*/

//bonus: of condition short carkit evaluation
//check true
//don't
//let a = true;
// if(a == true){
//     console.log(a);
// }
//or
// if(a){
//     console.log(a);
// }

//short carkit evaluation
//it's ised before comming es-6 (default parameter)
// let a = 5;
// a && console.log("5 is true");

//use as default parameter in function
/*
let a;
a || (a = 5);
console.log(a);
*/

//Conditional code format and some feedback - try to code readability and reduce unnecessary code
//if same return then no need write different if else write one line
//use conceptual comment
/*
var num = 45;
if(num < 10){

}
else if {
    
}
*/