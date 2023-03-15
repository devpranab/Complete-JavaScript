/* 
object copy
shallow copy: 
    - work with normal object, it's work for object copy as data not ref.
    - if use with nested object then convert reference to nested object property.
    - implementation way: object.assign(), object destructure.
deep copy: 
    - shallow copy can't work with nested object so use deep copy.
    - deep copy can't work with function or date object for solution use lodash.
    - implementation way: JSON.parse(JSON.stringify(person2)), but for function/date use lodash.
*/

//problem
// let person = {
//     name: "pranav"
// }
// let user = person;//object copy, here ref copy not copy data
// user.name = "sarkar"
// console.log(person);//sarkar
// console.log(user);//sarkar

//use shallow copy
/*
//1st way to shallow copy
//for reflect/changed problem
let person = {
    name: "pranav"
}

let user = Object.assign({}, person);
user.name = "sarkar";

console.warn("person is", person);//pranav
console.warn("user is", user);//sarkar

//2nd way to shallow copy
let person = {
    name: "pranav"
}

//let user = {...person};
user.name = "sarkar";

console.warn("person is", person);//pranav
console.warn("user is", user);//sarkar
*/

//as nested problem
// let person2 = {
//     name: "pranav",
//     addr: {
//         city: "kolkata",
//         state: "west bengal"
//     }
// }
// let user = {...person2};
// user.addr.city = "mumbai";

// console.warn("person2 is", person2);//kolkata
// console.warn("user is", user);//mumbai

//use deep copy
/*
//1st way to deep copy
let person2 = {
    name: "pranav",
    addr: {
        city: "kolkata",
        state: "west bengal"
    }
}
let user = JSON.parse(JSON.stringify(person2));
user.addr.city = "mumbai";

console.warn("person2 is", person2);//kolkata
console.warn("user is", user);//mumbai
*/

//2nd way to deep copy
//first add lodash cdn link
let person2 = {
    name: "pranav",
    addr: {
        city: "kolkata",
        state: "west bengal"
    },
    getData:function(){
        return "some data"
    }
}
let user = _.cloneDeep(person2);
user.addr.city = "mumbai";

console.warn("person2 is", person2);
console.warn("user is", user);