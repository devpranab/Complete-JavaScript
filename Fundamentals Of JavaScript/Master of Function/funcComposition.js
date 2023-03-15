//function composition
//function composition - it's a shortcut way pattern
//as a input of first function can give output of second function

function print(inp){
    console.log(inp);
}

function multiple(n){
    return n*5
}

function add(a,b){
    return a+b
}

print((multiple(add(3,5)))); 

/* 3+5 = 8 return a+b, working down to up
   n * 5 return n*5
   8 console.log(inp);
*/ 
