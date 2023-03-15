//this keyword
//ex-1
function myFunction(){
    console.log(this); //this = window
}
myFunction();

//ex-2
let myName = "pranav"; //global object
function getMyNames(){
    console.log(this.myName); //this = pranav
}
getMyNames();

//ex-3
const obj = {
    myAge: 26,
    myName(){
        console.log(this.myAge); //this = 26
    }
}
obj.myName();

//ex-4
//this object/keyword will not work with arrow function
const obj2 = {
    myAge: 26,
    myName: () => {
      console.log(this);
    }
} 
obj2.myName(); //what will be output here

//ex-5
/*What will be output of this code:
let bioData = {
    myName: {
        realName: "pranav sarkar",
        channelName: "codingme"
    },
    myAge: 26,
    getData(){
        console.log(`My name is ${this.myName.channelName} and my age is ${this.myAge}`);
    }
}
bioData.getData(); //My name is codingme and my age is 26
*/