//Comma Operator - The comma operator (,) evaluates each of its operands (from left to right) and returns the value of the last operand.

let x = 1;
x = (x++, x); //x++ means increase 1=2, x means return that x
console.log(x);//2

let y = (2, 3); //return two no.
console.log(y);//3

//another uses of comma operator
let z = [[1,2,3,4], [3,4,5], [5,6], [7]];
for(let i = 0, j = 3; i <= 3; i++, j--){
  console.log("z[" + i + "][" + j + "] = " + z[i][j]);
  console.log(i,j);
}