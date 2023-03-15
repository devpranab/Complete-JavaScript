/* Set 
   - data structure
   - Don't have duplicate data
*/

//declare new set
let mySet = new Set([1,2,3,3,4,5]);
// console.log(mySet); 12345

//set
// mySet.add("hi");
// mySet.add(1); // no add

//clear
// mySet.clear();

//delete
// mySet.delete(5);

//has or not check
// let has2 = mySet.has(2);
// console.log(has2);

//size
// console.log(mySet.size);

//iterating
// for(let x of mySet){
// console.log(x);
// }

//iterating another way
// for(let x of mySet.entries()){
// console.log(x);
// }

// for(let [x] of mySet.entries()){
// console.log(x);
// }

// for(let x of mySet.values()){
// console.log(x);
// }


//entries
// let iter = mySet.entries();
// console.log(iter);
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());
// console.log(iter.next());


//spread operator, same iterating
// let iter = [...mySet.entries()];
// let iter = [...mySet.keys()];
// let iter = [...mySet.values()];
// console.log(iter);


// let iter = [...mySet.values()];
// console.log(iter);
// mySet.forEach(value => console.log(value));