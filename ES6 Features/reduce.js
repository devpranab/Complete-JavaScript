//Array.prototype.reduce()
//don't change the main array
/*Syntax
var number = [1,2,3,4,5,6];var 
result = number.reduce((prevValue, currentValue, currentIndex, mainArray) => {
  return prevValue + currentValue;
},initValue of prev);
*/

var number = [1,2,3,4,5,6];
var sum = number.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
},0);

console.log(sum);//21
/*
0 + 1 //here 0 initValue
1 + 2
3 + 3
6 + 4
10 + 5
15+ 6 = 21
*/