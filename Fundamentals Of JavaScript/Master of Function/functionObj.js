// Yes in javascript, functions are object, because

//normal function
// function test(){
//     console.log("random text");
// }
// test();
// console.log(typeof test); //type is function

//functions are object
//console.log(test.constructor); //prove 1 - f function() {[native code]}

//using constructor make a function
// let Rect = new Function("width", "height", `this.width = width
// this.height = height

// this.draw = function(){
// console.log("i am reactangle")
// this.printProperties()
// console.log(this)
// }
// this.printProperties = function(){
// console.log("my width is" + this.width)
// console.log("my height is" + this.height)
// }`                       
// ){ 
// }       //function works in this way behind the scene

// //call
// let rect1 = new Rect(5,6);
// console.log(react1); //output will come as a obj

let rect1.width();


function test(){
console.log("random text");
}
console.log(test.name, test.length); //name, length is bult-in
