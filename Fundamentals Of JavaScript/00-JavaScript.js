/*
- What is programming?
 - Programming is a set of instruction which our computer can read, understand & produce & output.

- ECMAScript:
 - ECMAScript stands for european computer manufactures association.
 - ECMAScript is official name of JavaScript.
 - ECMAScript desides features of JavaScript and control version.

- What is Javascript?
  - A programming language for web.
  - Client side scripting language.
  - It's gives life to html web page.
  - Used along with JavaScript, a long time age.
  - it can be used in front-end and back-end
  - JavaScript is a text-based programming language used both on the client-side
  and server-side that allows you to make web pages interactive.
  - Interpreted high level programming language a single threated non blocking.

- Why Javascript?
  - It adds interactivity/behavior to the web page such as adding items to the carts, form validation etc.
  - Example: Create a button with HTML, Style with CSS and add clicking functionality by using javascript
- JavaScript engine:
  - v8 engine(chrome)
  - spidermonkey(firefox)
  - chakra(edge)

- JavaScript Verson
 - ECMAScript 1(1997)  
 - ECMAScript 2015 or ECMAScript 6 ES6

- Placement
 - internal/external/console

- Benefit of use external js
 - first load.

- One thing
 - async (default) - first download then read
 - defer - first read then download
 - <script defer src = "" ></script>

Why learn ?
- Clent Side Development (JS, jQuery, React)
- Server Side Development (nodejs, expressjs)
- Mobile App Development (react native, phone gap, ionic)
- Softwere Development (electronjs)

- Why JavaScript?
 - To craete interactive websites
 - Client side validation
 - Popup
 - Animation
 - Event etc.

- Features of JavaScript?
 - JavaScript is case-sensitive.
 - JavaScript can attribute of html tag
 - JavaScript can of html content & style
 - JavaScript can hide html html elements show
 - JavaScript is flexible language

  How to link js in html file: internal/external

  How Javascript Run and why script order is important:
  <script src="js/script.js"></script> //print this
  <script src="js/script2.js"></script> //then it
  <script src="js/script3.js"></script> //then it

 - JavaScript working setup:
  - download node, vs code / codepen.io
  - open vs code
  - create a launch.json file select nodejs
  - remove(workplace folder) & replace(file) & save
  - write code & run
  - in terminal write "node script.js"

 ## Outline
 ### Fundamentals of JavaScript
 ### OOP
 ### DOM
 ### Regular Expression
 ### Error handiling
 ### Asynchronous Programming
 ### JSON
 ### Ajax
 ### Fetch API
 ### ES6 Features
*/

/*
### Best VS Code extension for JavaScript
 - JavaScript (ES6) Code Snippets
 - ESLint

### JavaScript Learning Websites
 - YouTube/w3schools.com/MDN/freeCodeCamp.org/
 - caniuse - browser compatibility check
*/

/*
## JavaScript Interview Questions(Theoritical)

### Intro to JavaScript?

Q How internet works?
ans: DNS Server - Hoisting Server - Database.

02>Why javascript is high level programming language?
ans: Have long distance code to machine.

Q What is JavaScript?
Q. Is JavaScript case-sensitive?
ans: Yes.

Q. Different between <script defer vs <script async?

Q How runs JavaScript code in browser?

Q. Why people called weird language to javascript?
ans: Because of John+""+10 - don't comes any error it's possible to output that's why.

Q. What are the pros and cons of monolithic versus microservice architecture? 

Q. What is the reason for wrapping the entire content of a JavaScript source file in a function book?
ans: This is an increasingly common practice, employed by many popular JavaScript libraries. This technique creates a closure around the entire contents of the file which, perhaps most importantly, creates a private namespace and thereby helps avoid potential name clashes between different JavaScript modules and libraries.
Another feature of this technique is to allow for an easy alias for a global variable. This is often used in jQuery plugins.

Q. How do we target a particular frame from a hyperlink?
ans: We can target a particular frame from a hyperlink by consisting the name of the required frame and can use ‘target’ attribute in it.
<a href=”/newpage.htm” target=”newframe”>>New Page</a>
mousedown

Q. Is javascript statically or a dynamic typed language?
ans: Dynamic typed language.

Q. What are the types of pop-up boxes available?
ans: alert(), prompt(), confirm().

Q. Name a few JavaScript Frameworks?
ans: React/Vue/Angular.

Q. Whar are the features of javascript?
ans: It is a lightweight, interpreted programming language.
It is designed for creating network-centric applications.
It is complementary to and integrated with Java.
It is an open and cross-platform scripting language.

Q. Describe the difference between one-way data flow and two-way data binding?

### Operator
Q. Different between == & ===?
Q. What are truthy & falsy value in JavaScript?
Q. What is 'delete' operator?

### Data Types
Q. Different between null vs undefined?
Q. Different between fixed value & literal value?
Q. In JavaScript, how can you empty an Array?
ans: arrayList = []
Q. How are undeclared and undefined different?

Q. What is the default value of string?
ans: "" empty value.

Q. Tell some example of truthy & falsy value?

Q. How can we read elements of an array?
ans: Syntax:
var num1 = [0, 1, 2, 3, 4];

for (var i = 0; i < num1.length; i++) {

   document.write(num1[i]);
}

### Var
Q. What is array const?
ans: Array const can't be reassigned,but can change value.

Q. What is the lifetime of var?
ans: The lifetime of a var in js starts when it's declared.Function(local) variables are deleted when the function is deleted.In a browser, global variables are deleted when you close the browser window(or tab).

Q. Deifferent between declare & reassign?

Q. Different between fixed/literal value & variable value?
ans: fixed is fix, variable value is changable.

Q. Define Escape character in JavaScript.
ans:If you want to write some special character without overlapping the application, the escape character will do the task. 
The backslash character (the escape characters) is used for employing special characters (‘’, “”, ‘, &)
Example: document. write “I am a “healthy” girl”

Q. How are Attributes different from Property?
ans: Attributes-  provide more details on an element like id, type, value etc.
Property-  is the value assigned to the property like type=”text”, value=’Name’ etc.

Q. How to convert string of any base to an integer using JavaScript?
ans: The parseInt() function is used to convert numbers between different bases. It takes the string to be converted as its first parameter, 
and the second parameter is the base of the given string.

### Object
Q. How everything is a object in JavaScript?
Q. What is window object?
Q. What is bind-call-apply?
Q. What is object prototype?
Q. What are the iterables object?
Q. How you do copy object?
Q. Explain pass by value & pass by ref?
Q. How to clone a obejct?
Q. What is deep copy & shallow copy?
Q. Different between deep copy & shallow copy?
Q. How are the JavaScript window and JavaScript document different from one another?
Q. What are the data types supported by JavaScript?
ans: The data types supported by JavaScript are:
Undefined
Null
Boolean
String
Symbol
Number
Object

Q. Tell some event names?
ans: onclick,
ondblclick,
mouseout,
mouseover,
Mouseup,
mousemove.

Q. Tell some javascript errors?
ans: ref error, undefined, logical error, loadtimes error, runtime error, syntactical error.

### Function
Q. What is function?
Q. What is function expression?
Q. What is arrow function?
Q. What is function invocked?
ans: Function invocked is function call.
Q. What is default parameter?
Q. What is callback function?
Q. What is iife?
Q. What is scope?
Q. What is lexical scope?
Q. What is closure?
Q. What is currying?
Q. Different between method and function?
Q. What is method chaining system?
Q. What’s is the use of the NaN() function?

Q. What is a name function in JavaScript & how to define it?
ans:A named function declares a name as soon as it is defined. It can be defined using function keyword as :
1
2
3
function named(){
// write code here
}

Q. What is a pure function?
ans: A pure function when given the same input will always return the same output without any side effects.
These functions are essential for React+Redux apps, functional programming and reliable concurrency. They are 
completely independent of the outside state and are immune to the entire class of bugs that have to do with the shared mutable state. 
They are easy to reorganize in the code which makes programs more flexible and adaptable to future changes.


Q. What is HOF(Higher Order Function?
ans: Functions that either take in functions as parameters or return functions.
.map() and .filter() are examples of hof.

Q. What are arrow functions and name a key difference between arrow functions and regular javascript functions?
ans: 

Q. What is hoisting?
Q. What is method chaining?
Q. What is first class function?
Q. What is event?
Q. What is event bubble?
Q. What is event loop?
Q. What is single thread?
Q. What is new keyword?

## Condition
Q. What is switch statement?

## Loop
Q. What is break statement?
Q. What is continue statement?
Q. What is infinity loop?

### OOP
Q. What is OOP?
Q. What is the four pillers of OOP?
Q. What is object constructor?
Q. What is prototype?
Q. What is "this" keyword?
Q. What is inheritance?

### DOM
Q. What is DOM?
Q. What is DOM tree?
Q  Different between node & element?
Q. Different between attribute vs properties?
Q. Difference between nodeList & HTMLcollection?

###ES6
Q. What is ECMAScript?
Q. What is promise?
Q. What is spread operator?
Q. What is strict mode?
Q. Different between fetch vs async-await?
Q. What is known as the Strict mode and how can you enable it?

###API
Q. What is API?

###BOM
Q. Different between Local Storage & Session Storage?
ans:
localStorage.setItem('');
localStorage.getItem('');
const deviceInfo = JSON.Parse(deviceId);
sessionStorage.setItem('');
sessionStorage.getItem('');

Q. What is the role of event.preventDefault() method?
ans: The event.preventDefault() method notifies the user agent that default action s should not be performed if the event does not get explicitly handled.
Syntax: 
event.preventDefault();

Q. Which method is used to remove focus from the specified object in JS?
ans: The Blur method removes focus from the specified object in JS. 

Q. What are screen objects and their properties?
ans: Objects used to read the information available on the client’s screen are called screen objects. Some of the properties are:
AvailHeight
AvailWidth
ColorDepth

Q. What is the difference between window & document in JavaScript?
ans: Window	Document
JavaScript window is a global object which holds variables, functions, history, location.	
The document also comes under the window and can be considered as the property of the window.

### Advanced JavaScript
Q. Difference between multithreading and multiprocessing?


DSA JavaScript
Q. Different between stack & qeue?
*/

/*
### HR Related Questions

Q. Tell me about yourself?(English Test)
Q. Why you quit your collage?
Q. What do know about our company?
Q. Why you quit your previos job?
Q. Why you choose MERN Stack?
Q. Why you want to do job in our company?
Q. What is the strong mindset to work with team(teamwork)?
Q. What you will do to taking to mern career?
Q. From where you learned JavaScript & React?
Q. Are you interested to learn DSA?
Q. What is your goal?
Q. How to start your coding for task?
Q. What should be your salary?
Q. Any questions to us?
Q. Why should us hire you?
Q. What's your strength & weakness?
Q. Tell some project of our company?
Q. What is javascript developer/
ans: A JavaScript developer is a front-end developer who builds user interfaces using JavaScript.
*/