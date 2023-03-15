//map filter
const numbers = [2, 4, 6, 6, 8, 9];

const result = numbers.map(function (x) {
    return x * x
})

console.log(result);

const bigger = numbers.filter( x => x < 6);

console.log(bigger);

const isThere = numbers.find(x => x > 8);

console.log(isThere);