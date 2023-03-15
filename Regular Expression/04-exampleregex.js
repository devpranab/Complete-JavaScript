// real example
//postal code
//4700, 4000

// let re;
// let str;

// re = /^([0-9]){4}/;
// str = "4000";  //true

// console.log(re.test(str));

//phone number
// re = /^(\+)?(88)?01[0-9]{9}/;
// str = "01345646675";  //true
// str = "+8801345646675";  //true
// str = "8801345646675";  //true
// console.log(re.test(str));


//email address
//pranab54.learn@edu.com.in
// re = /^([a-zA-Z0-9]\.?)+[^\.]@([a-zA-Z0-9]\.?)+[^\.]$/;
// str = "pranab65.learn@edu.com.in";  //true
// console.log(re.test(str));


const text = "#2A2A2A";
const regex = /#?([\da-fA-F{2}])([\da-fA-F{2}])([\da-fA-F{2}])/g; //as a group

const matches = text.match(regex);

const index = text.search(regex);

const replaced = text.replace(regex, "#000000");

const testing = regex.test(text);

console.log(matches, index, replaced, testing);