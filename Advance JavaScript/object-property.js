//object property
const students = [
    {id: 10, name: 'abu'},
    {id: 20, name: 'saeed'},
    {id: 30, name: 'ayman'}
];

const names = students.map(x => x.name);
const ids = students.map(x => x.id);
const bigger = students.filter(x => x.id>20);
const biggerOne = students.find( x => x.id>10);
console.log(biggerOne);