/*
let person1 = {
    name: "PR",
    age: 22,
    from: "kolkata"
};
let person2 = {
    name: "PS",
    age: 23,
    from: "delhi"
};
let person3 = {
    name: "SD",
    age: 20,
    from: "mumbai"
};
//this problem solves OOP class
*/

/*----------------------OOP - Object Oriented Programming------------------------------------------
Classes: 
 - class is a template for creating object
 - class method will after constructor function
 - new means coping from class object
*/
/*
//before without constructor
class Person(name, age, from){
    this.name = "pranab";
    this.age = 20;
    this.from = "kolkata";
}

//now comming constructor
class Person{
    constructor(){
       this.name = "pranab";
       this.age = 20;
       this.from = "kolkata";
    }
}

//call
let person1 = new Person(); //copy of main object
let person2 = new Person(); //copy of main object
console.log(person1);
console.log(person2);
*/

//use para for dynamic value
// class Person{
//     constructor(names, ages, froms){
//        this.name = names;
//        this.age = ages;
//        this.from = froms;
//     }
//     fullName(){ //class method
//      console.log(this.name, this.age);
//     }
// }
// //call
// let person1 = new Person("pranab", "20", "kolkata");
// let person2 = new Person("bhagi", "21", "delhi");
// let person3 = new Person("rajav", "22", "delhi");

// console.log(person1);
// console.log(person1.age);
// console.log(person1.fullName());
// console.log(person2);