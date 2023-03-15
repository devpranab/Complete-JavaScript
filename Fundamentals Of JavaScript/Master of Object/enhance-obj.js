//Enhance object - es-6
//concept-1: name & value both are same, shortcut way to declare property & value 
let person = {
    name,  //here property name & value name,means both are same
    email
}

//concept-2: no need to say function name
let person = {
    name, 
    email,
    print(){
        console.log(this.name, this,this.email);
    }
}
person.print();
console.log(person)