//Switch Statement - for more condition better than many else if
//Evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case.
/*
var choice = "b";
//or
var choice = prompt();
var text;
switch(choice){
    case "a" : text = "option 1 selected" //if(choice == "a")
        break;
    case "b" : text = "option 2 selected"
        break;
    case "c" : text = "option 3 selected"
        break;
    case "d" : text = "option 4 selected"
        break;
        default:text = "no option selected"
}
console.log(text);
*/

/*
let area = "rectangle";
let PI = 3.142, l=5, b=4, r=3;

switch(area){
    case "circle":
        console.log("The area of the circle is:" + PI*r**2);
    break;  
    case "triangle":
        console.log("The area of the triangle is:" + (l*b)/2);
    break;   
    case "rectangle":
        console.log("The area of the rectangle is:" + (l*b));
    break;
    default:   
        console.log("Please enter a valid data!"); 
}
*/

//Exercise/Problem:Calculator tasks
// console.log(`Select an option:
// 01.sum,
// 02.subtract,
// 03.multiply,
// 04.divide`);

// let n1 = prompt("Input 1st number");
// let n2 = prompt("Input 2st number");
// let option = prompt("Input option");
// var result = null;

// n1 = parseInt(n1);
// n2 = parseInt(n2);
// option = parseInt(option);

// let n1Cond = isNaN(n1);
// let n2Cond = isNaN(n2);
// let optionCond = isNaN(option);

// if(n1Cond || n2Cond || optionCond){
//     console.log("Invalid input");
// }else{
//     switch(option){
//        case 1: result =  n1 + n2;
//        break;
//        case 2: result =  n1 - n2;
//        break;
//        case 3: result =  n1 * n2;
//        break
//        case 4: result =  n1 / n2;
//        break;
//        default:
//        break;
//     }
//     if(result == null){
//       console.log("No result");
//     }else{
//         console.log(result);
//     }
// }