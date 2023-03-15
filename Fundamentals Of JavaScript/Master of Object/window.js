//Window
//window object

/*Console
  window
*/

//console.log(window);

//all built-in method have in window object as global scope

//in console
// document == window.document //true
// console == window.console //true
//document.getElementById("demo");

//out of block code var value can acess from console for global scope
//can access function, but have to out of block code
//ex-
/*
function add(a,b){
    var result = a + b;
    console.log("result inside", result);//8
    return result;
}
//console.log("result inside", result);//can't access
var sum = add(3,5);
console.log(sum);//8
*/
/*
var num = "pranav";//global window
function add(a,b){//global function not have in another func
    var result = a + b;
    console.log("name inside", name);//access
    return result;
}
//console.log("name inside", result);//access
var sum = add(3,5);
console.log(sum);//8
*/
/*
var name = "suarz";
function add(num1, num2){
  result = num1 + num2;
  console.log("name inside", name);
  function double(num){
    return num * 2;
  }
  var total = double(result);
  return total;
}
//console.log("name outside", name);//can't access bcz need function call
console.log("result outside",result);
var sum = add(10,12);
console.log(sum);
console.log("name outside", name);//access
*/

//check from console that is it global or not?

//if i get access in console, that is global

//in console
//set - donn't this
//window.salary = 555555
//salary