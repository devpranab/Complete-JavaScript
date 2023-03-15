//iterator-es-6
//iterator is built-in method of symbols

/*
let iterable = "hello";
//Symbol.iterator
let iter = iterable[Symbol.iterator](); //return StringIterator{}
console.log(iter);
//next() for iterating
console.log(iter.next());
console.log(iter.next().value); //for value access

console.log("others code");

console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
console.log(iter.next());
*/

//custom iterator
//we'll make make custom iterator for iterating array
let nameList = ["A", "B", "C", "D", "E"];

function customIter(arr){
    let i = 0; //initial
    return{
        next: function(){
            return i<arr.length ? {value: arr[i++], done:false} : {done: true};
        }
    };
}
let members = customIter(nameList);
console.log(members);
console.log(members.next().value);
console.log(members.next());
console.log(members.next());
console.log(members.next());