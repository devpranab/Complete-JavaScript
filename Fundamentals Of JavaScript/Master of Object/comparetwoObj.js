//comparing primitive data is easy to show
//but now will show compare two object

let obj1 = {
    a:10,
    b:11
}
let obj2 = {
    a:10,
    b:11
}
// let compare = obj1 === obj2; //false because of memory location different
// console.log(compare);
// //do compare with object property

// if(obj1.a === obj2.a && obj1.b === obj2.b){ //true
//     console.log(true);
// }else{
//     console.log(false);
// }

//shortcut way to compare two object using json
let comparbyJson = JSON.stringify(obj1) === JSON.stringify(obj1);
console.log(comparbyJson);