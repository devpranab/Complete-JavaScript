//destructure - es-6
/*
//old way before comming destructure
const studentName = ["pk", "sp", "dk", "mk", "sr"];
studentName[0];
studentName[1];
studentName[2];

let person = {
    name: "abir",
    age:25,
    from: "kolkata",
    proff: "dev"
}
const whatage = person.age;
const whatage = person.age;
const whatage = person.age;
const whatproff = person.proff;
console.log(whatage);
console.log(whatproff);
*/

//Array destructure
//no need to give same name
//after comming destructure- use of array destructure
/*
const studentName = ["pk", "sp", "dk", "mk", "sr"];
const [firstName, secondName, ...nextName] = studentName;
const [firstName, , secondName,] = studentName; //skip sp in , _ ,
console.log(firstName, secondName);
console.log(nextName);
*/

//object destructure
//name : name //for changes name
//after comming destructure- use of object destructure
/*
let person = {
    name: "abir",
    age:25,
    from: "kolkata",
    proff: "dev",
    hobby: "coding"
}
const {proff} = person;
const {name : nam, age, proff} = person; //no need to maintain ordering, use same name of object
console.log(age);
console.log(proff);
/*
//in a function pass as parameter
function display({name, age, from, proff, hobby}){
    console.log(name, age, from);
}
display(person);
*/


/*
const nestedObj = {
    name: "car",
    info: {
        color: "black",
        price: "28 lakhs",
        model: "Fcsiikl"
    }
}
const {model} = nestedObj.info;
console.log(model);
*/