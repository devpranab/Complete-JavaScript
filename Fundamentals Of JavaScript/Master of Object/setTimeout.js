//timeout - async behavior
//after print on time
/*
function doSomething(){
    console.log("do something");
}
console.log(2);
setTimeout(doSomething); //print at last
console.log(3);
*/

/*
function doSomething(){
    console.log("do something");
}
console.log(2);
setTimeout(doSomething, 5000); //print after 5seconds
console.log(3);

setTimeout(function(){
    console.log("print and wait");
},6000)
*/

//in arrow f()
// setTimeout(() => {
//     console.log("print and wait");
// },6000)

// setTimeout(() => {
//     console.log("print and wait"); //print in last
// },0)

//interview tricky question 5 means_
/*
setTimeout(() => {
    console.log("print and wait");
},5) //min-5s or after, but not will be before 5ms
*/