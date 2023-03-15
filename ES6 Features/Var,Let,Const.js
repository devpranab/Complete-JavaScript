/*let vs var vs const
let & const - es-6

      var                   let                      const
function scope          block scope               block scope
possible redeclare      no possible redeclare     not possible redeclare
possible reassign       possible reassign         not possible reassign

//Var, Let & Const
var a = 5;
var a = 6;
a = 7;
console.log(a);

const - no reassign no declare twice
const myName = "pranab";
myName = "rajav"; //no
console.log(myName);

const arrNumbers = [21, 34, 67, 43];
arrNumbers[1] = 35;  //yes
arrNumberNew = [20, 30, 60, 40]; //no change^ main array in const, same at object also
console.log(arrNumbers);

//Global scope
var a = 1;
let b = 2;
const c = 3;
var d = 10;

console.log(`Global scope:`, a, b, c);

//Function/Local scope
function test(){
    var a = 4;
    let b = 5;
    const c = 6;
    console.log(`Function scope:`, a, b, c, d);
}

test();

console.log(`Global scope:`, a, b, c);


//if scope
if(true){
    var a = 7;
    let b = 8;
    const c = 9;
    console.log(`Function scope:`, a, b, c);
}
console.log(`Global scope:`, a, b, c); //var a, reassign bcz var is global scope

//loop scope
for(var i = 0; i < 10; i++){
  console.log(`loop scope:`, a);
}
console.log(`Global scope:`, a, b, c); //var a, reassign bcz var is global scope
*/

/*it's possible to use method but not possible to main reassign array
const numbers = [12, 25];
numbers = [18, 20]; //error,not possible to reassign main array
numbers[1] = 30;
numbers.push(15); //it's possible
console.log(numbers);
*/