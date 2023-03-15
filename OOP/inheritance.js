/*
class Person{
    constructor(){
       this.name = "pranab";
       this.age = 20;
    }
}
class Person2{
    constructor(){
       this.name = "pranab";
       this.age = 20;
       this.from = "kolkata";
       this.phone = 9564346654;
    }
}
//this problem solves OOP sub-class
*/
/*
//Sub class
//Inheritance(extends, super)
//sub-class inherit to base-class
// base-class > sub-class = inheritance

class Person{  //base-class
    constructor(names, ages, froms){
       this.name = names;
       this.age = ages;
       this.from = froms;
    }
    greetings(){ //method
     return `Hello ${this.name} good morning`;
    }
}

class Customer extends Person {  //sub-class
    constructor(names, ages, phn, membership){ 
    super(names, ages);
    this.phn = phn;
    this.membership = membership;
 }
    nameAge(){
        console.log(this.name, this.age);
    }
}

let person1 = new Person("pranab", "23", "mumbai");
// console.log(person1);
// console.log(person1.greetings());

let customer1 = new Customer("Rony", "22", "7654", "m-id");
let customer2 = new Customer("Rajat", "23", "1654", "m2-id");
// console.log(customer1);
// console.log(customer2);
// console.log(customer2.greetings());
// console.log(customer2.nameAge());*/

//2nd example
/*
class Parent {
    constructor(){
       this.fatherName = "Pravas";
    }
}

class Child extends Parent {
    constructor(name){
        super();
        this.name = name;
    }
    testMethod(){
        console.log(this.name);
    }
}

const baby1 = new Child("Jerry");
const baby2 = new Child("Tom");
console.log(baby1);
console.log(baby1.testMethod());
console.log(baby2);
*/