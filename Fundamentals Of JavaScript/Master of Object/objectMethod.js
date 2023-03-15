//Object method
//when any method have in object, then called object method that method

let person = {
    fname: "Rajav",
    lname: "Rajav",
    dob: "06-10-2000",
    fullName: function(){ //object method
        return `${this.fname} ${this.lname}`;
    }
}
console.log(person.fname);
console.log(person.fullName());