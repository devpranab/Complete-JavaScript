//Scope
//scope - the ultimate weirdo concepts

//global scope
//function scope
//block scope

//from function can't access let/const, but can access from global

let bonus = 8;
function sum(first, second){             //function scope
    let result = first + second + bonus;
    if(result>20){
        const mood = "happy";
        //console.log(mood);
    }
    //console.log(mood);
    return result;
}
const output = sum(7,4);
// console.log(output);

//console.log(result);//can`t access from out of block code because of let, const is block scope, but it`s possible of let that access in a block code from out of block(DO NOT HOISTING)

//console.log(bonus);


//var - is global scope
console.log(val); //undefined for hoisting declaration, not getting access value 
var val = 10;
console.log(val);

