//template literals - es-6
//better than string concat method.

/*
//before comming es-6
const firstName = "pranab";
const lastName = "sarkar";
const concat = firstName + " " + lastName;
console.log(concat);


const multiline = "i love you \n"
                   + "i miss you \n"
                   + "i need you";
console.log(multiline);
*/

/*
//after came es-6 - template literals
const firstName = "pranab";
const lastName = "sarkar";
//const concat = `${firstName} ${lastName}`;
const concat = `${firstName} ${lastName} ${10 + 4}`;
console.log(concat);

const multiline = `i love you
i miss you 
i need you`;
               
console.log(multiline);
*/

/*
JS program to print table for given (8)?

output: 8 * 1 = 8
        8 * 2 = 16(8*2)
        8 * 10 = 80  
        12*1=12
12*2=24
12*3=36
12*4=48
12*5=60
12*6=72
12*7=84
12*8=96
12*9=108
12*10=120      
*/
for (let num = 1; num <= 10; num++){
    let tableOf = 12;
    //console.log(tableOf + "*" + num + "=" + tableOf * num);
    console.log(`${tableOf} * ${num} = ${tableOf * num}`);
}
