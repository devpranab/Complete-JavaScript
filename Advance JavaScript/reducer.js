// const nums = [12, 45, 60, 25, 42];

//nums.map(num => num+2);
//nums.filter(num => num>2);
//nums.find(num => num>2);

//doing sum using reduce
// it`s working like loop
// const total = nums.reduce((sum , num)=> sum+num , 0)
// console.log(total);

// {} use korle return korte hobe
// const total = nums.reduce((sum , num)=> {
//     // ki asche dekha jak - aivabei looping er moto kaj korche
//     console.log(sum, num);
//     return sum + num
// } , 0)
// console.log(total);


// Now we`ll use reduce on object
// const friends = [
//     {name:"pranab", age:20},
//     {name:"prasum", age:21},
//     {name:"srajan", age:22}
// ]
// const total = friends.reduce((sum, fd) =>{
//     console.log(sum, fd);
//     return sum + fd.age;
// })
// console.log(total);