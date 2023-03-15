//factorial recursive - calculate factorial using recursive function

// small to big 
// var i = 10;
// while(i>=1){
//  i--   
// }

// rules: 0! = 1
// rules: 2! = 1*2
// rules: 3! = 1*2*3
// rules: 4! = 1*2*3*4
// rules: 5! = 1*2*3*4*5
// rules: 6! = 1*2*3*4*5*6
// rules: 6! = (6-1)*6
// rules: 10! = (10-1)!*10
// rules: n! = (n-1)*n

function factorial(n){
    if(n == 0){
      return 1;   
    }else{
      return n * factorial(n-1); //4 * 1*2*3
    }
}
var result = factorial(4);
console.log(result);

// console.log(1*2*3);//6

