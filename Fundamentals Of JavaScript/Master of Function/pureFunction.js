//pure function vs side effect
/*What is pure function
it's return the same result if given the same arguments
it's doesn't cause any observable side effects
*/

//ex-1
// function sqrt(n){
//     return n*n
// }
// let result = sqrt(6); //always print same result that's why it's pure function
//     result = sqrt(6);
// console.log(result);

//ex-2
// var n = 5;
// function change(){
//     n = 6
// }
// change(); //heppening side effect thats means change, so it's not pure function
//console.log(n);

//ex-3
let point = {
    x:10,
    y:20
}
function printPoint(point){
    point.x = 30
    point.y = 40
   
    console.log(point); 
} 
printPoint(point);    //heppening side effect thats means change, so it's not pure function
console.log(point);
