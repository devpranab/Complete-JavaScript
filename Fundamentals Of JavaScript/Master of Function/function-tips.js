//Function tips - when to use a function, use function inside a loop
//Don`t repeat use this tricks

/*
let numbers = [5, 3, 1, 7, 9, 6];
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    if(number % 2 == 0){
        console.log(number, ":it is even");
    }else{
        console.log(number*2, ":it is odd");
    }
}


let fdages = [55, 53, 51, 57, 59, 56];
for(let i = 0; i<fdages.length; i++){
    const age = fdages[i];
    if(age % 2 == 0){
        console.log(age, ":age is even");
    }else{
        console.log(age, ":age is odd");
    }
}
*/

/*
//---------------------------------------------------------------------------------------------------------------
//short way
function evenify(number){
    if(number % 2 == 0){
        console.log(number, ":it is even");
    }else{
        console.log(number*2, ":it is odd");
    }
}

let numbers = [5, 12, 89, 45, 18, 8];
for(let i = 0; i<numbers.length; i++){
    const number = numbers[i];
    evenify(number);
}

let fdages = [13, 19, 20, 18, 11, 56];
for(let i = 0; i<fdages.length; i++){
    const age = fdages[i];
   evenify(age);
}
*/

//---------------------------------------------------------------------------------------------------------------
/*
//more short way (2 function)
function evenify(number){
    if(number % 2 == 0){
        console.log(number, ":it is even");
    }else{
        console.log(number*2, ":it is odd");
    }
}

function evenify_all(numbers){
    for(let i = 0; i<numbers.length; i++){
        const number = numbers[i];
        evenify(number);
    }
}

let numbers = [5, 12, 89, 45, 18, 8];
evenify_all(numbers);

let fdages = [13, 19, 20, 18, 11, 56];
evenify_all(fdages);
*/

//---------------------------------------------------------------------------------------------------------------
/*
//more short way (in one function)
function evenify_all(numbers){
    for(let i = 0; i<numbers.length; i++){
        const number = numbers[i];
        if(number % 2 == 0){
            console.log(number, ":it is even");
        }else{
            console.log(number*2, ":it is odd");
        }
    }
}

let numbers = [5, 12, 89, 45, 18, 8];
evenify_all(numbers);

let fdages = [13, 19, 20, 18, 11, 56];
evenify_all(fdages);
*/

//Four situation when you should create a function
//1-specefic task
//2-reduce duplication code of two function(DRY)
//3-part of task
//4-