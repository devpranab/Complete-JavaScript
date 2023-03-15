// object property - es6
// we can now use dynamic properties

let myName = "pranav";
const myBio = {
    [myName]: "pranav",
    [20+6]: "is my old"
}
console.log(myBio);

// no need to write key & value, if both are same value
// let fName = "pranav";
// let lName = "pranav";

// const myFullName = {
//     firstName: fName,
//     lastName: lName,
// } //or
// const myFullName = {fName, lName};