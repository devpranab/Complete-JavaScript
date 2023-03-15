//JSON - javascript object notation
/*
  What is JSON?
  - JSON - JavaScript Object Notation
  - Data format for echanging data between systems running on different technology
  - Can be used with most of language like Python, PHP etc. and obviously JavaScript.
  - Has similarity with JavaScript Objects
  - Properties are wrapped with " "
  - JavaScript object: {name: "Sakib", age: 25, home: "kolkata"}
  - Jason data: {"name": "Sakib", "age": 25, "home": "kolkata"}
  - XML is alternative of JASON.
*/

//json syntax
/*
//javascript object
var student_obj = {
    name: "sk",
    age: 21,
    from: "delhi"
}
*/ 
//main different is keep in " " even property

//json syntax
var student_json = {
    "name": "sk",
    "age": 21,
    "from": "delhi"
}

/*
//covert object to json using JSON.stringify()
var student_obj_json = JSON.stringify(student_obj);
console.log(student_obj_json);
*/
/*
//covert json to object using JSON.parse()
var student_json_obj = JSON.parse(student_json);
console.log(student_json_obj);
*/