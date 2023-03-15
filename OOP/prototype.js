//prototype
//Prototypical inheritance
//before comming class

function Cat(name){
    this.name = name;
}
Cat.prototype.talk = function(){ //before comming class uses of method
    console.log("meo meo");
}
const myCat = new Cat("Tiger");
console.log(myCat);
myCat.talk()//possible to access, prototype inheritance