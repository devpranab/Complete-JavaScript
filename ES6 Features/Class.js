/*
//before es6 class object
//constructor
function Person(age,name){
    this.age = age;
    this.name = name;
}
let person1 = new Person(23, "Ram");
console.log(person1);
//add a method
Person.prototype.getName = function(){
    console.log(this.name);
}
*/

//class - es-6 - part of oop

/*
//after es6 class
//no need help of prototype to add a method at es6 class
class Student {
    constructor(Sid, Sname){
        this.id = Sid;
        this.name = Sname;
    }
    //add method
    getName(){
        console.log(this.name);
    }
}

const student1 = new Student(1, "suvo");
console.log(student1);
console.log(student1.id);
const student2 = new Student(2, "mahi");
console.log(student2);
*/