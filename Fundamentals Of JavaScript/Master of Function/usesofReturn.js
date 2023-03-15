//again When to return from a function and from where

//use of return -01.
// function evenify(num){
//     if(num % 2 == 0){
//        return = num;
//     }else{
//        return = num*2;
//     }
// }
// let  result = evenify(13);
// let square = result*result;
//console.log(square);
//or
function evenify(num){
    let result;
    if(num % 2 == 0){
       result = num;
    }else{
       result = num*2;
    }
    return result;
}
let  result = evenify(13);
let square = result*result;
console.log(square);



//use of return -02.
let nums = [5, 12, 89, 45, 18, 8]; //these push into function as a argu.

function evenify_all(nums){
    let even_array = [];
    for(let i = 0; i<nums.length; i++){
        let num = nums[i];
        let result = evenify(num)
        even_array.push(result);
    }
    return even_array;
}

let nums_even = evenify_all(nums);
console.log(nums_even);


/*
//output in console
676
[ 10, 12, 178, 90, 18, 8 ]
*/

// function add(a,b){
//     let result = a + b;
//     return result;
// }
// const addFunc = add(4,6);
// console.log(addFunc == 10); //true

function add(a){
  if(a < 0){
   return "please input positive number";
  }
  let output = a * 2;
  return output
}
var resultAdd = add(4); //8
var resultAdd = add(-3); //8
console.log(resultAdd);