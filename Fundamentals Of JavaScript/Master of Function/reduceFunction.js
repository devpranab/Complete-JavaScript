//reduce function

let arr = [4, 8, 1, 9, 14, 5];

// let sum = arr.reduce(function(prev, curr){
//     return prev + curr;
// },100)
// console.log(sum);

// let max = arr.reduce(function(prev, curr){
//     return Math.max(prev, curr)
// },0)
// console.log(max);

//implimention
function myReduce(arr, eb, ace){
    for(let i=0; i<arr.length; i++){
     acc = eb(ace,arr[i])
    }
    return acc;
}

//flatten an array means to convert the 3d or 2d array into a single dimensional array.
//The reduce() method executes a reducer function (that you provide) on each element of the array, resulting in single output value.
//The reducer function takes four arguments: (Accumulator | Current value | Current index | Source array)
//2nd example
let arrList = [4, 6, 8, 10];
let sum = arrList.reduce((accumulator, currEle, index, arr) => {
    debugger;
    return accumulator *= currEle;
});
console.log(sum);