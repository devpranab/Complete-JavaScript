//Object prototype
//constructor

/*
//Constructor help to define blueprint of object
function Person(name, age, proff){
    this.name = name;
    this.age = age;
    this.proff = proff;
    this.fullName = function(){
        return this.name;

    }
}
Person.prototype.country = "india"; //add in constructor obj

const pranab = new Person("pranab", 20, "coder");
const devp = new Person("devp", 21, "coder");
devp.country = "india"; //add in devp
console.log(devp);
*/

//OUR CUSTOM Prototype
//add built-in method in prototype
//const pranab = new String("pranab");

// i pass doFun method in string
String.prototype.doFun = function(){
    return "i am do Function"
}

const x = "india";
console.log(x.doFun());