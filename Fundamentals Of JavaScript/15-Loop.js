//Control flow -
//loop - for loop, while loop, do while loop, for in loop, for of loop

// for loop - syntax - repeatable working
/*
   for(initializer; condition; iteration){
    //code to be executed
   }
*/
// var i = 0;
// for(var i = 0; i<=10; i++){
// debugger;    
// console.log(i);
// }

// var i = 10;
//  for(var i = 10; i>=1; i--){
//  console.log(i);
//  }

/*
let numbers = [4,6,1,8,4,6,7];
for(var i = 0; i<numbers.length; i++){
    var element = numbers[i];
    console.log(element);
}
*/

/* while loop
The while statement creates a loop that executes a specified statement as log as the test condition evaluates to true.
for stopping loop need extra var.
syntax: while(condition){
    //code to executed upto conditon true
}
*/
/*
while(true/1/2/3){
    console.log("hi"); //infinity
}
while(false/0){
    console.log("hi"); ////code not to executed bcz false
}

 var num = 10;
 while(num <= 10){
    console.log("Value of i:" + num);
    num++;
 }

var number = 0;
while(number <= 15){
// number = number + 1
// or
number++
console.log(number);
}
*/

//more while loop
//print 1 to 10
/*
var i = 1;
while(i <= 10){
    console.log(i);
    i++
}
*/

// do while loop
/*
var num = 20;
do{
    //debugger;
    console.log(num);
    num++;
}while(num  <= 10);
*/

/*
var i = 1;
do{
    console.log("value of i" + i);
    i++
}while(number <= 5)
*/

//use if in loop
/*
var i = 1;
while(i <= 10){
    if(i == 4){
    console.log("value of i " + i);  
    }
    console.log(i); 
    i++
}
*/

//sum of 1 to 10
/*looping flow
sum = 0 + 1
sum = 1 + 2
sum = 3 + 3
sum = 6 + 4

var i = 1;
var sum = 0;
while(i <= 10){
    //console.log(i);
    sum = sum + i; 
    i++; 
}
console.log(sum); //55
*/

//sum of 1 to 10
/*
var i = 1;
var sum = 1;
while(i <= 10){
    //console.log(i);
    sum = sum * i;
    i++; 
}
console.log(sum); //3628800
*/

//Nested loop
// for(let a=1; a<=5; a++){
//     for(let b=1; b<=a; b++){
//         console.log(b + "");      
// }
// console.log("<br>");
// }

// for(let a=5; a>=1; a--){
//     for(let b=a; b>=1; b--){
//         console.log(b + "");      
// }
// console.log("<br>"); 
// }

//new shortcut way to iterating
//for in -get index - string,array,object
//for of -get value - string,array

// let str = "i am a good programmer";
// let arr = ["p", "s", "m", "k"];

//object doesn't have index, so access property
// let obj = {
//     name: "pranab",
//     from: "india"
// }
/*
for (const key in str) {
console.log(`index ${key} and value ${str[key]}`);        
}
*/
/*
for (const key of str) {
    console.log(`index ${key}`);        
    
}
*/
/*
for (const key in arr) {
    console.log(`index ${key} and value ${arr[key]}`);        
}
*/

/*
for (const key in obj) {
    console.log(`property ${key} and value ${obj[key]}`);        
}
*/
/*
for (const key of obj) {
    console.log(`property ${key} and value ${obj[key]}`);        
}
*///error

//Infinity - it's use at loop
// var = 10;
// while(num <= 10){
//     console.log(num);
// }

//negetive infinity
// console.log(-5/0);

//this type of loop does't stop running loop
//ex-

// console.log(5/0);//positive infinity
// console.log(-5/0);//negetive infinity

// Exercise with solution
/*
let num = parseInt(prompt("Enter the number of terms: "));
let sum = 0;
let series = "";

for(let i=1; i<=num; i++){
    sum += i**2;
    series += (i**2).toString();
    if(i == n){
        continue
    }
    series += "+";
    //console.log(i*i);
    console.log(series);
}
// console.log(series);
// console.log(num);
 console.log(`${series} = ${sum}`);
 */