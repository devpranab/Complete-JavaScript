//organize code tips

//1. call before declare function
//logInfo("Hello pranav!");//don't this
function logInfo(msg){
    console.log(msg);
}
logInfo("Hello pranav!");//do this

//2. have to declare to a variable before use
console.log(double);//undefined for hoisting
var double = 2 * 2;
console.log(double);//4