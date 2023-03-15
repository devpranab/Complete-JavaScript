//Strict mode in Javascript
//js find simple mistake

// "use strict";
// x = 3.14;       // This will cause an error because x is not declared

// "use strict";
// myFunction();

// function myFunction() {
//   y = 3.14;   // This will also cause an error because y is not declared
// }

//but without strict mode can't show error, it will work.

//can i use particular scope
// x = 3.14;       // This will not cause an error.
// myFunction();

// function myFunction() {
//   "use strict";
//   y = 3.14;   // This will cause an error
// }

//Strict mode changes previously accepted "bad syntax" into real errors.

"use strict";
x = {p1:10, p2:20};      // This will cause an error

"use strict";
let x = 3.14;
delete x;                // This will cause an error

"use strict";
let x = 010;             // This will cause an error

"use strict";
eval ("let x = 2");
alert (x);             // This will cause an error, eval is keyword

"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

"use strict";
with (Math){x = cos(2)}; // This will cause an error

"use strict";
delete Object.prototype; // This will cause an error

"use strict";
const obj = {get x() {return 0} };

obj.x = 3.14;            // This will cause an error

"use strict";
const obj = {};
Object.defineProperty(obj, "x", {value:0, writable:false});

obj.x = 3.14;            // This will cause an error
