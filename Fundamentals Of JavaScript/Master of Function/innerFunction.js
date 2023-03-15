//inner function - use a function in a another function

function add(num1, num2){
    var result = num1 + num2;
    console.log(result);
    function double(num){
        return num*2;
    }
    var total = double(result);
    return total;
}
var sum = add(12, 32);
console.log(sum);