//generator*-es6
//generator like iterator that helps to iterate
//next() - upto one yield code print
//if use return between, stop next codes

function* genFunc(){ //genFunc is a generator
    console.log("i am some random codes");
    yield 1; //single iterator
    //return;
    console.log("i am some random codes");  
    console.log("i am some random codes");  
    console.log("i am some random codes");
    yield "Rahim";
    yield 4;
    yield "hello";
}

let iter = genFunc();
console.log(iter);
console.log(iter.next().value);
console.log(iter.next());