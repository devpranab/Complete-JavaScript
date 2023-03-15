//prime Number(13)

// is prime number or not? //

/* var n = 12;
for(i = 2; i < n; i++){
  console.log(n, i);

} */
var n = 13;
for(i = 2; i < n; i++){
    //console.log(i, n % i);
if(n % i == 0){
    console.log("not a prime number");
}else{
    console.log("a prime number");
}
console.log(n);
}

// 128, 2 checking point
// 128, 3
// 128, 4

/*
function isPrime(n){
    for(i = 2; i < n; i++){
        if(n % i == 0){
        return "not a prime number"
        }
        }
        return "a prime number"
}

var result = isPrime(128);
var result = isPrime(9);
var result = isPrime(139);
console.log(result);
*/