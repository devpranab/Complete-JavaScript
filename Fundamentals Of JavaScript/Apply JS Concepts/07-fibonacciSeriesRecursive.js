//fibonacci using recursive
/* rules:condtion of logic building
fibo[2] = fibo[2-1] + fibo[2-2];
fibo[3] = fibo[3-1] + fibo[3-2];
fibo[4] = fibo[4-1] + fibo[4-2];
fibo[5] = fibo[5-1] + fibo[5-2]; */
/*
function fibonacci(n){
    if(n == 0){
          return 1;   
    }
    if(n == 1){
        return 1;   
    }else{
          return fibonacci(n-1) + fibonacci(n-2);
    }
}
var result = fibonacci(10);//89
console.log(result);
*/

//fibonacci Series using recursive
// [0,1,1,2,3,5,8,13,21,]
function fibonacci(n) {
    if (n == 0) {
        return [0]
    } else if (n == 1) {
        return [0, 1];
    } else {
        // calculate & find array nth element 
        var fibo = fibonacci(n - 1);//14

        var nextElement = fibo[n - 1] + fibo[n - 2]; //14+13
        fibo.push(nextElement);
        return fibo;
    }
}

var result = fibonacci(15);
console.log(result);