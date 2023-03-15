//currying idea
//currying is just like design pettern

//normal function
// function add(a, b, c){
//     return a + b + c;
// }
// add(12, 6, 8);

//currying verson of add function
function currying(a){
    return function(b){
        return function(c){
            return a + b + c;
        }
    }
}

let result = currying(5)(9)(6);
console.log(result);