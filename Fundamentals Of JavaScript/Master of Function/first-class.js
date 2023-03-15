//first class function
//rule-01 a function can be stored in a variable
function sum(a,b){
   return a + b;
}
// let result = sum
// console.log(result(5,6));
// console.log(typeof result);//function obj.

//rule-02 a function can be stored in a array
// let arr = [];
// arr.push(sum);
// console.log(arr);
// console.log(arr[0](5,6)); //index,argu.

//rule-03 a function can be stored in a object
// let obj = {
//     sumproperty: sum //passed add function
// }
//console.log(obj);
//console.log(obj.sumproperty(5,6));

//rule-04 we can create function as need
//like in setTimeOut()
// setTimeOut(function(){
//     console.log("i am in inner");
// },3000)

//rule-05 we can pass function as an arguments
//a closure look at javascript functions

//rule-06 we can return function from another function
//these 2 rules will show at higher order function