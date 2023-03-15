//basic higher order function
//rule-05 we can pass function as an arguments
//rule-06 we can return function from another function

function add(a, b){
    return a+b;
}

function manipulate(a, b, func){
    let c = a + b //5+6=11
    let d = a - b //-1

    function multiply(){
        let m = func(a, b)
        return c*d*m //11*-1*

    }
    return multiply
}

let multiply = manipulate(5,6, add); //pass argu(add)
console.log(multiply());