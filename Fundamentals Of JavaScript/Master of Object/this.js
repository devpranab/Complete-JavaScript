//uses this keyword

const myObj = {
    name: "pranab",
    getFullName: function(){
        //console.log(this);
        return "Mr." + this.name;
    }
}
// console.log(myObj);
// console.log(myObj.getFullName()); //Mr. pranab

const anotherObject = {
  name: "rajav"
}
anotherObject.getFullName = myObj.getFullName;
console.log(anotherObject.getFullName); //Mr. rajav

//value of this is left side value of method - anotherObject

/*
function add(a, b){
    //console.log(this); //detect window
    return a+b;
}
add(5, 6);

anotherObj.sum = add; //this = anotherObj.sum
console.log(sum); //call on anotherObject
*/

//here this means same element
//<p onclick="this.innerText='I am edited text'">This is paragraph text</p>