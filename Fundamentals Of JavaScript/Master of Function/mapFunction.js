//Map function
/*
const numbers = [4,8,4,2,9,6];
const output = [];

for(let i = 0; i<numbers.length; i++){
    const element = numbers[i];
    const result = element*element;
    output.push(result);
}
console.log(output);
*/

//do this using map
const numbers = [4,8,4,2,9,6];
//const output = [];

// function square(element){
//     return element*element;
// }
//or
// const square = element => element*element;
//or
// const square = x => x*x;

const result = numbers.map(function(element){
    return element*element;
})
console.log(result);

//map function
// let arr = ['a', 'b', 'c', 'd', 'e', 'f'];

// let sqrt = arr.map(function(v){
//     return v+01;
// })
// console.log(sqrt);
