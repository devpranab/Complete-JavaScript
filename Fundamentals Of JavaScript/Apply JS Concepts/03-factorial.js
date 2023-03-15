//factorial

/* 3! = 1*2*3
   4! = 1*2*3*4
   5! = 1*2*3*4*5
   6! = 1*2*3*4*5*6
   10! = 1*2*3*4*5*6*7*8*9 */

/* var factorial = 1;
for(var i=1; i<= 10; i++){
factorial = factorial * i;
console.log(i, factorial);
} */

// factorial as function();
function factorial(n){
    var factorial = 1;
    for(var i=1; i<= n; i++){
       factorial = factorial * i;
  }
  return factorial;
 }
 var result = factorial(7);
 console.log(result); //5040