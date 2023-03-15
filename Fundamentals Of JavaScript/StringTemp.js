/*String templates literals - es-6
 - no need using 
 - for print multiline string using backtick ``
*/ 

// JavaScript Template Literals
// Synonyms:
// Template Literals
//let text = `He's often called "Johnny"`;

// Template Strings

// String Templates

// Back-Tics Syntax
//let text = `Hello World!`;

//before
// console.log("First line \nSecond line");
// console.log("Second line");

//after(templates literals)
/*
console.log(`First line
Second line`);
let x = `First line
Second line`;
console.log(x);
*/

//before
/*
let age = 21;
console.log("His age is" + age);

//after(templates literals)
console.log(`His age i ${age}`);
*/

/*
var a = 21
var b = 23
var result = `${a} + ${b} = ${a + b}`;
console.log(result);
*/

/*
/*
HTML Templates
Example
let header = "Templates Literals";
let tags = ["template literals", "javascript", "es6"];

let html = `<h2>${header}</h2><ul>`;
for (const x of tags) {
  html += `<li>${x}</li>`;
}

html += `</ul>`;
*/
