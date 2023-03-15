//json warning:javascript can`t understand manual json data, will treat as a object so before covert into jason
//covert way:
//JSON.stringify()
//JSON.parse()

//json syntax
var student = {
    "name": "sk",
    "age": 21,
    "from": "delhi"
}

//covert manual json(according to js it's object) to json
 var student_json = JSON.stringify(student);
 console.log(student_json);

//can access
// console.log(student.name);
// console.log(student.age);
// console.log(student.from);