/*
const students = [
    {id: 1, name: "PS"},
    {id: 2, name: "SR"},
    {id: 3, name: "RD"},
    {id: 4, name: "KR"},
];

let output = [];
for(let i = 0; i<students.length; i++){
    let element = students[i].name;
   // console.log(element);
    output.push(element);
}
console.log(output);
*/

//object property
//apply map
const students = [
    {id: 1, name: "PS"},
    {id: 2, name: "SR"},
    {id: 3, name: "RD"},
    {id: 4, name: "KR"},
];
const names = students.map(s => s.name);
const ids = students.map(s => s.id);
// console.log(names);
// console.log(ids);

//apply filter
const after2 = students.filter(s => s.id>2);
console.log(after2);