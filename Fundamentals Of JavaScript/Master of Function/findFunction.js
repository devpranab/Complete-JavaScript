//find() method/function of array
/*
let numbers = [3,5,2,5,4,8,9];

let result = numbers.find(function(value, index){
    return value === 9
});
console.log(result);

//or short
//const isThere = numbers.find(x => x>5);
//console.log(isThere);
*/
/*
let numbers = [3,5,2,5,4,8,9];

let result = numbers.findIndex(function(value, index){
    return value === 9
});
console.log(result);
*/

//implimentation
// let arr = [3,5,2,5,4,8,9];

// function myFind(arr, cb){
//     for(let i=0; i<arr.length; i++){
//         if(cb(arr[i])){
//             return i
//         }
//     }
// }
// let result = myFind(arr, function(value){
//     return value === 9
// });
// console.log(result); //return index no 6