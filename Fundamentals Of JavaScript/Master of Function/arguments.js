//arguments
//arguments object - array like object
/*
function addNumber(a, b){
   console.log(arguments); //2,5,3
   return a + b;
}
let result = addNumber(2,5,3); //2,5,3 is arguments
console.log(result); //7

function addNumber(a, b){
   //console.log([...arguments]);
   return a + b + arguments[2];
}
let result = addNumber(2,5,3);
console.log(result); //10
*/
//or
/*
function addNumber(a, b){
    //console.log(arguments); //arguments object
    //console.log(...arguments); //arguments array
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        let num = arguments[i];
        //console.log(num); 
        sum = sum + num;
    }
    return sum;
 }
 let result = addNumber(7,5,6,8,10); 
 console.log(result);
*/
 //otherwise we can use spread operator
 function addNumber(a, ...b){
    return a + b;
 }
 let result = addNumber(2,5,3);
 console.log(result);