//Closure
//possible to a return function from another function, then make closed evnr

function stopWatch(){
    let count = 0;
    return function(){
        count++;
        return count;
    }
}

const clock1 = stopWatch();
console.log(clock1()); //1
console.log(clock1()); //2
console.log(clock1()); //3
console.log(clock1()); //4
console.log(clock1()); //5

const clock2 = stopWatch();
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());
console.log(clock2());

//clock1, clock2 different value